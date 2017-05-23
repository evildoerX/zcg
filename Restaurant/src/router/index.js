import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'
import AppMain from '../components/layout/AppMain.vue'
import Home from '../view/Home.vue'
import Data from '../view/data/Data.vue'
import Finance from '../view/finance/Finance.vue'
import Billrecord from '../view/finance/Bill_record.vue'
import Help from '../view/help/Help.vue'
import Item from '../view/item/Item.vue'
import Itemedit from '../view/item/Item_edit.vue'
import Itemadd from '../view/item/Item_add.vue'
import Order from '../view/order/Order.vue'
import Ordercheck from '../view/order/Order-check.vue'
import Sell from '../view/sell/Sell.vue'
import Spread from '../view/spread/Spread.vue'
import Store from '../view/store/Store.vue'
import Setting from '../view/store/Setting.vue'
import Peisong from '../view/store/Peisong.vue'
import User from '../view/user/User.vue'

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
            { path: '/home', component: Home, name: '首页', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '订单',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/order', component: Order, name: '订单处理', hidden: false },
            { path: '/ordercheck', component: Ordercheck, name: '订单查询', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/item', component: Item, name: '商品', hidden: false },
            { path: '/itemedit', component: Itemedit, name: '商品编辑', hidden: true },
            { path: '/itemadd', component: Itemadd, name: '商品添加', hidden: true }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '顾客',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/user', component: User, name: '顾客评价', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '财务',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/finance', component: Finance, name: '资金管理', hidden: false },
            { path: '/billrecord', component: Billrecord, name: '账单记录', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '门店',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/store', component: Store, name: '门店信息', hidden: false },
            { path: '/peisong', component: Peisong, name: '配送管理', hidden: false },
            { path: '/setting', component: Setting, name: '设置', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/data', component: Data, name: '数据' }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/sell', component: Sell, name: '营销', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/spread', component: Spread, name: '店铺推广', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/help', component: Help, name: '帮助', hidden: false }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;