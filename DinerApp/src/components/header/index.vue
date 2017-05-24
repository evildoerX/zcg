<template>
    <header id='head_top'  :style="{ 'background-color': scroll ? 'white' : 'transparent' }">
        <router-link to="/home" class="location">
        <img class="location__image" src="../../images/idg/location.png" />
         <p class="text" :style="{ 'color': 'white', 'font-size': '14px' }">谷阳世纪大厦</p>
        </router-link>
        <slot name='logo'></slot>
        <router-link to="/search/wtw3sjz9p6xf" :style="{ 'background-color': scroll ? '#EFEFEF' : 'white' }" class="search">
          <img class="search_icon" :src="searchSrc" /> 
          <p class="title" :style="{ 'color': '#999999', 'font-size': '14px' }">搜索商家或美食</p>
        </router-link>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{
            }
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();
        },
        props: ['signinUp', 'headTitle', 'goBack', 'scroll'],
        computed: {
            ...mapState([
                'userInfo'
            ]),
            userSrc () {
                return this.scroll ? require('../../images/idg/mine_icon_gray.png') : require('../../images/idg/mine_icon_white.png')
            },
            searchSrc () {
                return this.scroll ? require('../../images/idg/search.png') : require('../../images/idg/search.png')
            }
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #head_top {
        display: flex;
        align-items: center;
    }
    .location {
        margin-right: 0.42rem;
        margin-left: 0.42rem;
        @include wh(10rem, 1.10rem);
        border-radius: 0.55rem;
        background:rgba(0,0,0,0.29);
        display: flex;
        align-items: center;
        .text {
            margin-left: 0.3rem;
        }
        .location__image {
            margin-left: 0.4693rem;
            width: 0.29rem;
            height: 0.42rem;
        }
    }

    .search {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 0.55rem;
      margin-right: 0.52rem;
      @include wh(17em, 1.10rem);
      .search_icon {
        margin-left: 0.59rem;
        width: 0.64rem;
        height: 0.64rem;
      }
      .title {
            margin-left: 0.3rem;
            font-size: 14px;
      }
    }

    #head_top{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 0.8rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>
