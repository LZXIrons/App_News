<template>
  <div>    
      <div class="swiper_nav" id="swiper_header" >
          <div v-for="(nav,index) in navs"  :key="index" class="swiper_slide">
            <router-link :to="{path:nav.url,query:{v_nav:nav.type}}">{{nav.nav}}</router-link>
          </div>
    </div>
  </div>
</template>

<script>
  import head_top from './head.vue'
  import $ from "jquery"
  export default {
    components: {
       head_top
    },
    data() {
      return {
        
        navs: [
        {
          nav: '推荐',
          url: '/video/recommend',
          type: 'Video_Recom'
        },
        {
          nav: "搞笑",
          url: '/video/funny',
          type:'Video_Funny'
        },
        {
          nav: "现场",
          url: '/video/scene',
          type:'Video_Scene'

        },
        {
          nav: "八卦",
          url: '/video/gossip',
          type:'Video_Gossip'
        },
        {
          nav: "萌物",
          url: '/video/Adorable',
          type:'Video_Adorable'
        },
        {
          nav: "影视",
          url: '/video/movies',
          type: 'Video_Movies'
        },
        {
          nav: "涨姿势",
           url: '/video/knowledge',
          type: 'Video_Knowledge'
        },
        {
          nav: "美女",
           url: '/video/beauty',
          type: 'Video_Beauty'
        },
         {
          nav: "小品",
          url: '/video/opusculum',
          type: 'Video_Opusculum'
        },
         {
          nav: "猎奇",
          url: '/video/curious',
          type: 'Video_Curious'
        },
         {
          nav: "音乐",
          url: '/video/music',
          type: 'Video_Music'
        },
        {
          nav: "军武",
          url: '/video/Military',
          type: 'Video_Military'
        },
        {
          nav: "黑科技",
          url: '/video/technology',
          type: 'Video_Technology'
        },
         {
          nav: "二次元",
          url: '/video/comic',
          type: 'Video_Comic'
        },
        ]
      }
    },
    mounted() {

    },

  }

</script>

<style lang="stylus">
/**不要在这里修改样式**/

      
</style>