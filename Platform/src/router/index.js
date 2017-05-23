import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'
import AppMain from '../components/layout/AppMain.vue'
import Home from '../view/Home.vue'
import storecheck from '../view/store/store_check.vue'
import storelist from '../view/store/store_list.vue'
import gyscheck from '../view/gys/gys_check.vue'
import gyslist from '../view/gys/gys_list.vue'
import Page4 from '../view/nav2/Page4.vue'
import Page5 from '../view/nav2/Page5.vue'
import Page6 from '../view/nav3/Page6.vue'
import echarts from '../view/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/home', component: Home, name: '主页', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '商户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/storecheck', component: storecheck, name: '商户审核' },
            { path: '/storelist', component: storelist, name: '商户列表' },
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '供应商管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/gyscheck', component: gyscheck, name: '供应商审核' },
            { path: '/storelist', component: storelist, name: '供应商列表' }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '客服管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '客服列表' }
            // { path: '/page5', component: Page5, name: '客服评价' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;