<style>

  .kefu{
    background:#f2f2f2;
  }
  .customer_box{
    padding:2px 1px;
    height: 374px;
    width: 375px;
    position: fixed;
    top: 40px;
    z-index: 10;
    background: #eee;
  }
  .answer_box{
    position:relative;
    text-align:left;
    padding-left:75px;
    min-height:60px;
    padding-right:75px;
    padding-bottom:1px;
  }
  .answer_box .pic{
    display:block;
    width:60px;
    height:60px;
    position:absolute;
    left:0;
    top:0;
  }
  .answer_box .pic img{
    display:block;
    width:100%;
    border-radius:100%;
    -webkit-border-radius:100%;
  }
  .answer_box p{
    margin-top:16px;
    padding:16px;
    display:inline-block;
    position:relative;
    background:#fff;
    border-radius:18px;
    -webkit-border-radius:18px;
    color:#333;
    font-size:15px;
  }
  .answer_box p:before {
    content: "";
    position: absolute;
    left: -8px;
    top: 15px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #fff;
    font-size: 0;
    line-height: 0;
  }

  .ask_box{
    position:relative;
    text-align:right;
    padding-right:75px;
    min-height:60px;
    padding-left:75px;
    padding-bottom:1px;
  }
  .ask_box .pic{
    display:block;
    width:60px;
    height:60px;
    position:absolute;
    right:0;
    top:0;
  }
  .ask_box .pic img{
    display:block;
    width:100%;
    border-radius:100%;
    -webkit-border-radius:100%;
  }
  .ask_box p{
    margin-top:16px;
    text-align:left;
    padding:16px;
    display:inline-block;
    position:relative;
    background:#ffe09f;
    border-radius:18px;
    -webkit-border-radius:18px;
    color:#333;
    font-size:15px;
  }
  .ask_box p:before {
    content: "";
    position: absolute;
    right: -8px;
    top: 15px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #ffe09f;
    font-size: 0;
    line-height: 0;
  }

  .send_fixed{
    width:100%;
    background:#fff;
    padding:10px 70px 0 50px;
    position:fixed;
    left:0;
    bottom:50px;
  }
  .face_icon{
    display:block;
    width:26px;
    height:26px;
    background:url(http://img.rrcj123.com/buy/images/biaoqing_403x.png) no-repeat left top;
    background-size:contain;
  }
  .send_fixed .face_icon{
    position:absolute;
    left:16px;
    top:20px;
    margin-top:-12px;
    z-index: 11;
  }
  .send_btn{
    background:#f20c11 !important;
    display:inline-block !important;
    cursor:pointer !important;
    padding:6px 16px !important;
    color:#fff !important;
    font-size:16px !important;
    border:0 !important;
    border-radius:12px !important;
    -webkit-border-radius:16px !important;
    position:absolute !important;
    right:10px !important;
    top:20px !important;
    transform: translateY(-50%) !important;
    -moz-transform: translateY(-50%) !important;
    -ms-transform: translateY(-50%) !important;
    -webkit-transform: translateY(-50%) !important;
  }
  .send_input{
    background:#fff;
    border:none !important;
    border-bottom:1px solid #f20c11 !important;
    width:95% !important;
    line-height:28px !important;
    height:28px !important;
  }
</style>

<template>
  <div class="kefu">
    <div class="customer_box" @click="clear">
      <div class="answer_box">
        <i class="pic"><img src="http://img.rrcj123.com/buy/images/temp/mpic2.jpg" /></i>
        <p>微客服聊天界面互动微客服</p>
      </div>
      <div class="ask_box">
        <i class="pic"><img src="http://img.rrcj123.com/buy/images/temp/mpic1.jpg" /></i>
        <p>微客服聊天互动微客服</p>
      </div>
    </div>

    <div class="send_fixed">
      <span class="face_icon" @click="emojis"></span>
      <input id="Text1" type="text" class="send_input"/>
      <input id="Button1" type="button" value="发送" class="send_btn"  />
    </div>
    <div style="position: absolute;top: 470px;z-index: -1;height: 300px;margin-bottom: 200px" class="scroll" ref="wrapper">
      <span v-for="item in qq" v-show="xs" style="margin-left: 10px"><img :src="item.img" alt=""></span>
    </div>

  </div>
</template>
<script>
  export default {
      data(){
          return{
              qq:[],
              xs:false
          }
      },
      methods:{
          emojis(){
              document.getElementsByClassName("send_fixed")[0].style.bottom="200px";
              this.xs=true;
          },
          clear(){
              document.getElementsByClassName("send_fixed")[0].style.bottom="50px";
              this.xs=false;
          },
          get_emojis(){
              this.$http.get('emojis/').then(result=>{
                  this.qq=result.data;
              })
          }
      },
      created(){
          this.get_emojis();
      }
  }
</script>