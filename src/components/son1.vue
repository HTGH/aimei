<style>
    /*商品*/
    .probox{
        padding-bottom:80px;
        background:#f2f2f2;
    }
    .prolist{
        width:100%;
        margin: 0;
        padding-top: 0 !important;
        padding-left: 0 !important;
    }
    .prolist::after, .prolist:after, .prolist after {
        clear: both;
        content: ".";
        display: block;
        font-size: 0;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .prolist li{
        float:left;
        width:50%;
        background:#f2f2f2;
        padding-right:4px;
        padding-bottom:8px;
        list-style: none;
    }
    .prolist li:nth-of-type(2n){
        padding-right:0 !important;
        padding-left:4px !important;
    }
    .prolist li a{display:block;
        background:#fff;
        padding-bottom:0.5rem;
    }
    .prolist li a i{
        display:block;
    }
    .prolist li a i img{
        display:block;
        width:100%;
    }
    .prolist li span{
        display:block;
        padding:1rem 1rem 0 1rem;
        color:#454545;
        font-size:14px;
        line-height:18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
    }
    .prolist li b{
        display:block;
        font-weight:normal;
        font-size:16px;
        padding:0 1rem;
        color:#f20c11;
        vertical-align:middle;
        position:relative;
        line-height:22px;
    }
    .prolist li b label{
        display:inline-block;
        color:#878787;
        font-size:13px;
        position:absolute;
        right:1rem;
    }
    .pro_title{
        background:url(http://img.rrcj123.com/buy/images/line.png) no-repeat center center #f2f2f2;
        padding:1rem 0 1.4rem 0;
        text-align:center;
        background-size:contain;
    }
    .pro_title span{
        display:inline-block;
        color:#f20c11;
        font-size:18px;
        background:#f2f2f2;
        padding:0 1rem;
    }
</style>
<template>
    <div class="probox">
        <ul class="prolist">
            <li @click="detail" v-for="item in list">
                <router-link to="/detail">
                    <i><img :src="item.img" /></i>
                    <span>{{item.title}}</span>
                    <b><label>{{item.num}}</label>¥{{item.price}}</b>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[],

            }
        },
        props:["lei"],
        created(){
            this.get_products();
        },
        methods:{
            detail(){
                this.$router.push({path:'/detail'})
            },
            get_products(){
                var url="products?lei="+this.lei;
                this.$http.get(url).then(result=>{
                    this.list=result.body;
                })
            }
        },
        components:{
            props:["lei"]
        },
        watch:{
            lei:function () {
                this.get_products()
            }
        }
    }
</script>