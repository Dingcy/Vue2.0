<template>
    <div>
        <mt-header title="My Vue Project"></mt-header>
        <transition name="MyFade" mode="out-in">
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
            <router-link :to="{name:'home'}" class="mui-tab-item " >
                <span class="mui-icon icon-shouye"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link :to="{name:'vip'}" class="mui-tab-item" >
                <span class="mui-icon icon-huiyuan">
                </span>
                <span  class="mui-tab-label">会员</span>
            </router-link>
            <router-link :to="{name:'shopcart'}" class="mui-tab-item" >
                <span class="mui-icon icon-gouwucheman">
                     <span class="mui-badge">{{goodsNum}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link :to="{name:'search'}" class="mui-tab-item" >
                <span class="mui-icon icon-work-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>

    </div>
</template>

<script>
import Connector from './components/common/connector.js';
export default {
    data() {
        return {
            goodsNum:0,
        }
    },
   created(){
       Connector.$on('shop-cart',(num)=>{
           this.goodsNum +=num;
       });
       Connector.$on('shop-cart2',(num)=>{
           this.goodsNum = num;
       })
   },
}
</script>

<style>
   body {
    background-color: white;
}

.tmpl {
    margin-bottom: 50px;
}

.MyFade-enter-active,.MyFade-leave-active{
    transition: all 0.3s ;
}

.MyFade-enter,.MyFade-leave-to{
    opacity: 0;
}
</style>
