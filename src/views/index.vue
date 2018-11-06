<style>
  .home{
    width: 100%;
  }
  /*分类查询*/
  .category_list{
    display:inline-block;
    width:100%;
    background:#fff;
    padding:1rem;
  }
  .category_list li{
    float:left;
    width:33.3%;
    padding:6px 5px;
  }
  .category_list li a{
    display:block;
    border:1px solid #ccc;
    border-radius: 50px;
    text-align:center;
    color:#454545;
    font-size:16px;
    line-height:22px;
    padding:0.8rem 0 0.6rem 0;
  }
  .category_list li a:hover{
    background:#f20c11 !important;
    color:#fff;
    border:1px solid #f20c11;
  }
  .category_box{
    padding-bottom:20px;
    position: absolute;
    z-index: 10;
  }
  .category_box .category_list{
    padding:0 0.5rem;
  }

  /*!*位置变化*!*/
  /*.cate_po{*/
    /*position: absolute;*/
    /*top:338px;*/
  /*}*/
  /*搜索框*/
  .search_header{
    background-color:#ff5053 !important;
    position:relative;
    padding:0.5rem 4rem !important;
  }
  .category_icon{
    display:block;
    width:2rem;
    height:2rem;
    position:absolute;
    left:1rem ;
    top:50%;
    margin-top:-0.8rem;
    background:url(https://img.rrcj123.com/buy/images/fenlei_403x.png) no-repeat left top;
    background-size:contain;
  }
  .search_icon{
    display:block;
    width:2rem;
    height:2rem;
    cursor:pointer;
    position:absolute;
    right:1rem ;
    top:50%;
    margin-top:-0.8rem;
    background:url(https://img.rrcj123.com/buy/images/sousuo_403x.png) no-repeat left top;
    background-size:contain;
  }
  .search_input{
    background:#fff;
    line-height:22px;
    font-size:16px;
    margin-top: 0.5rem;
    margin-bottom: 0 !important;
    text-align:center;
    border-radius:30px !important;
  }
  /*搜索框下方*/
  .shop_header{
    margin:0 1rem;
    padding:1.2rem 32% 1rem 3.3rem;
    border-bottom:1px dashed gray;
    position:relative;
  }
  .shop_icon{
    display:block;
    width:2rem;
    height:2rem;
    cursor:pointer;
    background:url(https://img.rrcj123.com/buy/images/dianpu_403x.png) no-repeat left top;
    background-size:contain;
  }
  .shop_header .shop_icon{
    position:absolute;
    left:0 ;
    top:50%;
    margin-top:-1rem;
  }
  .shop_header strong{
    display:inline-block;
    font-weight:normal;
    color:#333;
    font-size:16px;
    border-right: 1px solid grey;
    padding: 0 25px 0 0;
  }
  .shop_header span {
    font-size: 14px;
    border-left: 1px solid #ccc;
    display: inline-block;
    width: 30%;
    position: absolute;
    right: 0;
    top: 2rem;
    text-align: right;
    color: #ff5053;
  }
  .love_icon{
    display:block;
    width:1rem;
    height:1rem;
    background:url(https://img.rrcj123.com/buy/images/fensitubiao_403x.png) no-repeat left top;
    background-size:contain;
  }
  .shop_header .love_icon{
    position:absolute;
    left:10px;
    top:-8px;
  }
  .shop_header font{
     position:absolute;
     right:5px;
     top:-10px;
   }
  /*今日公告*/
  .shop_placard{
    padding:1.2rem 0.5rem 0.5rem 10.3rem;
    position:relative;
    font-size:1.4rem;
  }
  .placard_icon{
    display:block;
    width:2.5rem;
    height:1.5rem;
    background:url(https://img.rrcj123.com/buy/images/laba_403x.png) no-repeat left top;
    background-size:contain;
  }
  .shop_placard .placard_icon{
    position:absolute;
    left:1rem;
    top:50%;
    margin-top:-1rem;
  }
  .shop_placard span{
    display:inline-block;
    color:#f20c11;
    position:absolute;
    left:4.3rem;
    top:1.2rem;
    font-size: 18px;
    font-weight: bold;
  }
  .shop_placard p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }
  /*轮播*/
  .home .mint-swipe{height:200px;}
  .home .mint-swipe img{width: 100%;height:200px;}
  /*导航*/
  .tabBox{
    padding:0.5rem 0 0.5rem 0.5rem;
    background:#fff;
    width: 100%;
  }
  .tabBox span{
    float:left;
    padding:5px;
    padding-left: 25px;
  }
  .tabBox a{
    display:inline-block;
    font-size:16px;
    border-bottom:2px solid #fff;
    padding:0 3px;
    color: #333;
    transition: all .5s linear;
  }
  .tabBox a.aon{
    border-bottom:2px solid #f20c11;
    color: #f20c11;
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
</style>
<template>
  <div class="home">
    <div class="search_header">
      <span class="category_icon" @click="cate_toggle"></span>
      <input id="skey" type="text" class="search_input" placeholder="请输入您搜索的关键词" />
      <i class="search_icon" onclick="search();"></i>
    </div>

    <div class="category_box" v-show="cate_show">
      <ul class="category_list">
        <li><a href="javascript:">羽绒服</a></li>
        <li><a href="javascript:">毛呢大衣</a></li>
        <li><a href="javascript:">围巾</a></li>
        <li><a href="javascript:">连衣裙</a></li>
        <li><a href="javascript:">牛仔裤</a></li>
        <li><a href="javascript:">毛衣</a></li>
        <li><a href="javascript:">短外套</a></li>
        <li><a href="javascript:">加厚棉衣</a></li>
        <li><a href="javascript:">运动套装</a></li>
        <li><a href="javascript:">居家服</a></li>
        <li><a href="javascript:">休闲</a></li>
        <li><a href="javascript:">保暖</a></li>
      </ul>
    </div>
    <div style="width: 100%" @click="clear_toggle">
    <div class="shop_header">
      <router-link to="/introduce"><i class="shop_icon"></i></router-link>
      <router-link to="/introduce"><strong>春暖花开女装批发店</strong></router-link>
      <span>
        <i class="love_icon"></i><font>500粉丝</font>
      </span>
    </div>

    <div class="shop_placard">
      <i class="placard_icon"></i>
      <span>今日公告</span>
      <p>一句话说明店铺公告，一句话说明店铺公告。</p>
    </div>

    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="https://img.rrcj123.com/buy/images/temp/ban1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="https://img.rrcj123.com/buy/images/temp/ban2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="https://img.rrcj123.com/buy/images/temp/ban3.jpg"></mt-swipe-item>
    </mt-swipe>

    <div class="tabBox clearfix">
      <span><a href="javascript:" @click="all_products" :class="{aon:all}">全部商品</a></span>
      <span><a href="javascript:" @click="new_products" :class="{aon:xsj}">新上架</a></span>
      <span><a href="javascript:" @click="sell_products" :class="{aon:tm}">特卖</a></span>
      <span><a href="javascript:" @click="notice" :class="{aon: gg}">店铺公告</a></span>
    </div>

    <div>
      <son1 :lei="lei" v-if="show"></son1>
      <son2 v-else></son2>
    </div>
  </div>
</div>
</template>

<script>
import son1 from "../components/son1"
import son2 from "../components/son2"
export default {
    name: 'home',
    data() {
        return {
            cate_show:false,
            show:true,
            lei: 2,
            all: false,
            xsj: false,
            tm: true,
            gg: false,
        }
    },
    components: {son1, son2},
    methods: {
        all_products() {
            this.lei = "";
            this.all = true;
            this.xsj = false;
            this.tm = false;
            this.gg = false;
            this.show=true;
        },
        new_products() {
            this.lei = 1;
            this.all = false;
            this.xsj = true;
            this.tm = false;
            this.gg = false;
            this.show=true;
        },
        sell_products() {
            this.lei = 2;
            this.all = false;
            this.xsj = false;
            this.tm = true;
            this.gg = false;
            this.show=true;
        },
        notice() {
            this.all = false;
            this.xsj = false;
            this.tm = false;
            this.gg = true;
            this.show=false;
        },
        action_menu() {
            this.mui('.mui-off-canvas-wrap').offCanvas().toggle();
        },
        cate_toggle(){
          this.cate_show=!this.cate_show
        },
        clear_toggle(){
            this.cate_show=false;
        },

    }
}
</script>
