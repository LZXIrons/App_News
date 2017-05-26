<template>
    <div id='id'>
        <mt-cell title="系统设置" class="app_set"></mt-cell>
        <mt-cell title="要闻推送" class="switch">
            <mt-switch v-model="news_send"></mt-switch>
        </mt-cell>
        <mt-cell title="跟帖消息推送" class="switch">
            <mt-switch v-model="message_send"></mt-switch>
        </mt-cell>
        <mt-cell title="非Wi-Fi网络不下载图片" class="switch">
            <mt-switch v-model="load_img"></mt-switch>
        </mt-cell>
        <mt-cell title="声音设置" class="range">
            <mt-range v-model="sound" :min="0" :max="100" :step="10" :bar-height="5">
                <div slot="start">0</div>
                <div slot="end">100</div>
            </mt-range>
        </mt-cell>
        <mt-cell title="字体大小设置" class="range">
            <mt-range v-model="font" :min="12" :max="30" :step="2" :bar-height="5">
                <div slot="start">12</div>
                <div slot="end">30</div>
            </mt-range>
        </mt-cell>
        <div class="login_out-box">
            <mt-button class="login_out" @click="login_out">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as type from '../../store/mutations -type.js'

    export default {
        name: 'name',
        data() {
            return {
                news_send: true,
                message_send: true,
                load_img: false,
                sound: 60,
                font: 16
            }

        },
        methods: {
            ...mapActions([
                    'user_move',
                ]),
            login_out() {
                this.$confirm('确定退出登录吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.user_move();
                    this.$router.push({ 'name': 'user' });
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                })
            },

        }
    }

</script>

<style>
    .app_set .mint-cell-text {
        font-size: 13px
    }
    
    .switch .mint-cell-value {
        flex: none
    }
    
    .range .mint-cell-value {
        flex: 2.5
    }
    
    .mt-range {
        width: 100%
    }
    .el-message-box{
        width:300px
    }
    .login_out-box {
        margin: 40px 15px 0;
    }
    
    .login_out {
        width: 100%;
        background: #d43d3d !important;
        color: #fff !important
    }
</style>