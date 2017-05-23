<template>
  <div>
    <div class="item">
      <div class="player">
        <video-player ref="videoPlayer" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"
          @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
          </video-player>
      </div>
      <div class="_Media_info">
        <span class="Title">
            {{title}}
          </span>
        <div class="wrapper_box">
          <img :src=topic_icons class="topic_icons" />
          <span class="Autor">{{Autor}}</span>
          <span class="watch_Num">观看：{{watch_num}}</span>
          <span class="Reply">回复：{{replyCount}}</span>
        </div>
      </div>
    </div>
    <foot_bottom></foot_bottom>
  </div>
</template>

<script>
  import foot from '../foot/foot_nav.vue'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import * as type from '../../store/mutations -type.js'
  export default {
    data() {
      return {
        playerOptions: {
          // component options
          start: 0,
          playsinline: false,
          // videojs options
          muted: true,
          language: 'zh-cn',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.$route.params.url
          }],
          /* poster: "/static/images/author.jpg",*/
        }
      }
    },
    beforeRouteLeave: (to, from, next) => {
      $('.body').css('background', '#fff')
      next()
    },
    components:{
      foot_bottom:foot
    },
    created() {
      $('.body').css('background', '#f6f6f6')

    },
    mounted() {
/*      this.get_video({
        nav_video: this.$route.query.v_nav,
      })
      console.log('开始初始化视频数据')*/
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
      topic_icons: function () {
        if (this.$route.params.topic_icons) {
          return this.$route.params.topic_icons
        } else {
          return ''
        }
      },
      Autor: function () {
        if (this.$route.params.autor) {
          return this.$route.params.autor
        } else {
          return ''
        }
      },
      title: function () {
        if (this.$route.params.title) {
          return this.$route.params.title
        } else {
          return ''
        }
      },
      replyCount: function () {
        if (this.$route.params.replyCount) {
          return this.$route.params.replyCount
        } else {
          return '0'
        }
      },
      watch_num: function () {
        if (this.$route.params.watch_num) {
          return this.$route.params.watch_num
        } else {
          return ''
        }
      },
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
    }
  }

</script>
<style scoped>
  .item {
    position: relative;
    margin-bottom: 50px;
  }
  
  ._Media_info {
    box-sizing: border-box;
    padding: 0 8px;
    width: 100%;
    font-size: .5rem;
    background: #fff;
    border-radius: 8px
  }
  
  .wrapper_box {
    display: inline-flex;
    line-height: 2rem;
    width: 100%;
    flex: 1;
  }
  
  .Title {
    display: block;
    font-weight: bold;
    font-size: .8rem;
    line-height: 1.5rem;
  }
  
  .topic_icons {
    width: 2rem;
    height: 2rem
  }
  
  .Autor {
    padding-left: 10px;
    flex: 1;
    font-size: .7rem;
  }
  
  .watch_Num {
    margin: 0 10px
  }
</style>