---
title: 💡我居然用错了useMemo和useCallback这么久？
isTimeLine: true
date: 2023-06-05
categories:
  - 前端
tags:
  - JavaScript
  - React
---
> 文章首发公众号：萌萌哒草头将军，最近关注有🎁，欢迎关注！

我们知道，`useMemo`和`useCallback`主要作用是缓存中间状态，减少无意义的的`render`从而提高性能。但是最近我发现我对它们的使用一直有误解！

### 💡推荐阅读

-   [🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉](https://juejin.cn/post/7241567583504728119 "https://juejin.cn/post/7241567583504728119")
-   [🎉干货满满，React设计原理(二)：藏在源码里的两个圈，关键的链表结构和双缓存技术🎉](https://link.juejin.cn/?target=)

## 💎 对`useMemo`的误解

请看下面的代码，即使用了`useMemo`，在`isZero`的没有变的情况下，第二个子组件还是重新渲染了！

```js
import { useCallback, useMemo, useState } from "react";

const Child = ({ value, onClick }) => {
  return (
    <div
      style={{
        height: 100,
        background: `#${(~~(Math.random() * (1 << 24))).toString(16)}`
      }}
    >
      my value is {value.toString()}
    </div>
  );
};

export default function App() {

  const [count, setCount] = useState(0);

  const isZero = useMemo(() => !!(count % 3), [count]);

  const onClick = useCallback(() => setCount(count + 1), [count]);

  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
      <Child value={count} />
      <Child value={isZero} />
    </div>
  );
}
```

<p align="center"><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab78b32f486049348d365bd15bea677d~tplv-k3u1fbpfcp-watermark.image?" alt="demo1.gif"></p>

#### 💡相关阅读

[🎉尤雨溪为什么要推出Vapor Mode🎉](https://juejin.cn/post/7238153003282513957)

其实原因在之前的文章中也提到过：

`React`每次当组件状态发生改变时，都会从当前组件开始一直到所有叶子节点组件重新渲染。

文中同时也提到了这个问题的解决方案：子组件使用`memo`函数包裹，组件就可以按预期渲染了。

但是，此时我们去掉`useMemo`，子组件依然是按期望渲染的。

> `memo`和`useMemo`类似，都是基于`Object.is`的浅比较，仅仅对非引用类型有效。

所以上面的示例中，使用`useMemo`是没有意义的。

## 💎 对`useCallback`的误解

然而，上面的示例中，即使`onClick`函数不使用`useCallback`，组件也会按预期渲染。这是因为不管`onClick`的回调函数的缓存是否发生改变，`App`组件注定都会被渲染。

所以，现在我们得到了一个合理的代码，如下：

```js
import { memo, useCallback, useMemo, useState } from "react";

const Child = memo(({ value, onClick }) => {
  return (
    <div
      style={{
        height: 100,
        background: `#${(~~(Math.random() * (1 << 24))).toString(16)}`
      }}
    >
      my value is {value.toString()}
    </div>
  );
});

export default function App() {

  const [count, setCount] = useState(0);

  // const isZero = useMemo(() => !!(count % 3), [count]);
  const isZero = !!(count % 3);

  // const onClick = useCallback(() => setCount(count + 1), [count]);
  const onClick = () => setCount(count + 1);

  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
      <Child value={count} />
      <Child value={isZero} />
    </div>
  );
}
```

那到底应该何时使用`useCallback`呢？

请看下面的例子。在上面的代码基础上添加如下代码：

```js
  const onClickMethod = () => console.log("lll");

  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
      <Child value={count} onClick={onClickMethod} />
      <Child value={isZero} onClick={onClickMethod} />
    </div>
  );
```

此时，发现组件无法按预期渲染了，不管`isZero`是否发生变化，第二个`Child`组件都会被重新渲染。

这是因为此时的`onClickMethod`方法被做为`Child`组件的`onClick`属性了。

如果现在将`onClickMethod`方法使用`useCallback`包裹起来，就又正常了。

```js
const onClickMethod = useCallback(() => console.log("lll"), []);
```

<p align="center"><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98bb92e54bde484f8dbb6e1a9fde8c93~tplv-k3u1fbpfcp-watermark.image?" alt="demo2.gif"></p>

这才是`useCallback`的正确用法！

## 💎 总结

我们在写组件时，应该遵循下面的规律，可以有效提高页面性能：

*   👉尽量多用`memo`方法包裹组件（减少渲染次数）

*   👉当子组件的属性为非引用类型的中间状态时请用`useMemo`（减少渲染次数）

*   👉当子组件的属性为函数时请用`useCallback`（减少渲染次数）

*   👉仅作用在当前组件范围内的属性，尽量不要使用`useMemo`和`useCallback`（减少调用）

好了今天的分享到这了，希望你也不要跟我一样再用错`useMemo`和`useCallback`了！
