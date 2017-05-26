<template>
    <div>
        <search>
            <mt-header style="background: #d43d3d" slot="search">
                <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </search>
        <div class="search_tag" v-show="tag_show">
            <p style="font-size: 14px;line-height: 30px;font-weight:400;padding-left:10px ">热门搜索：</p>
            <div class="search_tag_wrapper">
                <mt-badge size="large" color="#d43d3d">鹿晗</mt-badge>
                <mt-badge size="large" color="#d43d3d">跑男</mt-badge>
                <mt-badge size="large" color="#d43d3d">陈浩民</mt-badge>
                <mt-badge size="large" color="#d43d3d">奶茶发微博</mt-badge>
                <mt-badge size="large" color="#d43d3d">万人迷陈好</mt-badge>
                <mt-badge size="large" color="#d43d3d">家有儿女</mt-badge>
                <mt-badge size="large" color="#d43d3d">迪丽热巴</mt-badge>
            </div>
        </div>
        <mt-search   placeholder="请输入关键字..." v-model="value" style="position: relative;font-size: .65rem;margin-top:40px " @input="get_result">

            <mt-cell class="trans_bug"  v-for="(item,index) in result" :to="{'name':'article',
                            'params':
                            {   id:item.tag_id,
                                title:item.title,
                                media_name:item.media_name,
                                datetime:item.datetime,
                                abstract:item.abstract,
                                image_list:item.image_list,
                                repin_count:item.repin_count,
                                comment_count:item.comment_count,
                                keywords:item.keywords
                            }    
                        }"  :key="index" :title="item.title" v-html="re_title(item.title,value)" v-show="item.media_creator_id && item.title">

                </mt-cell>

        </mt-search>

    </div>
</template>

<script>
   
    import search from '../head/head.vue'
    export default {
        data() {
            return {
                result: [],
                value: "",
                tag_show: true,

            }
        },
        components: {
            search
        },
        computed: {
        },
        created() {
        
        },
        
        methods: {
            get_result() {
                console.log('加载了')

                let value = this.value
                let self = this
                let _value = value.trim()
                $.getJSON('http://www.toutiao.com/search_content/?offset=0&format=json&keyword=' + _value + '&autoload=true&count=20&cur_tab=1&callback=?', function (res) {
                    let data = res.data
                    console.log(data)
                    data.forEach((topic) => {
                        self.result.unshift(topic)
                    })

                })
                if (value == '') {
                    this.result = []
                    console.log("搜索词为空")
                }
            },
            re_title(title,value){   
                console.log(this.value)    
                const reg =new RegExp(''+value+'','gim')
                if(title){
                 
                   let re_tit=title.replace(reg,'<font class="red">'+value+'</font>')
                   return  re_tit
                }else{
                    return title
                }
           }

        },
       /*filters: {
           re_title:function(title,value){   
                console.log(this.value)    
                const reg =new RegExp('value','gim')
                if(title){
                    return title.replace(reg,'<span style="color:red">'+value+'</span>')
                }else{
                    return title
                }
           }
       }*/

    }

</script>

<style>
.mint-search-list{
    top:20px !important
}
    .search_tag {
        position: absolute;
        top: 100px;
        width: 100%;
    }
    
    .search_tag_wrapper {
        padding: 0 10px
    }
    .trans_bug{
       /*position: absolute;
       display: block;
       width: 200%;
       height: 220%;
       content: "";
       transform-origin:  0;
       bottom: -10px;
       transform: scale(0.5,0.5);*/
      /*  -webkit-transform-style: preserve-3d;*/     /*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
       border-bottom:1px solid  rgb(234, 234, 234) ;
       padding-top:12px
    }
    .mint-badge {
        margin: 5px auto
    }
    .red{
        color: #d43d3d;
        /*font-size: 1.2rem*/
    }
</style>