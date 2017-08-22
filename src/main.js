import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Vip from './components/vip/vip.vue';
import Search from './components/search/search.vue';
import ShopCart from './components/shopcart/shopcart.vue';
import Axios from 'axios';

// mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// mui
import Mui from './static/libs/mui-master/dist/css/mui.css';

// mintui创建
Vue.use(MintUi);


// 路由设置
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
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