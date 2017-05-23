<template>
    <foot>
        <div class="foot_nav" slot="foot_nav">
            <ul>
                <li  >
                    <router-link  to="/news/">
                        <div class="icon">
                            <i class="icon-home"></i>
                        </div>
                        <div class="nav_font">首页</div>
                    </router-link>
                </li>
                <li  >
                    <router-link to="/video/recommend?nav=Video_Recom" >
                        <div class="icon">
                            <i class="icon-video"></i>
                        </div>
                        <div class="nav_font">视频</div>
                    </router-link>
                </li>
                <li>

                    <router-link :to="{name:'form'}"> 
                        <div class="icon">
                            <i class="icon-form"></i>
                        </div>
                        <div class="nav_font">问卷</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{'name':'user'}">
                        <div class="icon">
                            <i class="icon-user"></i>
                        </div>
                        <div class="nav_font">我</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </foot>
</template>
<script>
    import foot from './foot'
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {

            }
        },
        components: {
            foot
        },
        mounted() {

        },
        methods: {
            go_Nav(){
                this.$router.push("/news/recommend?nav=__all__")
            },
            go_Video(){
                this.$router.push("/video/recommend?nav=Video_Recom")
            },
            sorry() {
               Toast(
                    {
                        message: '此栏目暂无更新',
                        iconClass: 'icon-unhappy'
                    }
                )
              
            }
        }
    }

</script>