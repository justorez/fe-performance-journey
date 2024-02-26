const path = require('path');
const BASE = '/fe-performance-journey/';

module.exports = {
    base: BASE,
    title: '前端性能优化',
    description: '从用户发起访问开始到离开网站应用结束，'
        + '完整地介绍其间前端性能优化的关注点与技术手段，'
        + '帮助大家体系化得了解与学习前端性能优化相关知识',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'https://raw.githubusercontent.com/justorez/fe-performance-journey/master/img/favicon.png'
            }
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: '前端,性能优化,体验,性能,优化,网站'
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    dest: '.vuepress/dist',
    themeConfig: {
        repo: 'justorez/fe-performance-journey',
        repoLabel: 'Github',
        lastUpdated: '更新于',
        editLinks: true,
        editLinkText: '欢迎斧正',
        nav: [
            // {
            //     text: '博客',
            //     link: 'https://github.com/alienzhou/blog'
            // }, 
            // {
            //     text: '掘金',
            //     link: 'https://juejin.im/user/59ad5377518825244d206d2d/posts'
            // }
        ],
        sidebar: [
            ['/', '启程'],
            '/1-cache/',
            '/2-request/',
            '/3-response/',
            '/4-parse/',
            {
                title: '五、页面静态资源',
                path: '/5-subresources/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/5-subresources/javascript.md',
                    '/5-subresources/css.md',
                    '/5-subresources/image.md',
                    '/5-subresources/font.md',
                    '/5-subresources/video.md'
                ]
            },
            '/6-runtime/',
            '/7-preload/',
            '/END.md'
        ]
    },
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        [
            require.resolve(path.resolve(__dirname, 'plugin', 'baidu-google-analytics')),
            {
                hm: '2cd81d7d5064f6444354743b1b71da6f',
                ga: null,
                ignore_hash: false
            }
        ]
    ]
};