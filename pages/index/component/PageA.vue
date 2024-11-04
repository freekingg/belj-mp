<template>
  <view class="pages-a">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back" @click="tn('/pageA/about/about')">
          <view class="logo-pic png-sussuspension1" style="background-image:url('https://cdn.nlark.com/yuque/0/2023/png/280373/1679989824360-assets/web-upload/d6f05bc7-7e47-4566-98fc-494350f4f5d2.png')">
            <view class="logo-image ">
            </view>
          </view> 
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-flex tn-flex-col-center tn-flex-row-center">
            <view class="tn-padding-left-xs">布尔逻辑</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <!-- 顶部自定义导航 -->
    <view class="tabs-fixed tn-bg-white">
      <view class="tn-flex tn-flex-col-between tn-flex-col-center tn-padding-top-sm" :style="{marginTop: vuex_custom_bar_height + 'px'}">
        <view class="justify-content-item" style="width: 87vw;overflow: hidden;">
          <tn-tabs :list="scrollList" :current="current" :isScroll="true" activeColor="#000" :bold="true" :fontSize="32" :badgeOffset="[20, 50]" @change="tabChange" backgroundColor="#FFFFFF" :height="70"></tn-tabs>
        </view>
        <view class="justify-content-item" style="width: 13vw;overflow: hidden;" @click="tn('/homePages/xxxxx')">
          <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="tn-color-black tn-round" style="font-size: 45rpx;margin-top: -5rpx;margin-left: 15rpx;">
              <text class="tn-icon-level tn-padding-xs" ></text>
            </view>
          </picker>
        </view>
      </view>  
    </view>
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}" style="margin-top: 130rpx;">
      
      <swiper class="card-swiper" :circular="true"
        :autoplay="true" duration="500" interval="18000" @change="cardSwiper"> 
        <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
          <!-- <view class="swiper-item image-banner tn-shadow-blur" :style="'background-image:url('+ item.url + ');'">
          </view> -->
          <view class="swiper-item image-banner">
            <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
          </view>
          <view class="swiper-item2 image-banner">
            <image class="png-sussuspension" :src="item.pngurl" mode="heightFix" v-if="item.type=='image'"></image>
          </view>
          <view class="swiper-item-text">
            <view class="text-sussuspension">
              <view class="tn-text-bold tn-color-black" style="font-size: 45rpx;">{{item.title}}</view>
              <view class="tn-color-black tn-padding-top-xs" style="font-size: 35rpx;">{{item.name}}</view>
            </view>
          </view>
        </swiper-item>
      </swiper>
      <view class="indication">
          <block v-for="(item,index) in swiperList" :key="index">
              <view class="spot" :class="cardCur==index?'active':'tn-bg-black'" :style="'background-color: '+ item.color +''"></view>
          </block>
      </view>


      <view class="" v-if="current==0">
      
        <!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
        <view class="tn-margin-bottom-lg">
          <block v-for="(item, index) in news" :key="index">
            <view class="article-shadow tn-margin" @click="tn('/pageA/news/news')">
              <view class="tn-flex">
                
                <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
                  <view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
                    <text class="">{{ item.title }}</text>
                  </view>
                  <view class="tn-padding-top-xs" style="min-height: 90rpx;">
                    <text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
                      {{ item.desc }}
                    </text>
                  </view>
                  <view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-sm">
                    <view v-for="(label_item,label_index) in item.label" :key="label_index"
                      class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
                      <text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
                    </view>
                    <view class="justify-content-item tn-color-gray tn-text-center" style="padding-top: 5rpx;">
                      <text class="tn-icon-fire tn-text-lg" style="padding-right: 5rpx;"></text>
                      <text class="tn-padding-right tn-text-df">{{ item.collectionCount }}</text>
                      <text class="tn-icon-like-lack tn-text-lg" style="padding-right: 5rpx;"></text>
                      <text class="tn-text-df">{{ item.likeCount }}</text>
                    </view>
                  </view>
                </view>
                <view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.userAvatar + ')'">
                  <view class="image-article">
                  </view>
                </view>
              </view>
            </view>
          </block>
          
        </view>
        
      </view>  
      
    
      <view class="" v-if="current==1">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">这里比你的钱包还空</view>
      </view>
      
      <view class="" v-if="current==2">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">不信你继续点</view>
      </view>
      
      <view class="" v-if="current==3">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">真的没有了吖</view>
      </view>
      
      <view class="" v-if="current==4">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">后面很多个嘤嘤嘤嘤</view>
      </view>
      
      <view class="" v-if="current==5">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">后面很多个嘤嘤嘤嘤嘤</view>
      </view>
      
      <view class="" v-if="current==6">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">后面很多个嘤嘤嘤嘤嘤嘤</view>
      </view>
      
      <view class="" v-if="current==7">
        <view class="tn-text-center" style="font-size: 300rpx;padding-top: 200rpx;">
          <text class="tn-icon-clip tn-color-gray--disabled"></text>
        </view>
        <view class="tn-color-gray tn-text-center tn-text-lg">后面很多个嘤嘤嘤嘤嘤嘤嘤</view>
      </view>

    
    </view>
  
    
    <view class='tn-tabbar-height'></view>
    <view class="bg-tabbar-shadow"></view>
    
  </view>
  
  
