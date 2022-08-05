export default [
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            { path: '/', component: 'hero'},
            { path: '/item', component: 'item'},
            { path: '/summoner', component: 'summoner'}
        ]
    }
]

