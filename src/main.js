import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Vip from './components/vip/vip.vue';
import Search from './components/search/search.vue';
import ShopCart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import Header from './components/common/header.vue';
import Moment from 'moment';
import Axios from 'axios';

// mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// mui
import Mui from './static/libs/mui-master/dist/css/mui.css';

// mintui创建
Vue.use(MintUi);

//设置公共模块
Vue.component('Header', Header);

// 设置全局过滤器
Vue.filter('DateFilter', value => {
        return Moment(value).format('YYYY年MM月DD HH:mm:SS');
    })
    // 路由设置
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'vip',
            path: '/vip',
            component: Vip
        },
        {
            name: 'shopcart',
            path: '/shopcart',
            component: ShopCart
        },
        {
            name: 'search',
            path: '/search',
            component: Search
        }, {
            name: 'newslist',
            path: '/news/list',
            component: NewsList
        }, {
            name: 'newsdetail',
            path: '/news/detail',
            component: NewsDetail

        }

    ]
})

// 服务器请求Axiso设置
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Vue.prototype.$ajax = Axios;



new Vue({
    el: "#app",
    render: h => h(App),
    router
})