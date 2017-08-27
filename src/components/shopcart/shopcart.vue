<template>
    <div>
        <Header title="购物车"></Header>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(item,index) in goodsInform" :key="item.id" >
                    <mt-switch v-model="item.isChecked"></mt-switch>
                    <img :src="item.thumb_path">
                    <div class="pay-calc">
                        <p>{{item.title}}</p>
                        <div class="calc">
                            <span>￥{{item.sell_price}}</span>
                            <span @click="lessNum(item)">-</span>
                            <span>{{item.num}}</span>
                            <span @click="addNum(item)">+</span>
                            <a href="javascript:;" @click="deleteGoods(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{total.goodsCount}}件，总价￥{{total.totalPrice}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import Connector from '../common/connector.js';
export default {
    data() {
        return {
            goodsInform: [],
        }
    },
    created() {
        let shopcartinfor = JSON.parse(window.localStorage.getItem('shopcart')) || [];
        let ids = [];
        let goodsNum = [];
        shopcartinfor.forEach(function(element) {
            ids.push(element.id);
            goodsNum.push(element.num);
        });
        this.$ajax.get('goods/getshopcarlist/' + ids.join(",")).then(
            res => {
                this.goodsInform = res.data.message;
                this.goodsInform.forEach((el, index) => {
                    this.$set(el,'num', goodsNum[index]);
                    this.$set(el,'isChecked', true);
                })
                console.log(this.goodsInform);
            }
        )
    },
    methods: {
        deleteGoods(index){
            if(confirm('不要脸，你好不容易选的，删除干啥？')){
                 this.goodsInform.splice(index,1);
                 this.setLocalStorage();
                 this.emit();
            }
        },
        addNum(obj){
            obj.num++;
            this.setLocalStorage();
            this.emit();
        },
        lessNum(obj){
            if(obj.num<=1){
                return;
            }
            obj.num--;
            this.setLocalStorage();
            this.emit();
        },
        // 数据发生改变时，本地存储中的数据也将变化
        setLocalStorage(){
            let storgeArr = [];
            this.goodsInform.forEach(el => {
                storgeArr.push({
                    "id":el.id,
                    "num":el.num
                })
            });
            window.localStorage.setItem('shopcart',JSON.stringify(storgeArr))
        },
        // 通知购物车上的数量变化
         emit(){
             let num = 0;
              this.goodsInform.forEach(el => {
                  if(el.isChecked){
                    num+=el.num;
                  }
              
            });
             Connector.$emit('shop-cart2',num);
         }       

    },
    computed: {
        total() {
            let goodsCount = 0;
            let totalPrice = 0;
            this.goodsInform.forEach((ele, index) => {
                if (ele.isChecked) {
                    goodsCount += ele.num;
                    totalPrice += ele.num * ele.sell_price;
                }

            });

            return {
                goodsCount, totalPrice
            }
        }
    },
    beforeRouteLeave(to,from,next){
        if(confirm('亲，确认要离开吗')){
            next();
        }else{
            next(false);
        }
    }
}
</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li>:nth-child(1),
.pay-detail ul li>:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li>:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
