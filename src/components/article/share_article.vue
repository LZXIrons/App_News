<template>
    <div>
        <img src="../../common/img/分享2.png" width="20" height="20" @click="share_show" />

        <mt-popup class="share_box" v-model="share_s" position="bottom">
            <div class="share_media">
                <ul>
                    <li>
                        <a>
                            <img src="../../common/img/人人.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/微信.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/微博.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/豆瓣.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/人人.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/微信.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/微博.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../../common/img/豆瓣.png" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="share_qx" @click="share_box">
                取消
            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                share_s: false,
            }
        },
        methods: {
            share_show() {
                this.share_s = true
            },
            share_box(){
                 this.share_s = false
            }
        }

    }

</script>

<style>
    .share_box {
        background: #fff;
        width: 100%;
        
    }
    
    .share_media ul {
        display: flex;
        flex-flow: wrap;
        margin: 15px 0;
    }
    
    .share_media li {
        width: 25%;
        text-align: center
    }
    
    .share_box img {
        width: 50px;
    }
    
    .share_qx {
        text-align: center;
        line-height: 50px !important;
        border-top: 1px solid #ccc
    }
</style>