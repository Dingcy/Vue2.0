<template>
  <div>
      home
  </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            
        },
        created(){
            this.$ajax.get('getlunbo').then(
                res => {
                    console.log(res);
                }
            ).then(
                err => {
                    console.log(err);
                }
            )
        }
    }
</script>

<style>
    
</style>
