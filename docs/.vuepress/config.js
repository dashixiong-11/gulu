module.exports = {
    title: 'GUI',
    base:'/gulu/',
    description: '一个不知道好不好用的UI',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: 'https://baidu.com'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                    '/style/',
                ]

            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                    '/components/collapse',
                    '/components/cascader',
                ]
            }
        ]
    }
}