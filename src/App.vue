<template>
  <div style="position: relative" >
    <transition :name="transitionName" mode='out-in'>
       
          <router-view v-cloak class="active_view"></router-view>   
<!--          <keep-alive>
        </keep-alive>-->
    </transition>
  </div>
  
</template>

<script>

  export default {
    data() {
      return {
        transitionName: '',
        is_Adclass:true,
      }
    },
    components: {
      
    },
    created() {
    
    },
    watch: {
      $route(to, from) {
        
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      
      }
    },
  }

</script>

<style>
[v-cloak] {
    display: none;
}
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(150px, 0);
    transform: translate(150px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-150px, 0);
    transform: translate(-150px, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  
  .slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  
  .slide-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .active_view {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
</style>