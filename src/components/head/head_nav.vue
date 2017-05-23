<template>
  <div>   
      <head_top>
        <div class="nav_top_wrapper" slot="head_home">
          <div class="nav_top">
            <input placeholder="点击搜索新闻" @click="search_news" class="search_news">
            <router-link :to="{'name':'search'}" class="search icon-search" style="color:#fff">
           
            </router-link>
          </div>   
        </div>
      </head_top>  
      <div class="swiper_nav" id="swiper_header" >
          <div v-for="(nav,index) in navs"  :key="index" class="swiper_slide">
            <router-link :to="{path:nav.url,query:{nav:nav.type}}">{{nav.nav}}</router-link>
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
          url: '/news/recommend',
          type: '__all__'
        },
        {
          nav: "热点",
          url: '/news/hot',
          type:'news_hot'
        },
        {
          nav: "社会",
          url: '/news/society',
          type:'news_society'

        },
        {
          nav: "娱乐",
          url: '/news/entertainment',
          type:'news_entertainment'
        },
        {
          nav: "科技",
          url: '/news/tech',
          type:'news_tech'
        },
        {
          nav: "汽车",
          url: '/news/car',
          type: 'news_car'
        },
        {
          nav: "体育",
           url: '/news/sports',
          type: 'news_sports'
        },
        {
          nav: "财经",
           url: '/news/finance',
          type: 'news_finance'
        },
         {
          nav: "军事",
          url: '/news/military',
          type: 'news_military'
        },
         {
          nav: "国际",
          url: '/news/world',
          type: 'news_world'
        },
         {
          nav: "时尚",
          url: '/news/fashion',
          type: 'news_fashion'
        },
        ]
      }
    },
    mounted() {

    },
    methods:{
      search_news(){
        this.$router.push({'name':'search'})
      }
    }

  }

</script>

<style lang="stylus">
/**不要在这里修改样式**/

</style>