module.exports = {
  title: '萌萌哒草头将军',
  description: '千里之行，始于足下',
  base: '/blogs/',
  theme: 'reco',
  search: true,
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  themeConfig: {
    nextLinks: true,
    prevLinks: true,
    lastUpdated: '最后更新',
    noFoundPageByTencent: false,
    logo: "/fdfb6638535e6f816e4a7657bc1ed1d6_180x180.awebp",
    authorAvatar: "/fdfb6638535e6f816e4a7657bc1ed1d6_180x180.awebp",
    type: "blog",
    author: "萌萌哒草头将军",
    subSidebar: 'auto',
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    nav: [
      { text: "首页", link: '/', icon: 'reco-home' },
      // { text: "博客", link: '/articles', icon: 'reco-document'},
      {
        text: "掘金", link: "https://juejin.cn/user/1116759543260727/posts", icon: 'reco-juejin'
      },
      { text: "Github", link: "https://github.com/mmdctjj", icon: 'reco-github' },
      { text: '最近更新', link: '/timeline/', icon: 'reco-date' },
    ],

    // sidebar: [
    //   {
    //     title: "欢迎学习",
    //     path: "/",
    //     collapsable: false,  // 是否折叠
    //     children: [{ title: "博客简介", path: "/" }],
    //   },
    //   {
    //     title: "基础篇",
    //     // path: "/blogs/1",
    //     collapsable: true,
    //     children: [
    //       { title: "第一篇", path: "/blogs/1" },
    //       { title: "第二篇", path: "/blogs/2" },
    //     ]
    //   } 
    // ],
    // 博客配置
    blogConfig: {
      category: {
        location: 10, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 10, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
    vssueConfig: {
      platform: 'github',
      owner: 'mmdctjj',
      repo: 'blogs-comments',
      clientId: '246f857f4daeae0e5b93',
      clientSecret: '5bde60c07ac7f6fc13ad0923942a72991c2d4bd7',
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-pagation', '@vuepress-reco/vuepress-plugin-comments']
  ]
}
