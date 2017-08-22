<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in lbimgs" key="index">
                <a :href="item.url">
                     <img :src="item.img" alt="">
                </a>
            </mt-swipe-item> 
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lbimgs:[],
        }
    },
    methods: {

    },
    created() {
        this.$ajax.get('/getlunbo')
        .then(res => {
            this.lbimgs = res.data.message;
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%;
    }
</style>
