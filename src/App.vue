<style>
  .home_icon{
    width:3rem;
    height:2.8rem;
    background:url(https://img.rrcj123.com/buy/images/shouyeshouye_403x.png) no-repeat left top;
    background-size:contain;
  }
  .home_icon_click{
    background:url(https://img.rrcj123.com/buy/images/shouye_403x.png) no-repeat left top;
    background-size:contain;
  }
  .customer_icon{
    width:3.1rem;
    height:2.8rem;
    background:url(https://img.rrcj123.com/buy/images/weikefu_403x.png) no-repeat left top;
    background-size:contain;
  }
  .customer_icon_click{
    background:url(https://img.rrcj123.com/buy/images/weikefu2_403x.png) no-repeat left top;
    background-size:contain;
  }
  .store_icon{
    width:2.7rem;
    height:2.8rem;
    background:url(https://img.rrcj123.com/buy/images/dianpujieshao_403x.png) no-repeat left top;
    background-size:contain;
  }
  .store_icon_click{
    background:url(https://img.rrcj123.com/buy/images/dianpujieshao2_403x.png) no-repeat left top;
    background-size:contain;
  }
  .carts_icon{
    width:3.1rem;
    height:2.8rem;
    background:url(https://img.rrcj123.com/buy/images/gouwuche_403x.png) no-repeat left top;
    background-size:contain;
  }
  .carts_icon_click{
    background:url(https://img.rrcj123.com/buy/images/gouwuche2_403x.png) no-repeat left top;
    background-size:contain;
  }
  .member_icon{
    width:2.3rem;
    height:2.8rem;
    background:url(https://img.rrcj123.com/buy/images/wode_403x.png) no-repeat left top;
    background-size:contain;
  }
  .member_icon_click{
    background:url(https://img.rrcj123.com/buy/images/wode2_403x.png) no-repeat left top;
    background-size:contain;
  }
  .mint-header {
    background-color: #ff5053 !important;
    color: #fff;
    font-size: 16px !important;
  }
  .app-container{
    padding-top:40px;
    padding-bottom:50px;
    overflow-x:hidden;
  }
  .mui-tab-label{
    font-size: 15px !important;
  }
  .red_font{
    color: #ff5053;
  }
</style>
<template>
  <div class="app-container">
    <mt-header fixed title="艾美商城">
      <img src=""/>
    </mt-header>
    <!--路由-->
    <router-view></router-view>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/index">
        <span class="mui-icon home_icon" :class="{home_icon_click:shouye}"></span>
        <span class="mui-tab-label" :class="{red_font:shouye}">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/kefu">
        <span class="mui-icon customer_icon" :class="{customer_icon_click:kefu}"></span>
        <span class="mui-tab-label" :class="{red_font:kefu}">微客服</span>
      </router-link>
      <router-link class="mui-tab-item" to="/introduce">
        <span class="mui-icon store_icon" :class="{store_icon_click:jieshao}"></span>
        <span class="mui-tab-label" :class="{red_font:jieshao}">店铺介绍</span>
      </router-link>
      <router-link class="mui-tab-item" to="/car">
        <span class="mui-icon carts_icon" :class="{carts_icon_click:gouwu}"><span class="mui-badge">{{$store.getters.optCount}}</span></span>
        <span class="mui-tab-label" :class="{red_font:gouwu}">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon member_icon" :class="{member_icon_click:wode}"></span>
        <span class="mui-tab-label" :class="{red_font:wode}">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                shouye:"",
                kefu:"",
                jieshao:"",
                gouwu:"",
                wode:""
            }
        },
        methods:{
            active(){
                var router=this.$route.path;
                if(router==="/index"){
                    this.shouye=true;
                    this.kefu=false;
                    this.jieshao=false;
                    this.gouwu=false;
                    this.wode=false;
                }
                if(router==="/kefu"){
                this.shouye=false;
                this.kefu=true;
                this.jieshao=false;
                this.gouwu=false;
                this.wode=false;
                }
                if(router==="/introduce"){
                    this.shouye=false;
                    this.kefu=false;
                    this.jieshao=true;
                    this.gouwu=false;
                    this.wode=false;
                }
                if(router==="/car"){
                    this.shouye=false;
                    this.kefu=false;
                    this.jieshao=false;
                    this.gouwu=true;
                    this.wode=false;
                }
                if(router==="/member"){
                    this.shouye=false;
                    this.kefu=false;
                    this.jieshao=false;
                    this.gouwu=false;
                    this.wode=true;
                }
            }
        },
        created(){this.active();},
        watch:{
            $route(to,from){
                this.active();
            }
        }
    }
</script>
