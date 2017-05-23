<template>
    <div >
    <user_login></user_login>
      <div class="wrapper" style="margin-bottom:70px">
        <mt-cell title="设置" to="/app/user/set" is-link>
            <img slot="icon" src="../../common/img/设置2.png" width="24" height="24" >
        </mt-cell>
        <mt-cell title="消息" >
            <img slot="icon" src="../../common/img/公告.png" width="24" height="24" >
            <mt-badge size="small" color="#d43d3d">30</mt-badge>
        </mt-cell>
        <mt-cell title="分享" is-link>
            <img slot="icon" src="../../common/img/分享.png" width="24" height="24" >
        </mt-cell>
         <mt-cell title="地图" is-link>
            <img slot="icon" src="../../common/img/地图.png" width="24" height="24" >
        </mt-cell>
         <mt-cell title="收藏" is-link>
            <img slot="icon" src="../../common/img/收藏.png" width="24" height="24" >
        </mt-cell>
        <mt-cell title="笔记" >
            <img slot="icon" src="../../common/img/笔记.png" width="24" height="24" >
            <mt-badge size="small">20</mt-badge>
        </mt-cell>
       </div>
        <foot_nav></foot_nav>
    </div>
</template>

<script>
    import identity from '../user/identity.vue'
    import foot_nav from '../foot/foot_nav.vue'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as type from '../../store/mutations -type.js'
    export default {
        components: {
            user_login:identity,
            foot_nav
        },
        computed: {
            ...mapGetters([
                'change_router',
            ])
        },
        activated() {
              this.$store.commit(type.CHANGE_ROUTER,!this.change_router)
        },
        
    }

</script>

<style>

</style>