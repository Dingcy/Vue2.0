<template>
    <div class="tmpl">
        <Header :title="title"></Header>
        <div class="news-title">
            <p>{{newsdetail.title}}</p>
            <div>
                <span>{{newsdetail.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsdetail.add_time|DateFilter}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsdetail.content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            newsdetail: {},
            title: '新闻详情'
        }
    },
    created() {
        this.id = this.$route.query.id;
        this.$ajax.get('getnew/' + this.id).then(
            res => {
                this.newsdetail = res.data.message[0];
            }
        )
    },
    beforeRouteEnter(to, from, next) {
        let title = '';
        if(to.name.startsWith('goods')){
            title = "商品详情";
        }
        next(vm => {
            // 通过 `vm` 访问组件实例
            vm.title = title;
        })
    }
}
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}





/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