</template>

<script>
  export default {
    name: 'PagesA',
    data(){
      return {
        // 筛选
        index: 1,
        array: ['按时间推荐', '按热度推荐', '随机推荐'],
        current: 0,
        scrollList: [
          {name: '推荐'},
          {name: '最新'},
          {name: '技术前沿'},
          {name: '热点资讯'},
          {name: '其他'}
        ],
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          color: '#FFB053',
          title: 'Frontend 2023',
          name: '与你一起 · 简单生活',
          url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676011029131-assets/web-upload/62aadd95-d6db-4d7a-9fe7-ae615130e4ea.jpeg',
          pngurl: 'https://cdn.nlark.com/yuque/0/2023/png/280373/1675941765043-assets/web-upload/a065231c-14c4-4c4d-ae40-5d39e9bc0725.png'
          }, {
          id: 1,
          type: 'image',
          color: '#53FFB1',
          title: 'Design 2023',
          name: '与你一起 · 创意生活',
          url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676011496571-assets/web-upload/debcf577-e9ca-4ab0-b993-5b4bb2647d36.jpeg',
          pngurl: 'https://cdn.nlark.com/yuque/0/2023/png/280373/1676011349283-assets/web-upload/ad460966-b629-4374-ac0c-6059ed8c5668.png'
          }, {
          id: 2,
          type: 'image',
          color: '#FF6253',
          title: 'Hotspot 2023',
          name: '与你一起 · 舒适生活',
          url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676011893050-assets/web-upload/f427620a-8c6a-4b99-98e5-94066f54db9d.jpeg',
          pngurl: 'https://cdn.nlark.com/yuque/0/2023/png/280373/1676011789258-assets/web-upload/87c66663-1eac-4fed-8783-5fe2c7c20e2d.png'
        }, {
          id: 3,
          type: 'image',
          color: '#79A4D9',
          title: 'Interview 2023',
          name: '与你一起 · 悦享生活',
          url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676012700829-assets/web-upload/fd154748-a5d2-4005-9470-f384f38a00e9.jpeg',
          pngurl: 'https://cdn.nlark.com/yuque/0/2023/png/280373/1676012711907-assets/web-upload/e9e5cf10-33cc-40f1-ae69-b39df9ba4565.png'
        }, 
        ],
        news: [{
            userAvatar: 'https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'cyan',
            label: ['模型'],
            title: '一个拥有大量3D模型的网站',
            desc: '3D模型了解一下？',
            mainImage: 'https://resource.tuniaokj.com/images/shop/prototype1.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 987
            },
            collectionCount: 567,
            commentCount: 69,
            likeCount: 65
          },
          {
            userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'blue',
            label: ['UI设计'],
            title: '为什么资讯不显示时间？',
            desc: '你确定你经常更新文章吗？',
            mainImage: 'https://resource.tuniaokj.com/images/shop/computer2.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 321
            },
            collectionCount: 654,
            commentCount: 232,
            likeCount: 543
          }
        ],
      }
    },

    methods: {
      // 筛选
      bindPickerChange: function(e) {
        this.index = e.detail.value
      },
      
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      
    }
  }
</script>

