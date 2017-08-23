import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Vip from './components/vip/vip.vue';
import Search from './components/search/search.vue';
import ShopCart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import PhotoList from './components/photo/PhotoList.vue';
import PhotoDetail from './components/photo/PhotoDetail.vue';
import Header from './components/common/header.vue';
import Comment from './components/common/comment.vue';
import Moment from 'moment';
import Axios from 'axios';

// 引入全局css
// import './static/css/global.css'
// mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// mui
import Mui from './static/libs/mui-master/dist/css/mui.css';
// vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// mintui创建
Vue.use(MintUi);

//设置公共模块
Vue.component('Header', Header);
Vue.component('Comment', Comment);

// 设置全局过滤器
Vue.filter('DateFilter', value => {
        return Moment(value).format('YYYY-MM-DD');
    })
    // 路由设置
Vue.use(VueRouter);
let router = new VueRouter({
    //更改默认router-link匹配锚点值后加上的class名，默认值router-link-active  
    linkActiveClass: 'mui-active',
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

        }, {
            name: 'photolist',
            path: '/images/list',
            component: PhotoList
        },
        {
            name: 'photodetail',
            path: '/images/info',
            component: PhotoDetail
        }

    ]
})

// 服务器请求Axiso设置
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Vue.prototype.$ajax = Axios;

// 设置拦截器，加载loading
Axios.interceptors.request.use(function(config) {
    MintUi.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return config;
});
Axios.interceptors.response.use(function(response) {
    MintUi.Indicator.close();
    return response;
});

new Vue({
    el: "#app",
    render: h => h(App),
    router
})