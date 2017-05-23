<template>
  <div>
    
   
      <div class="home">
        <img class="logo" src="../../assets/logo.png"/>    
          <p class="animated bounce">Welcome MyWeb</p>    
      </div>
    
      <mt-progress v-if="show" :value="progress" :bar-height="3"></mt-progress>
   
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data(){
      return{
        progress:0,
        show:true
      }
    },
    mounted ()  {
      $('.home').animate({
        marginTop: 100,
        opacity: 1
        })
     
        
      setTimeout(() => {
        this.$router.push("/news/recommend?nav=__all__")
        
      }
      , 2500)
      setTimeout(()=>{
        this.get_progress()
      },800)
     
    },
    methods:{
      get_progress() {     
         this.progress++
          if(this.progress<100){
           setTimeout( this.get_progress, 15 )
          }       
      }
    }
  
}
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home

    display  flex
    flex-direction column
    justify-content center
    margin 500px auto 50px
    opacity 0
    align-items center
    p
      font-size 40px
      margin-top:50px
      position: relative;
</style>

