<template>
    <div>
        <mt-header title="My Vue Project"></mt-header>
        <router-view></router-view>
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
                     <span class="mui-badge">9</span>
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
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
   body {
    background-color: white;
}

.tmpl {
    margin-bottom: 50px;
}
</style>
