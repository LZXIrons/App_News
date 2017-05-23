<template>
    <div>
        <mt-header style="background: #d43d3d">
            <mt-button icon="back" @click="$router.push({'name':'user'})" slot="left">登录</mt-button>
        </mt-header>
        <div class="login_body">

            <el-input class="admin" v-model="admin" placeholder="请输入账号"></el-input>
            <el-input class="password" v-model="password" placeholder="请输入密码" type="password"></el-input>
            <div class="login">
                <mt-button class="login_sucess" @click="login"  @keyup.enter="login">立即登录</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import * as type from '../../store/mutations -type.js'
import { Notification } from 'element-ui';

    export default {
        data() {
            return {
                admin: '',
                password: '',
                id:'超越时空的猫'
            }
        },
        
        methods: {
            ...mapActions([
                'set_user',
            ]),
            login() {
                if (this.admin === 'admin' && this.password === 'admin') {
                   this.set_user(this.id)
                   this.$router.push({'name':'user'})
                } else if (this.admin === '') {
                    this.open('1')
                } else if (this.password === '') {
                    this.open('2')
                } else {
                    this.open('3')
                }            
            },
            open(nodesc) {
            if (nodesc === '1') {
                this.$notify.error({
                    title: '账号不能为空',
                    duration: 0
                });
            } else if (nodesc === '2') {
                this.$notify.error({
                    title: '密码不能为空',
                    duration: 2000
                });
            } else {
                this.$notify.error({
                    title: '账号或密码错误',
                    duration: 2000
                });
            }
        }
        }

    }

</script>

<style>
    .login_body {
        margin-top: 20px
    }
    
    .admin {
        margin-bottom: 15px
    }
    
    .login {
        margin: 40px 15px 0;
    }
    
    .login_sucess {
        width: 100%;
        background: #d43d3d !important;
        color: #fff !important
    }
</style>