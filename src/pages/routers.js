const _import = require('@/routers/' + process.env.NODE_ENV)

export default [
    {
        path: '/demo',
        name: '首页',
        component: _import('pages/Index'),
        children: [
            {
                path: 'hello',
                name: '用户管理',
                component: _import('pages/page/HelloWorld')
            },
            {
                path: 'quanxian',
                name: '权限管理',
                component: _import('pages/page/QuanXian')
            },
            {
                path: '/',
                redirect: '/demo/hello'
            }
        ]
    },
    {
        path: '/',
        redirect: '/demo'
    }
]
