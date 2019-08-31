module.exports = {
    title: 'GUI',
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
                children: [
                    '/install/',
                    '/get-started/',
                ]

            },
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }
}