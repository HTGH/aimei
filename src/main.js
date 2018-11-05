import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import'mint-ui/lib/style.css'
import Swiper from 'swiper'
Vue.prototype.swiper=Swiper;
Vue.config.productionTip = false;

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//引入header 引入轮播  引入button
import {Header,Swipe,SwipeItem,Button} from "mint-ui"//(引入某一个库中的几个组件)
//注册header
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//引入状态管理组件vuex
import Vuex from "vuex"
Vue.use(Vuex);//注册
//创建vuex的对象store
var store=new Vuex.Store({
    state:{//共享数据
        cartCount:2
    },
    mutations:{//操作方法
        increment(state,num){state.cartCount+=num},
        substract(state,num){state.cartCount-=num},
        clearcount(state){state.cartCount=0}
    },
    getters:{//获取并监听数据变化
        /*方法*/
        optCount:function(state){
            return state.cartCount;
        }
    }
});

//引入vue-resource
import VueResource from "vue-resource"//(完整引入)
//加载vue-resource
Vue.use(VueResource);//(完整加载)

// 定义全局(日期格式)过滤器
// 第三方模块 moment 过滤器日期
// 自定义
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
    return new Date(datestr).toLocaleString();
});

// 设置全局ajax访问基础路径
Vue.http.options.root="http://101.200.33.195:3011/";

// 设置全局ajax post访问格式
Vue.http.options.emulateJSON=true;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
