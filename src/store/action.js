
import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './mutations -type'
export default {
    /**获取新闻数据** */
    get_news({
        commit, state
    }, pay) {
        if (pay.nav && pay.change_sign) {
            commit(type.LOADING, true)
            commit(type.TOPICS, [])
            Vue.http.jsonp('http://m.toutiao.com/list/?tag=' + pay.nav + '&ac=wap&count=10&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000)).then((res) => {
   
                commit(type.GET_NEWS, { data: res.body.data })

                commit(type.DATA_SHOW, true)

                commit(type.LOADING, false)
                if (res.body.return_count) {
                    commit(type.RETURN_DATA, true)
                    console.log('已经请求到新闻数据')
                } else {
                    commit(type.RETURN_DATA, false)
                    console.log('暂无新闻数据更新')
                }

            }, (res, erro) => {
                console.log('暂无新闻数据响应')
                commit(type.DATA_SHOW, false)

            })
        }
    },
    /**滚动加载新闻数据* */
    Scr_get_news(
        {commit, state}
        , pay) {
        commit(type.WATCH_NEWS, false)
      
        Vue.http.jsonp('http://m.toutiao.com/list/?tag=' + pay.nav + '&ac=wap&count=10&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000)).then((res) => {

            commit(type.GET_NEWS, { data: res.body.data })
            commit(type.WATCH_NEWS, true)
            console.log('已经滚动请求到新闻数据')
        }, (res, erro) => {
            console.log('滚动暂无新闻数据响应')
            commit(type.DATA_SHOW, false)

        })
    },
    /**获取视频数据** */
    get_video({
        commit, state
    }, pay) {
        if (pay.nav_video) {
             console.log('视频获取中')
            commit(type.LOADING, true)
             commit(type.VIDEO_RES, [])
            $.getJSON('/recommend/getChanListNews?channel=T1457068979049&subtab=' + pay.nav_video + '&size=20&devId=Ll2hLJLq%2FnV6PDeGcAOvIg%3D%3D&lat=owkpOoZ30di972TMbpFzhQ%3D%3D').then((res) => {

                commit(type.GET_VIDEO, { data: res.视频 })
                console.log('视频获取成功')
                commit(type.LOADING, false)

            }, (res, erro) => {
                console.log('视频获取失败')

            })
        }
    },
    //滚动获取视频数据
    Scr_get_video({
        commit, state
    }, pay) {
        if (pay.nav_video) {
            commit(type.WATCH_VIDEO, false)
            $.getJSON('/recommend/getChanListNews?channel=T1457068979049&subtab=' + pay.nav_video + '&size=20&devId=Ll2hLJLq%2FnV6PDeGcAOvIg%3D%3D&lat=owkpOoZ30di972TMbpFzhQ%3D%3D').then((res) => {

                commit(type.GET_VIDEO, { data: res.视频 })
                console.log('视频获取成功')
                commit(type.WATCH_VIDEO, true)
            }, (res, erro) => {
                console.log('视频获取失败')

            })
        }
    },
    /**用户登录** */
    set_user({
        commit,
        state
    }, res) {
        sessionStorage.setItem('userName', JSON.stringify(res));
        sessionStorage.setItem('login', true);
        commit(type.LOGING, true);
        commit(type.GET_USER, res)
    },
    /***用户退出** */
    user_move({
        commit, state
    }) {
        commit(type.LOGING, false);
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('login')
    }
}