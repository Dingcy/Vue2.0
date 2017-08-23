<template>
    <div class="tmpl">
        <Header title="图片分享"></Header>
        <div class="photo-header">
            <ul>
                <li v-for="title in titleList">
                    <a href="javascript:;" @click="getimgData(title.id)">{{title.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgsList">
                    <router-link :to='{name:"photodetail",query:{id:img.id}}'>
                        <img v-lazy="img.img_url">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.zhaiyao}}</span>
                        </p>
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
            titleList: [],
            imgsList: [],
            id:0
        }
    },
    created() {
        this.sendreq();
    },
    methods: {
        getimgData(id) {
            this.id = id;
            console.log(this.id);
            this.sendreq();
        },
        sendreq() {
            this.$ajax.all([
                this.$ajax.get('getimages/' + this.id),
                this.$ajax.get('getimgcategory')
            ]).then(
                this.$ajax.spread((firstRes, lastRs) => {
                    this.imgsList = firstRes.data.message;
                    this.titleList = lastRs.data.message;
                    this.titleList.unshift({
                        title: '全部',
                        id: 0
                    })
                })
                ).catch(err => {
                    Console.log(err);
                })
        }
    }
}
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}





/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
