<template>
    <div>
        <lun-bo url="getlunbo"></lun-bo>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'newslist'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'photolist'}">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图文分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'goodslist'}">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {

    },
    created() {
       
    },
    mounted() {

    }
}
</script>

<style scoped>

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    margin: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}


/*清空原来的字体图标*/

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}


/*设置背景图片*/

.mui-icon-home {
    background-image: url('../../static/img/news.png');
    background-repeat: round;
}

.mui-icon-email {
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}

.mui-icon-location {
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}

.mui-icon-search {
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}


/*设置字体图标高度*/

.mui-icon {
    height: 50px;
    width: 50px;
}
</style>
