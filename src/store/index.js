import  Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import  actions from './action'
import mutations from './mutations'

Vue.use(Vuex);
const state = {
        loading: true,              //新闻列表切换加载动画
        top_go: false,               //返回顶部显示图标
        data_show:true ,                //是否有数据可以加载  
        userName:JSON.parse(sessionStorage.getItem('userName'))||{},                      //记录用户名
        login:false|| JSON.parse(sessionStorage.getItem('login')),                    //是否登录
        watch_video:true,               //显示观看视频
        watch_news:true,               //显示观看视频
        video_list:[],                   //视频数据
        topics:[]  ,                 //新闻列表数据
        change_router:true,              //改变路由标志
        return_data:true ,                 //确认是否有数据返回                  
        
}

export default  new Vuex.Store({
    state,
    mutations,
    actions,
    getters
    
})