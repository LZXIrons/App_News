<template>
    <div>
        <article>
            <mt-header style="background: #d43d3d" slot="article">
                <mt-button icon="back" @click.native="goBack" slot="left">返回</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </article>
        <div class="container">
            <h2>{{title}}</h2>
            <div class="media_name">
                <img class="media_img" src="../../common/img/man.png">
                <p class="media_text">
                    <span>{{media_name}}</span>
                    <br>
                    <span>{{datetime}}</span>
                </p>
            </div>
            <div class="content">
                {{abstract}}
                <div class="img_list">
                    <img v-for="(img,index) in  image_list" :src="img.url">
                </div>
            </div>
            <div class="key_words">
                <mt-badge class="key_tag" size="large" v-for="(item,index) in keywords.split(',')" :key="index" color="#fff"> {{item}}</mt-badge>
            </div>
            <div class="zan">
                <div class="zan_wrapper">
                    <mt-button size="normal" class="zan_button">
                        <img src="../../common/img/zan.png" /> {{repin_count}}
                    </mt-button>
                    <mt-button size="normal" class="zan_button">
                        <img src="../../common/img/cai.png" /> 不喜欢
                    </mt-button>
                </div>
            </div>
        </div>
        <foot_act>
            <div class="foot_act" slot="foot_act">
                <div class="input_wrapper">
                    <input type="text" placeholder="写评论..." class="input_com">
                    <img src="../../common/img/note.png" width="20px" />
                </div>
                <div class="comment_mes " @click="sorry">
                    <img src="../../common/img/message.png" width="25" height="25" />
                    <mt-badge size="small" color="red" class="mes_tag">
                        <p>{{comment_count}}</p>
                    </mt-badge>

                </div>
                <share_box></share_box>
            </div>
        </foot_act>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import foot_act from '../foot/foot'
    import article from "../head/head"
    import share_box from '../article/share_article'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as type from '../../store/mutations -type.js'
    export default {
        data() {
            return {

            }
        },

        components: {
            foot_act,
            share_box
        },
        created() {
            $(window).scrollTop(0)
        },
        computed: {
            id: function () {
                if (this.$route.params.id) {
                    return this.$route.params.id
                } else {
                    return ''
                }
            },
            title: function () {
                if (this.$route.params.title) {
                    return this.$route.params.title
                } else {
                    return ''
                }
            },
            media_name: function () {
                if (this.$route.params.media_name) {
                    return this.$route.params.media_name
                } else {
                    return ''
                }
            },
            datetime: function () {
                if (this.$route.params.datetime) {
                    return this.$route.params.datetime
                } else {
                    return ''
                }
            },
            abstract: function () {
                if (this.$route.params.abstract) {
                    return this.$route.params.abstract
                } else {
                    return ''
                }
            },
            image_list: function () {
                if (this.$route.params.image_list) {
                    return this.$route.params.image_list
                } else {
                    return ''
                }
            },
            keywords: function () {
                if (this.$route.params.keywords) {
                    return this.$route.params.keywords
                } else {
                    return ''
                }
            },
            repin_count: function () {
                if (this.$route.params.repin_count) {
                    return this.$route.params.repin_count
                } else {
                    return ''
                }
            },
            comment_count: function () {
                if (this.$route.params.comment_count) {
                    return this.$route.params.comment_count
                } else {
                    return '0'
                }
            },
        ...mapGetters([
            'change_router',
        ])
        },
        
        methods: {
            goBack() {

                this.$router.go(-1);
                console.log('已经返回路由')
            },
            sorry() {
                let instance = Toast(
                    {
                        message: '暂无此评论功能',
                        iconClass: 'icon-unhappy'
                    }
                );
                setTimeout(() => {
                    instance.close();
                }, 1000);

                return instance
            }
        },

    }

</script>

<style>
    .container {
        margin: .5rem .3rem 2.5rem
    }
    
    .container h2 {
        font-weight: bold
    }
    
    .media_name {
        margin: .5rem auto;
        padding: 10px 0px 10px 5px;
        font-size: 18px;
        line-height: 25px;
        position: relative;
    }
    
    .media_name:before {
        position: absolute;
        display: block;
        width: 200%;
        height: 200%;
        content: "";
        border: 1px solid #ABB2B9;
        top: 0;
        transform-origin: -2% 0;
        transform: scale(0.5, 0.5)
    }
    
    .media_img {
        width: 45px;
    }
    
    .media_text {
        display: inline-block;
        line-height: 25px
    }
    
    .content {
        font-size: .8rem;
        line-height: 1.5rem;
        text-indent: 1.8rem
    }
    
    .img_list {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    
    .img_list img {
        margin: .2rem auto;
        width: 70%
    }
    
    .key_words {
        margin: .5rem auto;
        border-bottom: 1px solid #ccc
    }
    
    .key_tag {
        border: 1px solid #ccc;
        color: #657180 !important;
        margin: 5px !important;
    }
    
    .zan {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    
    .zan_button {
        width: 110px;
    }
    
    .zan_button img {
        width: 15px
    }
    
    .foot_act {
        display: flex;
        margin: 10px 5px;
    }
    
    .foot_act div {
        flex: .8;
        line-height: 0;
        text-align: center
    }
    
    .input_wrapper {
        flex: 4 !important;
        position: relative;
    }
    
    .input_wrapper img {
        position: absolute;
        right: 0;
        top: 5px;
        right: 4px;
    }
    
    .input_com {
        text-indent: .3rem;
        font-size: 12px;
        line-height: 25px;
        border: 1px solid #657180;
        border-radius: 20px;
        width: 100%;
    }
    
    .comment_mes {
        font-size: 12px;
        line-height: 12px !important;
        position: relative;
    }
    
    .mes_tag {
        position: absolute;
        right: 5%;
        top: -10px;
        min-width: .55rem;
        border-radius: 50% !important;
    }
</style>