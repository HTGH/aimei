<style>
    li{list-style: none}
    .clearfix::after, .clearfix:after, .clearfix after {
        clear: both;
        content: ".";
        display: block;
        font-size: 0;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .mem_info{
        background:url(https://img.rrcj123.com/buy/images/mbg.jpg) no-repeat center center;
        background-size:cover;
        padding:2rem 3rem 1rem 3rem;
        text-align:center;
    }
    .mem_info .m_pic{
        display:inline-block;
        width:80px;
        height:80px;
    }
    .mem_info .m_pic img{
        width:100%;
        border-radius:100%;
        -webkit-border-radius:100%;
    }
    .mem_info p{
        margin:0;
        padding:0;
        text-align:center;
        color:#fff;
        font-size:18px;
        padding-top:5px;
    }
    .mtab_list_box{
        background:#fff;
        margin-top: 0;
    }
    .mtab_list{
        margin: 0;
        padding: 0;

    }
    .mtab_list li{
        float:left;
        width:20%;
        text-align:center;

    }
    .mtab_list li a{
        display:block;
        padding:3.5rem 0 0.5rem 0;
        position:relative;
        text-align:center;
        font-size:15px;
        color: #333333;
    }
    .mtab_list li a em{
        display:inline-block;
        font-style:normal;
        position:absolute;
        left:50%;
        top:0.5rem;
        background:#fff;
        font-size:12px;
        width:16px;
        height:16px;
        text-align:center;
        line-height:16px;
        border:1px solid #f20c11;
        color:#f20c11;
        border-radius:100%;
        -webkit-border-radius:100%;
    }
    .mtab_list li a i{
        display:block;
        position:absolute;
        left:50%;
        top:1rem;
    }
    .dingdanqueren_icon{
        display:block;
        width:2.2rem;
        height:2.2rem;
        margin-left:-1rem;
        background:url(https://img.rrcj123.com/buy/images/dingdanqueren_403x.png) no-repeat left top;
        background-size:contain;
    }
    .dabaozhong_icon{
        display:block;
        width:2rem;
        height:2.2rem;
        margin-left:-1.1rem;
        background:url(https://img.rrcj123.com/buy/images/dabaozhong_403x.png) no-repeat left top;
        background-size:contain;
    }
    .dabaowancheng_icon{
        display:block;
        width:2rem;
        height:2rem;
        margin-left:-1.2rem;
        background:url(https://img.rrcj123.com/buy/images/dabaowancheng_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fahuozhong_icon{
        display:block;
        width:2.2rem;
        height:2.6rem;
        margin-left:-1.2rem;
        background:url(https://img.rrcj123.com/buy/images/fahuozhong_403x.png) no-repeat left top;
        background-size:contain;
    }
    .yifakuaidi_icon{
        display:block;
        width:2.6rem;
        height:2rem;
        margin-left:-1.5rem;
        background:url(https://img.rrcj123.com/buy/images/yifakuaidi_403x.png) no-repeat left top;
        background-size:contain;
    }
    /*头以下*/
    .fastway_list_box{
        padding-top:0;
        padding-bottom:80px;
    }
    .fastway_list{background:#fff;padding-left:10px}
    .fastway_list li a{
        display:block;
        position:relative;
        padding-left:4rem;
        padding-right:1rem;
    }
    .fastway_list li a span{
        display:block;
        border-bottom:1px solid #e6e6e6;
        color:#666;
        font-size:16px;
        padding:1rem 0;
    }
    .fastway_list li:last-child a span{border-bottom:0;}
    .fastway_list li b{
        display:block;
        position:absolute;
        left:0.7rem;
        top:50%;
    }
    .wl_icon{
        display:block;
        width:2rem;
        height:1.8rem;
        margin-top:-1.1rem;
        background:url(https://img.rrcj123.com/buy/images/dingdankuaidi_403x.png) no-repeat left top;
        background-size:contain;
    }
    .right_icon{
        display:block;
        width:0.6rem;
        height:1.2rem;
        background:url(https://img.rrcj123.com/buy/images/youjiantou-_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li .right_icon{
        position:absolute;
        right:1rem;
        top:50%;
        margin-top:-0.7rem;
    }
    .fastway_list li b.morder_icon{
        display:block;
        width:1.6rem;
        height:2rem;
        left:1rem;
        margin-top:-1.2rem;
        background:url(https://img.rrcj123.com/buy/images/wodedingdan_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li b.mbd_icon{
        display:block;
        width:1.9rem;
        height:1.8rem;
        left:1rem;
        margin-top:-1.1rem;
        background:url(https://img.rrcj123.com/buy/images/woyaobudan_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li b.fav_icon{
        display:block;
        width:2rem;
        height:1.8rem;
        margin-top:-1.1rem;
        left:1rem;
        background:url(https://img.rrcj123.com/buy/images/wodeshoucang_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li b.footsteps_icon{
        display:block;
        width:1.4rem;
        height:2.2rem;
        margin-top:-1.3rem;left:1.2rem;
        background:url(https://img.rrcj123.com/buy/images/liulanzuji_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li b.sales_icon{
        display:block;
        width:2rem;
        height:2rem;
        left:1rem;
        margin-top:-1.2rem;
        background:url(https://img.rrcj123.com/buy/images/shouhouguanli_403x.png) no-repeat left top;
        background-size:contain;
    }
    .fastway_list li b.locate_icon{
        display:block;
        width:2rem;
        height:2rem;
        left:1rem;
        margin-top:-1.2rem;
        background:url(https://img.rrcj123.com/buy/images/shouhuodizhi_403x.png) no-repeat left top;
        background-size:contain;
    }
</style>
<template>
    <div>
        <div class="mem_info">
            <span class="m_pic"><img src="https://img.rrcj123.com/buy/images/temp/mpic1.jpg" /></span>
            <p>用户名</p>
        </div>
        <div class="mtab_list_box">
            <ul class="mtab_list clearfix">
                <li><a href="javascript:"><i class="dingdanqueren_icon"></i><span>订单确认</span><em>1</em></a></li>
                <li><a href="javascript:"><i class="dabaozhong_icon"></i><span>打包中</span><em>1</em></a></li>
                <li><a href="javascript:"><i class="dabaowancheng_icon"></i><span>打包完成</span><em>1</em></a></li>
                <li><a href="javascript:"><i class="fahuozhong_icon"></i><span>发货中</span></a></li>
                <li><a href="javascript:"><i class="yifakuaidi_icon"></i><span>已发快递</span><em>1</em></a></li>
            </ul>
        </div>
        <div class="fastway_list_box">
            <ul class="fastway_list">
                <li><a href="javascript:"><b class="wl_icon"></b><i class="right_icon"></i><span>订单快递|物流</span></a></li>
                <li><a href="javascript:"><b class="morder_icon"></b><i class="right_icon"></i><span>我的订单</span></a></li>
                <li><a href="javascript:"><b class="mbd_icon"></b><i class="right_icon"></i><span>我要补单</span></a></li>
                <li><a href="javascript:"><b class="fav_icon"></b><i class="right_icon"></i><span>我的收藏</span></a></li>
                <li><a href="javascript:"><b class="footsteps_icon"></b><i class="right_icon"></i><span>浏览足迹</span></a></li>
                <li><a href="javascript:"><b class="sales_icon"></b><i class="right_icon"></i><span>售后管理</span></a></li>
                <li><a href="javascript:"><b class="locate_icon"></b><i class="right_icon"></i><span>收货地址</span></a></li>
            </ul>
        </div>
    </div>
</template>