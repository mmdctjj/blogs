---
home: true
heroImage: "/fdfb6638535e6f816e4a7657bc1ed1d6_180x180.awebp"
heroText: 萌萌哒草头将军
bgImage: "/blogbg.jpeg"
bgImageStyle: { height: "calc(100vh - 57.87px)", boxShadow: "0 15px 18px rgba(0,0,0,0.2)", color: "#fff" }
heroImageStyle:
  {
    maxHeight: "488px",
    display: block,
    borderRadius: "19% 81% 23% 77% / 44% 57% 43% 56%",
    boxShadow: "0 15px 18px rgba(0,0,0,0.2)",
  } 
---

<div id="test" style="text-align: center">
  <img width="70%" src="/blogs/mmdctjj.jpg">
  <div>微信公众号：「萌萌哒草头将军」</div>
</div>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    const container = document.querySelector(`.info-wrapper`)
    const nodes = document.querySelector(`.personal-info-wrapper`)
    container.insertBefore(document.querySelector('#test'), container.children[0])

    document.querySelector('.footer-wrapper').children[0].remove()
  }
}
</script>

<style>
  .tag-item {
    background-color: rgb(225, 91, 100);
    color: #fff;
    margin: 2px;
    padding: 2px;
    cursor: pointer;
    border-radius: 0.25rem;
    color: #fff;
    line-height: 8px;
    font-size: 5px;
    transition: all 0.5s;
  }
</style>