<template>
    <div>

        <mt-header title="" style="background: #d43d3d">
            <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div v-if="login">
            <div>
                <router-link class="user_head" :to="{'path':'/app/user'}">
                    <div class="user_block">
                        <img src="../../common/img/男头像.png" width="40px" />
                        <div class="user_id">
                            <span>{{userName}}</span>
                            <p>
                                <span class="thin-border">{{ch}}</span>
                                <span class="thin-border">金币：{{gold}}</span>
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="login_bef" v-else>
            <img src="../../common/img/男头像.png" width="25px" height="20px"/>
            <router-link class='loging' :to="{'name':'login'}">
                请登陆
            </router-link>
            <router-link :to="{'name':'zc'}">
                请注册
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as type from '../../store/mutations -type.js'
    export default {
        data() {
            return {
                id: "超越时空的猫",
                ch: "跟帖局科员",
                gold: 300,
                
            }
        },
        computed: {
          ...mapGetters([
              'login',
              'userName',
          ])  
        },
        created() {

        },

        /***APP****/
        methods: {

        },
    }

</script>

<style>
    .login_bef{
       margin: 15px auto;
        margin-left:15px;
        font-size: .5rem;
        display: flex;
        width: 60%; 
    }
    .login_bef a{
        color: #fff ;
        flex: 1;
        background: #d43d3d;
        border-radius: 3px;
        text-align: center;
        line-height: 20px;
        
    }
    .loging{
        margin:auto 15px
    }
</style>