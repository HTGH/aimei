<style>
    .order_pro_box{
        padding-bottom:140px;
    }
    .order_pro_list{
        padding-left: 0;
        margin-top: 0;
    }
    .lable{
        border-radius: 50%;
        border: 1px solid #9c9c9c;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .lable_checked{
        background-color: #ff5053;
        background-image: url("https://img.rrcj123.com/buy/images/gougougou_403x.png");
        background-size: contain;
        border: 1px solid #ff5053;
    }
    .order_pro_list li{
        background:#fff;
        position:relative;
        padding:1rem 0.5rem 1rem 2rem;
        margin-bottom:1rem;
        padding-left:140px;
        min-height:140px;
        list-style: none;
    }
    .order_pro_list li .pic{
        display:block;
        width:100px;
        height:100px;
        position:absolute;
        left:32px;
        top:20px;
    }
    .order_pro_list li .pic img{
        display:block;
        width:100%;
    }
    .order_pro_list li i{
        display:block;
        position:absolute;
        left:6px;
        top:50%;
        margin-top:-12px;
    }
    .order_pro_list li h2{
        margin:0;
        padding:2px 0 0 0;
        font-weight:normal;
        line-height:20px;
        font-size:16px;
        /*text-overflow: -o-ellipsis-lastline;*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .order_pro_list li h2 a{
        color:#454545 !important;
    }
    .order_pro_list li h3{
        margin:0;
        padding:4px 0 0 0;
        font-weight:normal;
        color:#878787;
        line-height:20px;
        font-size:16px;
    }
    .order_pro_list li h3 span{
        display:inline-block;
        padding-left:10px;
    }
    .order_c_op{
        position:relative;
        line-height:28px;
        height:28px;
        margin-top:5px;
    }
    .order_c_op b{
        color:#f20c11;
        font-weight:normal;
    }
    .order_c_op .delC_icon{
        display:block;
        cursor:pointer;
        width:18px;
        height:18px;
        background:url(https://img.rrcj123.com/buy/images/shanchu_403x.png) no-repeat left top;
        background-size:contain;
        position:absolute;right:0;
        top:50%;
        margin-top:-5px;
    }
    /*结算*/
    .cart_fixed{
        background:#fff;
        height:60px;
        border-top:1px solid #e6e6e6;
        width:100%;
        position:fixed;
        left:0;
        bottom:50px;
        z-index:100;
    }
    .cart_fixed .billing_btn{
        height:60px;
        background:#f20c11;
        line-height:60px;
        color:#fff;
        display:inline-block;
        padding:0 24px;
        position:absolute;
        right:0;
        top:-1px;
        font-size:16px;
    }
    .cart_fixed b{
        font-weight:normal;
        color:#454545;
        font-size:16px;
        position:absolute;
        right:120px;
        top:50%;
        transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }
    .cart_fixed strong{color:#f20c11;}
    .cart_fixed font{color:#f20c11;}
    .cart_fixed span{
        position:absolute;
        left:7px;top:50%;
        transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }
</style>
<template>
    <div>
        <div class="order_pro_box">
            <ul class="order_pro_list">
                <li>
                    <i><input id='check-1' type="checkbox" name='check-1' style="display: none"/><label @click="ischecked" for="check-1" class="lable" :class="{lable_checked:ische}">&nbsp;</label></i>
                    <a href="javascript:" class="pic"><img src="https://img.rrcj123.com/buy/images/temp/pic.jpg" /></a>
                    <h2><a href="javascript:">韩版冬季中长款显瘦高领针织连衣裙长裙 </a></h2>
                    <h3>M<span>黑色</span></h3>
                    <div class="order_c_op">
                        <b>¥188.00</b>
                        <span class="delC_icon"></span>
                        <div class="mui-numbox" style="margin-left: 15px">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                            <input class="mui-input-numbox" type="number" v-model="num"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                        </div>
                    </div>
                </li>

                <li>
                    <i><input id='check-2' type="checkbox" name='check-2' style="display: none"/><label @click="ischecked2" for="check-2" class="lable" :class="{lable_checked:ische2}">&nbsp;</label></i>
                    <a href="javascript:" class="pic"><img src="https://img.rrcj123.com/buy/images/temp/p7.jpg" /></a>
                    <h2><a href="javascript:">韩版冬季中长款显瘦高领针织连衣裙长裙 </a></h2>
                    <h3>M<span>黑色</span></h3>
                    <div class="order_c_op">
                        <b>¥188.00</b>
                        <span class="delC_icon"></span>
                        <div class="mui-numbox" style="margin-left: 15px">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input class="mui-input-numbox" type="number" v-model="num2"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cart_fixed">
            <a href="#" class="billing_btn">结算</a>
            <span><input id='check-0' type="checkbox" name='check-1'  style="display: none;"/><label for="check-0" class="lable" style="margin-right: 10px;margin-bottom: -3px" :class="{lable_checked:allcheck}" @click="all_check"></label>全选</span>
            <b>合计：<strong>¥</strong><font id="price">{{price}}</font></b>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                num:1,
                num2:1,
                ische:false,
                ische2:false,
                allcheck:false,
                price:376,
            }
        },
        methods:{
            goSub(){
                if(this.num<2) return;
                this.num=this.num-1;
                this.$store.commit("substract",1);
                this.price-=188;
            },
            goAdd(){
                if(this.num>=99) return;
                this.num=parseInt(this.num)+1;
                this.$store.commit("increment",1);
                this.price+=188;
            },
            ischecked(){
                this.ische = !this.ische;
            },
            ischecked2(){
                this.ische2 = !this.ische2;
            },
            all_check(){
                this.ische=true;
                this.ische2=true;
                this.allcheck=true;
            },
        },

        watch:{
        ische:function () {
                this.allcheck = this.ische && this.ische2;
            },
        ische2:function () {
            this.allcheck = this.ische && this.ische2;
        },
        }
    }
</script>