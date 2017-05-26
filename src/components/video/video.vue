<template>
    <div>
        <head_top>
            <mt-header title="" style="background: #d43d3d" slot="video">
                <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </head_top>
        <video_nav></video_nav>
        <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
            <el-row type="flex" justify="space-between" class="El_row animated" v-show="!loading">
                <el-col :span="11" v-for="(item, index) in video_list" :key="index" class="El_col">
                    <router-link :to="{'name':'video_con','params':{
                    id:item.topicSid,
                    url:item.mp4_url,
                    replyCount:item.replyCount,
                    topic_icons:item.videoTopic.topic_icons,
                    title:item.title,
                    autor:item.topicName,
                    watch_num:item.playCount,

                }}" class="El_route">
                        <el-card class="box_wra" :body-style="{ padding: '0px' }">
                            <img v-lazy="item.cover" class="image">
                            <div style="padding: 10px;">
                                <p class="text_desc" style="-webkit-box-orient: vertical">{{item.title}}</p>
                                <div class="bottom clearfix">
                                    <time class="time">{{ item.ptime |date }}</time>
                                    <el-button type="text" class="button">观看</el-button>
                                </div>
                            </div>
                        </el-card>
                        </router-link>
                </el-col>
            </el-row>
        </transition>
        <mt-spinner type="triple-bounce" color="red" v-show="loading" class="loading"></mt-spinner>
        <div class="loading_fo" v-if="!loading">
            <mt-spinner type="fading-circle" color="red"></mt-spinner>
            <span class="loading_fo_t"> 拼命加载中</span>
        </div>
        <foot_bottom :css_video='Isactive'></foot_bottom>
    </div>
</template>

<script>
    import moment from 'moment'
    import head_top from '../head/head.vue'
    import video_nav from '../head/video_nav.vue'
    import foot from '../foot/foot_nav.vue'
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    import * as type from '../../store/mutations -type.js'
    export default {
        data() {
            return {
                nav_video: 'Video_Recoms',
                Isactive:true,
            }
        },
        computed: {
            ...mapGetters([
             'loading',
            'video_list',
            'watch_video',
            ])    
        },
        methods: {
            ...mapActions([
                'get_video',
            
            ]),

        },
        created() {
            //初始化数据
            this.$store.commit(type.LOADING, true)
            let temp
            let history
            if (window.sessionStorage.temp) {
                temp = JSON.parse(window.sessionStorage.temp)
            }
            history = this.$route.query.v_nav || 'Video_Recoms'
            if (temp && temp.nav === history) {
                this.video_list = temp.video_list
                this.nav_video = temp.nav
                this.$nextTick(() => {
                    $(window).scrollTop(temp.scrollTop)
                })
                this.$store.commit(type.LOADING, false)
                console.log('已有记录')
            } else {
                this.$store.commit(type.VIDEO_RES, [])
                this.get_video({
                    nav_video: this.nav_video,
                })
                console.log('初始化数据')
            }

        },
        mounted() {
            $(window).on('scroll', () => {
                let wh = $(window).height()
                let sh = $(window).scrollTop()
                console.log(this.watch_video)
                if ($(document).height() < (wh + sh + 20) && this.watch_video) {
                    this.get_video({
                        nav_video: this.$route.query.v_nav || this.nav_video,
                    })
                    console.log('进入视频获取流程')
                }
            })
        },

        watch: {
            $route(to, from) {
                this.get_video({
                    nav_video: this.$route.query.v_nav,
                })
                this.$store.commit(type.LOADING, true)
                this.$store.commit(type.VIDEO_RES, [])
                console.log('进入视频切换流程')
                console.log(this.$route.query.v_nav)
            }
        },
        components: {
            head_top,
            video_nav,
            foot_bottom: foot,
        },
        filters: {
            date: function (M_D) {
                var time = moment(M_D).locale('zh-cn').format("MMM Do")
                return time
            }
        },
        beforeRouteEnter: (to, from, next) => {
            if (from.name !== 'video_con') {
                window.sessionStorage.removeItem('temp')
                 console.log('删除视频数据')
            }
            next()
        },
        beforeRouteLeave(to, from, next) {
            //does NOT have access to `this` component instance
            $(window).off('scroll')
            window.sessionStorage.temp = JSON.stringify({
                scrollTop: $(window).scrollTop(),
                video_list: this.video_list,
                nav: this.$route.query.v_nav || this.nav_video
            })
            next()
        }
    }

</script>

<style scoped>
    .box_wra {
        margin-bottom: 1rem
    }
    
    .image {
        width: 100%;
        height: 8rem;
    }
    
    .text_desc {
        font-size: .7rem;
        -webkit-box-orient: vertical !important;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: -webkit-auto
    }
    
    .bottom.clearfix {
        font-size: .5rem;
        display: flex;
        line-height: 2rem;
        color: #000;
        justify-content: space-between
    }
    
    .mint-header {
        height: 1.8rem;
        font-size: .7rem
    }
    
    .El_row {
        flex-wrap: wrap;
        padding: 15px;
        margin-top: 3rem
    }
    
    .El_route {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    
    .El_col {
        max-width: 330px !important;
    }
</style>