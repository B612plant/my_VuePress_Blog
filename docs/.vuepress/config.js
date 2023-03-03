module.exports = {
    title: '知日的小星球',
    description: '方传智博客标题',
    base: '/my_VuePress_Blog/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '知日的 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/B612plant' },
                    { text: '掘金', link: 'https://juejin.cn/user/1086788269255384/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
        ]
    }
}