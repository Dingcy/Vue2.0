<template>
    <div class="tmpl">
        <Header title="新闻列表"></Header>
        <ul class="mui-table-view">
            <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
               <router-link :to="{name:'newsdetail',query:{'id':news.id}}">
                    <img v-lazy="news.img_url" class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <span v-text="news.title"></span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time|DateFilter}}</p>
                        </div>
                    </div>
                </router-link> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[], //存储新闻列表数据
        }
    },
    created(){
        this.$ajax.get('getnewslist')
        .then(res=>{
            this.newsList = res.data.message;//返回数组
        })
        .catch(err=>{
            console.log('新闻列表获取失败',err);
        })
    }
}
</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}

image[lazy=loading] {
  width: 40px;
  height: 100px;
  margin: auto;
}
</style>
