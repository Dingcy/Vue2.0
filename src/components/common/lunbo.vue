<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in lbimgs" :key="index">
            <a :href="item.url">
                <img ref="img" :src="item.img" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    data() {
        return {
            lbimgs: [],
        }
    },
    props:['url'],
    created(){
         this.$ajax.get(this.url)
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
.mint-swipe {
    height: 200px;
}

img {
    width: 100%;
}
</style>