<style lang="scss" scoped>
  
  .pages-a {
    width: 100%;
    height: 100%;
    position: relative;
    // background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
  }
  
  /* 底部安全边距 start*/
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
    height: calc(140rpx + constant(safe-area-inset-bottom));
  }
  
  
  /* 底部tabbar假阴影 start*/
  .bg-tabbar-shadow{
    // background-image: repeating-linear-gradient(to top, rgba(0,0,0,0.1) 10rpx, rgba(255,255,255,0) , rgba(255,255,255,0));
    box-shadow: 0rpx 0rpx 400rpx 0rpx rgba(0, 0, 0, 0.25);
    position: fixed;
    bottom: calc(0rpx + env(safe-area-inset-bottom) / 2);
    bottom: calc(0rpx + constant(safe-area-inset-bottom));
    height: 60rpx;
    width: 100vw;
    z-index: 0;
  }
  
  /* 阴影 start*/
  .home-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }    
  
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }
    
    &__search {
      flex-basis: 60%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        padding: 10rpx 0;
        margin: 0 30rpx;
        border-radius: 60rpx 60rpx 0 60rpx;
        font-size: 24rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
        // color: #AAAAAA;
      }
    }
  }
  .logo-image{
    z-index: 9999 !important;
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    z-index: 9999 !important;
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  
  /* 旋转 */
  .png-sussuspension1{
    animation: suspension1 12s ease-in-out infinite;
  }
  @keyframes suspension1 {
    0%{
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .tabs-fixed{
    position: fixed;
    top: 0;
    width: 100%;
    transition: all 0.25s ease-out;
    z-index: 1;
  }
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 360rpx !important;
    margin-top: -30rpx;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    padding: 30rpx 30rpx 30rpx 30rpx;
    overflow: initial;
    // border: 1rpx solid blueviolet;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    border-radius: 0rpx;
    transform: scale(0.85);
    transition: all 0.2s ease-in 0s;
    will-change: transform;
    overflow: hidden;
    border-radius: 10rpx;
    // border: 1rpx solid blue;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
    will-change: transform;
  }
    
  .card-swiper swiper-item .swiper-item2 {
    margin-top: -370rpx;
    width: 620rpx;
    display: block;
    height: 515rpx;
    border-radius: 0rpx;
    transform: translate(240rpx, 0rpx) scale(0.45, 0.45);
    transition: all 0.6s ease 0s;
    will-change: transform;
    overflow: hidden;
    // border: 1rpx solid black;
  }
    
  .card-swiper swiper-item.cur .swiper-item2 {
    margin-top: -385rpx;
    width: 620rpx;
    transform: translate(210rpx, 0rpx) scale(0.62, 0.62);
    transition: all 0.6s ease 0s;
    will-change: transform;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    margin-top: -300rpx;
    width: 100%;
    display: block;
    height: 50%;
    border-radius: 10rpx;
    transform: translate(0rpx, -40rpx) scale(0.7, 0.7);
    transition: all 0.6s ease 0s;
    will-change: transform;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    margin-top: -350rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    will-change: transform;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 0;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    // border: 1rpx solid orangered;
  }
  
  .spot{
    // background-color: #FBBD12;
    top: -80rpx;
    opacity: 0.1;
    width: 30rpx;
    height: 8rpx;
    border-radius: 2rpx;
    margin: 0 6rpx !important;
    left: -238rpx;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    // background-color: #FBBD12;
  }
 
  
  
  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
    width: 200rpx;
    height: 200rpx;
    position: relative;
  }
  
  .image-pic{
    border: 1rpx solid #F8F7F8;
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  
  .article-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 文字截取*/
  .clamp-text-1 {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .clamp-text-2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 35rpx;
      color: #1D2541;
      background-color: #F3F2F7;
      border-radius: 10rpx;
      font-size: 22rpx;
      padding: 5rpx 15rpx;
  
      &--prefix {
        padding-right: 10rpx;
      }
    }
  }
  
  
  /* 大单图 start*/
  .tn-blogger-content2 {
    &__wrap {
      padding: 30rpx;
    }
    
    &__info {
      &__btn {
        margin-right: -12rpx;
        opacity: 0.5;
      }
    }
    
    &__label {
      &__item {
        line-height: 45rpx;
        padding: 0 20rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #00FFC8;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
        line-height: 55rpx;
      }
    }
    
    &__main-image {
      box-shadow: 0rpx 5rpx 40rpx 0rpx rgba(43, 158, 246, 0.2);
      border-radius: 16rpx;
      
      &--1 {
        max-width: 690rpx;
        min-width: 690rpx;
        max-height: 400rpx;
        min-height: 400rpx;
      }
      
      &--2 {
        max-width: 260rpx;
        max-height: 260rpx;
      }
      
      &--3 {
        height: 212rpx;
        width: 100%;
      }
    }
    
    &__count-icon {
      font-size: 40rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-design{
    padding: 160rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  /* 文章内容 end*/
  
</style>