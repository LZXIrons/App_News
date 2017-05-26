<template>
  <div>
    <head_nav ></head_nav>
    <div class=" swiper-wrapper" style="margin-bottom:30px ">
      <mt-spinner type="triple-bounce" color="red" v-show="loading" class="loading"></mt-spinner>
      <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
        <ul class="animated" v-show="!loading ">
          <head_banner></head_banner>
          <router-link tag="li" v-for="(topic,index) in topics" :to="{'name':'article',
                  'params':
                  { 
                    id:topic.tag_id,
                    title:topic.title,
                    media_name:topic.media_name,
                    datetime:topic.datetime,
                    abstract:topic.abstract,
                    image_list:topic.image_list,
                    repin_count:topic.repin_count,
                    comment_count:topic.comment_count,
                    keywords:topic.keywords
                  }
                  }" class="new_list" :key="index">
            <div class="list_wra">

              <img v-for="(img,index) in topic.image_list" :key="index" class="list_img" v-lazy="img.url" alt="tu" />

              <div class="list_tit">
                <p class="tit_h">{{ topic.title }}</p>
                <div class="list_text">
                  <mt-badge style="position: static" size="small" class="mes_tag text_l" v-show="topic.label==='广告'">广告 </mt-badge>
                  <p class="text_l">评论：{{ topic.comment_count }}</p>
                  <p class="text_r">{{ topic.datetime|date }}</p>
                </div>
              </div>
            </div>
            </router-link>
        </ul>
      </transition>
    </div>

    <el-alert class="data_erro" title="暂无数据更新" type="error" description="客官，我们呆会再来吧" show-icon v-show='!return_data'> </el-alert>
    <el-alert class="data_erro" title="暂无数据" type="warning" description="客官，我们呆会再来吧" show-icon v-show='!data_show'> </el-alert>
    <div class="loading_fo" v-if="!loading && data_show">
      <mt-spinner type="fading-circle" color="red"></mt-spinner>
      <span class="loading_fo_t"> 拼命加载中</span>
    </div>
    <div class="loading_fo" v-else-if="!data_show">
      <span class="loading_fo_t icon-unhappy"> 我也是有底线的！！</span>
    </div>
    <div v-show="top_go" class="go_top" @click="go_top">Top</div>
    <foot_nav :Addclass='isActive' ></foot_nav>
  </div>
</template>

<script>
  import $ from 'jquery'
  import moment from 'moment'
  import head_nav from '../head/head_nav.vue'
  import banner from '../banner/banner.vue'
  import foot_nav from '../foot/foot_nav.vue'
  import vue from 'vue'
  import { mapActions, mapGetters, mapState } from 'vuex'
  import * as type from '../../store/mutations -type.js'
  export default {
    data() {
      return {
        nav: '__all__',
        isActive:true,
      }
    },
    computed: {
     ...mapGetters([
       'loading',
      'top_go',
      'topics' ,
      'data_show',
      'watch_news',
      'return_data',
     ]),
    },
    components: {
      head_nav,
      foot_nav,
      head_banner: banner
    },

    created() {
      //初始化数据
      this.$store.commit(type.LOADING, true)
      console.log(this.$route.query.nav)
      let temp
      let history
      if (window.sessionStorage.temp) {
        temp = JSON.parse(window.sessionStorage.temp)
      }
      history = this.$route.query.nav
      if (temp && temp.nav_key === history) {
        this.topics = temp.topics
        this.$nextTick(() => {
          $(window).scrollTop(temp.scrollTop)
          console.log('已经有历史记录')
        })
        this.$store.commit(type.LOADING, false)
      } else {
        this.$store.commit(type.TOPICS, [])
        this.get_news({
          nav: this.nav,
        })
        console.log('开始初始化')
      }


    },
    mounted() {

      /*滚动加载数据*/
      $(window).on('scroll', () => {
        console.log('进入滚动获取流程')
        let wh = $(window).height()
        let sh = $(window).scrollTop()
        if ($(document).height() < (wh + sh + 20) && this.watch_news) {
          this.get_news({
            nav: this.$route.query.nav || this.nav,
          })
          console.log('进入新闻获取流程')
        } else if ($(window).scrollTop() > 50) {
          this.$store.commit(type.TOP_GO, true)
        } else {
          this.$store.commit(type.TOP_GO, false)
        }
      })
      console.log($(window).scrollTop())
    },

    /***APi****/
    methods: {
      ...mapActions([
        'get_news',
      ]),

      go_top() {
        $('html,body').animate({ scrollTop: "0px" }, 800)
      },

    },
    watch: {
      $route(to, from) {
        this.get_news({
          nav: this.$route.query.nav,
        })
        this.$store.commit(type.LOADING, true)
        this.$store.commit(type.TOPICS, [])
      }
    },

    filters: {
      date: function (input) {
        if (!input) {
          return ''
        }
        var time = moment(input).locale('zh-cn').startOf('minute').fromNow();
        return time;
      },
    },
    beforeRouteEnter(to, from, next) {
      if (from.name !== 'article') {
        window.sessionStorage.removeItem('temp')
        console.log('删除新闻记录')
      }
      console.log('进入路由')

      next()
    },
    beforeRouteLeave(to, from, next) {
      $(window).off('scroll')
      window.sessionStorage.temp = JSON.stringify({
        topics: this.topics,
        nav_key: this.$route.query.nav,
        scrollTop: $(window).scrollTop()
      })
      console.log('离开路由')
      next()
    },
  }

</script>
<style scoped>
  .list_img {
    display: none
  }
  
  .list_img:first-child {
    display: block
  }
  
  .data_erro {
    top: 50%;
    position: fixed;
  }
  
  .animated {
    transition-duration: .2s
  }
</style>