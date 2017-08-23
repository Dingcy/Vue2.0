<template>
    <div class="tmpl">
        <Header title="图片详情"></Header>
        <div class="photo-title">
            <p>{{infor.title}}</p>
            <span>发起日期：{{infor.add_time|DateFilter}}</span>
            <span>{{infor.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in imginfor" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!-- <img :src="item.src"> -->
                 <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, imginfor)">
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="infor.content"></p>
        </div>

        <!-- 评论区 -->
        <comment></comment>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            infor: {},
            imginfor: []
        }
    },
    created() {
        this.id = this.$route.query.id;
        this.$ajax.all([
            this.$ajax.get('getimageInfo/' + this.id),
            this.$ajax.get('getthumimages/' + this.id)
        ]).then(
            this.$ajax.spread((firstRes, lastRs) => {
                this.infor = firstRes.data.message[0];
                this.imginfor = lastRs.data.message;
                this.imginfor.forEach(element=> {
                    element.w = 600;
                    element.h = 400;
                });
            })
            ).catch(err => {
                Console.log(err);
            })
    }
}
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}
</style>
