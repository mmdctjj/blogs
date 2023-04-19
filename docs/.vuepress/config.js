module.exports = {
  title: '萌萌哒草头将军',
  description: '千里之行，始于足下',
  base: '/blogs/',
  theme: 'reco',
  search: true,
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
      {
        text: "掘金", link: "https://juejin.cn/user/1116759543260727", icon: 'reco-juejin'
      },
      { text: "Github", link: "https://github.com/mmdctjj", icon: 'reco-github' },
      { text: '最近更新', link: '/timeline/', icon: 'reco-date' },
    ],
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
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'mmdctjj',
    //   repo: 'commentsBlogs',
    //   clientId: '246f857f4daeae0e5b93',
    //   clientSecret: 'Iv1.4b91dc0030b84d7f',
    // }
  },
  plugins: ['@vuepress/blog']
}