<style>
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,
    fieldset,input,textarea,p,blockquote,th,td {
        margin:0;
        padding:0;
    }
    /*顶部*/
    .pro_tab{
        background:#fff;
        padding:1rem 0;
    }
    .pro_tab span{
        float:left;
        margin-left: 95px;
        width:50%;
        /*border-right:1px solid #ccc;*/
        text-align:center;
    }
    .pro_tab span:last-child{
        /*border-right:0;*/
    }
    .pro_tab span a{
        color:#454545;
        padding:0 10px;
    }
    .pro_tab span a.aon{
        border-bottom:3px solid #f20c11;
        padding-bottom:8px;
    }
    .proban .slideBox .hd ul{display:none;}
    .proban .slideBox .hd ul li img{display:block;width:100%!important;height: 375px;}
    .proban .slideBox .hd{text-align:right;}
    .proban .slideBox .pageState{
        position:absolute;
        right:10px;
        top:0;
        color:#fff;
    }
    /*顶部下方*/
    .pro_header{
        background:#fff;
        position:relative;
        padding:1rem;
        padding-right:80px;
    }
    .pro_header h2{
        margin:0;
        padding:0;
        color:#666;
        font-size:18px;
        font-weight:normal;
        line-height:22px;
    }
    .pro_header h3{
        margin:0;
        padding:5px 0 0 0;
        color:#878787;
        font-size:16px;
        font-weight:normal;
    }
    .pro_header h3 b{
        color:#f20c11;
        font-size:18px;
    }
    .pro_header h3 font{
        display:inline-block;
        padding-left:10px;
        padding-right:10px;
    }
    .pro_header .pro_tips{
        border-right:1px solid #ccc;
    }
    .pro_header .share_span{
        display:inline-block;
        text-align:center;
        color:#bfbfbf;
        font-size:16px;
        position:absolute;
        right:0;
        top:50%;
        width:80px;
        transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }
    .pro_header .share_span b{
        text-align:center;
        display:block;
        font-weight:normal;
        line-height:16px;
    }
    .share_icon{
        display:inline-block;
        width:30px;
        height:30px;
        background:url(http://img.rrcj123.com/buy/images/fenxiang_403x.png) no-repeat left top;
        background-size:contain;
    }
    /*快递栏*/
    .pro_express{
        background:#fff;
        padding:0.8rem;
        margin-top:0.5rem;
        position:relative;
        color:#878787;
    }
    .pro_express span{
        position:absolute;
        right:1rem;
    }
    .pro_express b{
        font-weight:normal;
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }
    /*选规格*/
    .pro_virtue{
        background:#fff;
        margin-top:0.5rem;
        padding:0 1rem;
    }
    .pro_vlist{
        position:relative;
        padding:0.7rem 0 0 0.5rem;
        padding-left:50px;
    }
    .pro_vlist b{
        display:inline-block;
        line-height:34px;
        position:absolute;
        left:0;
        color:#454545;
        font-weight:normal;
    }
    .pro_vlist span{
        display:inline-block;
        border:1px solid #ccc;
        line-height:34px;
        padding:0 0.7rem;
        margin-right:5px;
        margin-bottom:3px;
    }
    .pro_vlist span.aon{
        color:#f20c11;
    }
    /*加减按钮*/
    .quantity-form{
        display:inline-block;
        background:#fff;
        border:1px solid #ccc;
        z-index:3;
        height:28px;
        white-space:nowrap;
        width:90px;
    }
    .quantity-form a{
        display:block;
        width:27px;
        height:26px;
        float:left;
        cursor:pointer;
        position:relative;
    }
    .quantity-form .input_quantity{
        width:32px;
        height:26px;
        font-size:1.2rem;
        text-align:center;
        float:left;
        background:none;
        border:0;
        line-height:26px;
        color:#5c5c5c;
        vertical-align:middle;
        overflow:hidden;
    }
    .quantity-form .icon_lower{
        border-right:1px solid #ccc;
    }
    .quantity-form .icon_lower:before{
        content:" ";
        width:16px;
        height:1px;
        background:#989191;
        position:absolute;
        left:5px;
        top:50%;
    }
    .quantity-form .icon_plus{
        border-left:1px solid #ccc;
    }
    .quantity-form .icon_plus:before{
        content:" ";
        width:16px;
        height:1px;
        background:#f20c11;
        position:absolute;
        left:6px;
        top:50%;
    }
    .quantity-form .icon_plus:after{
        content:" ";
        width:1px;
        height:16px;
        background:#f20c11;
        position:absolute;
        left:13px;
        top:6px;
    }
    .patch_op .quantity-form{
        position:absolute;
        left:50%;top:3px;
        transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }
    /*图文详情*/
    .pro_warp{
        padding:1rem;
        background:#fff;
        margin-top:0.5rem;
        padding-bottom:80px;
    }
    .pro_warp p{
        padding-bottom:0.5rem;
    }
    .pro_warp img{max-width:100%;}
    /*底部*/
    .pro_fixed{
        background:#fff;
        width:100%;
        left:0;
        bottom:0;
        position:fixed; z-index:100;
        border-top:1px solid #e6e6e6;
    }
    .pro_fixed a{
        display:block;
        float:left;
        width:15%;
        text-align:center;
        padding:35px  0 0.5rem  0.3rem;
        position:relative;
    }
    .pro_fixed a span{
        display:block;
        text-align:center;
        font-size:16px;
        color: #222222;
    }
    .pro_fixed a i{
        display:block;
        position:absolute;
        left:50%;
        top:0.5rem;
    }
    .sto_icon{
        width:1.9rem;
        height:1.6rem;
        margin-left:-0.8rem;
        background:url(http://img.rrcj123.com/buy/images/dianpu_403x.png) no-repeat left top;
        background-size:contain;
    }
    .custo_icon{
        width:1.7rem;
        height:1.6rem;
        margin-left:-0.8rem;
        background:url(http://img.rrcj123.com/buy/images/kefu_403x.png) no-repeat left top;
        background-size:contain;
    }
    .keep_icon{
        width:1.6rem;
        height:1.6rem;
        margin-left:-0.6rem;
        background:url(http://img.rrcj123.com/buy/images/xing1.png) no-repeat left top;
        background-size:contain;
    }
    .keep_icon_toggle{
        background:url(http://img.rrcj123.com/buy/images/xing2.png) no-repeat left top;
        background-size:contain;
    }
    .pro_fixed .order_now_btn{
        background:#f20c11;
        width:25%;
        border:0;
        color:#fff;
        text-align:center;
        height:101%;
        position:absolute;
        right:0;
        top:-1px;
        font-size:16px;
    }
    .pro_fixed .add_cart_btn{
        background:#f2a90c;
        width:30%;
        border:0;
        color:#fff;
        text-align:center;
        height:101%;
        position:absolute;
        right:25%;
        top:-1px;
        font-size:16px;
    }
    .clearfix::after, .clearfix:after, .clearfix after {
        clear: both;
        content: ".";
        display: block;
        font-size: 0;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }

    html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 375px;
        overflow: hidden;
        position: relative;
    }
    .pagination{
        display: block;
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 30px;
        color: #242424;
    }
    .swiper-wrapper{
        display: flex;
        flex-wrap: nowrap;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
<template>
    <div>
        <div  class="pro_tab clearfix">
            <span><a class="aon">图片详情</a></span>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="http://img.rrcj123.com/buy/images/temp/p2.jpg" style="height: 375px;"/></div>
                <div class="swiper-slide"><img src="http://img.rrcj123.com/buy/images/temp/p3.jpg" style="height: 375px;"/></div>
                <div class="swiper-slide"><img src="http://img.rrcj123.com/buy/images/temp/p4.jpg" style="height: 375px;"/></div>
                <div class="swiper-slide"><img src="http://img.rrcj123.com/buy/images/temp/p5.jpg" style="height: 375px;"/></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="pagination">{{i}}/4</div>
        </div>
        <div class="pro_header">
            <div class="pro_tips">
                <h2>韩版冬季长款徽章系收腰修身显瘦高领连衣裙</h2>
                <h3><b>¥188</b><font>3件</font>起批</h3>
            </div>
            <span class="share_span"><i class="share_icon"></i><b>分享商品</b></span>
        </div>
        <div class="pro_express">快递：6.00<span>杭州</span><b>月度热销55</b></div>
        <div class="pro_virtue">
            <div class="pro_vlist"><b>颜色</b><span>黑色</span><span class="aon">紫色</span></div>
            <div class="pro_vlist"><b>尺码</b><span>S</span><span>M</span><span class="aon">L</span></div>
            <div class="pro_vlist">
                <b>数量</b>
                <div class="mui-numbox" style="margin-bottom: 5px">
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                    <input class="mui-input-numbox" type="number" v-model="num"/>
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                </div>
            </div>
        </div>
        <div class="pro_warp">
            <p>三只松鼠_小贱牛板筋120gx2袋休闲零食特产麻辣/烧烤味 烧烤味</p>
            <img src="http://img.rrcj123.com/buy/images/temp/p2.jpg" />
            <img src="http://img.rrcj123.com/buy/images/temp/p3.jpg" />
            <img src="http://img.rrcj123.com/buy/images/temp/p4.jpg" />
        </div>
        <div class="pro_fixed clearfix">
            <router-link to="/introduce"><i class="sto_icon"></i><span>店铺</span></router-link>
            <router-link to="/kefu"><i class="custo_icon"></i><span>客服</span></router-link>
            <a href="javascript:" @click="sc_icon"><i class="keep_icon" :class="{keep_icon_toggle:toggle_sc}"></i><span>收藏</span></a>
            <input type="button" value="立即订购" class="order_now_btn" />
            <input type="button" value="加入购物车" class="add_cart_btn" />
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                i:1,
                num:1,
                toggle_sc:false,
            }
        },
        methods:{
            page(){
                var trans=document.getElementsByClassName("swiper-wrapper")[0].style.transform;
                if(trans=="translate3d(0px, 0px, 0px)"){this.i=1;}
                else if(trans=="translate3d(-375px, 0px, 0px)"){this.i=2}
                else if(trans=="translate3d(-750px, 0px, 0px)"){this.i=3}
                else if(trans=="translate3d(-1125px, 0px, 0px)"){this.i=4}
            },
            goSub(){
                if(this.num<1) return;
                this.num=this.num-1;

            },
            goAdd(){
                if(this.num>=99) return;
                this.num=parseInt(this.num)+1;

            },
            sc_icon(){
                this.toggle_sc=!this.toggle_sc;
            }
        },
        mounted() {
            var swiper = new this.swiper('.swiper-container');
        },
        created(){this.t=setInterval(this.page,100)},
        destroyed(){
            clearInterval(this.t);
        }
    }
</script>