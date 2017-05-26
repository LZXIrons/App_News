import * as type from './mutations -type'

export default {
    //添加数据到新闻列表
    [type.GET_NEWS](state,payload){
       payload.data.forEach((topic) => {
             state.topics.push(topic)
           })
    },
    //获取视频数据
    [type.GET_VIDEO](state,video){
        video.data.forEach((data)=>{
            state.video_list.push(data)
        })
    },
    //确认数据是否返回
    [type.RETURN_DATA](state,return_sign){
        state.return_data=return_sign
    },

    //切换栏目动画
    [type.LOADING](state,loading){
        state.loading=loading
    },

    //回到顶部
    [type.TOP_GO](state,top_go){
        state.top_go=top_go
    },
    //切换路由初始化新闻列表数据
    [type.TOPICS](state,topics){
        state.topics=topics
    },

    //进入视频栏目初始化栏目数据
    [type.VIDEO_RES](state,video_res){
        state.video_list=video_res
    },
    //判断是否有可请求的数据返回
    [type.DATA_SHOW](state,data_show){
        state.data_show=data_show
        
    },
    //是否登录
     [type.LOGING](state,login){
        state.login=login
       
    },
     //是否登录
     [type.GET_USER](state,user){
        state.userName=user
       
    },
    //观看视频提示
    [type.WATCH_VIDEO](state,watch){
        state.watch_video=watch
    },
     //观看新闻提示
    [type.WATCH_NEWS](state,watch){
        state.watch_news=watch
    },


}