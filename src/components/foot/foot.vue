<template>

    <div class="foot_bottom">
      <slot name="foot_nav"></slot>
      <slot name="foot_act"></slot>
    </div>

</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted() {

    }
  }

</script>
<style>
  .foot_bottom{
    background: #fff;
    position: fixed;
    width: 100%;
    max-width: 1080px;
    z-index: 999;
    bottom: 0;
    margin-top: 50px
  }
</style>