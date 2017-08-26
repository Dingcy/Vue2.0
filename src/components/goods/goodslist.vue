<template>
    <div class="goodslist">
        <Header title="商品列表"></Header>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="autoFill" @bottom-status-change="stateChange" ref="loadmore">
            <ul class="mui-table-view mui-grid-view">
                <li v-for="(item,index) in goodsList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
                    <router-link :to="{name:'goodsDetail',query:{goodsId:item.id}}">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body">{{item.title}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{item.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodsList: [],
            currentPage: 1,
            allLoaded: false,//禁止上拉函数的触发
            autoFill: false,//检测数据是否撑满父盒子的机制，自动调用上拉函数，默认值是true
        }
    },
    created() {
        this.loadMoreDataFirst();
    },
    methods: {
        loadMoreDataFirst() {
            this.$ajax.get('getgoods?pageindex=1').then(res => {
                this.goodsList = this.goodsList.concat(res.data.message);
            }).catch(err => {
                console.log(err);
            })
        },
        loadMoreData() {
            this.$ajax.get('getgoods?pageindex=' + this.currentPage).then(res => {
                if (res.data.message != 10) {
                    this.allLoaded = true;
                }
                this.goodsList = this.goodsList.concat(res.data.message);
            }).catch(err => {
                console.log(err);
            })
        },
        loadBottom() {
            this.currentPage++;
            console.log(this.currentPage);
            this.loadMoreData();
            this.$refs.loadmore.onBottomLoaded();
        },
        stateChange(status) {
            this.topStatus = status;
        },
    }
}
</script>
<style scoped>
.goodslist {
    margin-bottom: 50px;
}

.mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
}

.sell>span {
    float: left;
    color: red;
    text-align: left;
}

.detail>.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail>.count {
    float: right;
    text-align: right;
    font-size: 15px;
}

/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
}
</style>
