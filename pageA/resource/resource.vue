<template>
  <view class="template-news tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-margin-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="tn-text-bold tn-text-xl tn-margin-left tn-margin-right tn-margin-top-lg">
        推荐10个程序员接私活的网站，在这里，开启你的副业之旅吧，更有创业者联盟
      </view>
      
      
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm tn-margin-top tn-margin-left-xs">
        <view class="justify-content-item" @click="tn('/pageA/author/author')">
          <view class="tn-flex tn-flex-col-center tn-flex-row-left">
            <view class="logo-pic tn-shadow">
              <view class="logo-image">
                <view class="tn-shadow-blur" style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 90rpx;height: 90rpx;background-size: cover;">
                </view>
              </view>
            </view>
            <view class="tn-padding-right tn-color-black tn-padding-left-sm">
              <view class="tn-text-lg">
                <text class="tn-text-bold">你的名字</text>
              </view>
              <view class="tn-padding-top-xs">
                <view class="justify-content-item tn-tag-content__item tn-margin-right tn-margin-top-xs tn-margin-bottom-x tn-text-sm tn-text-bold">
                  <text class="tn-tag-content__item--prefix">#</text> 资源
                </view>
                <view class="justify-content-item tn-tag-content__item tn-margin-right tn-margin-top-xs tn-margin-bottom-x tn-text-sm tn-text-bold">
                  <text class="tn-tag-content__item--prefix">#</text> 网站
                </view>
                <view class="justify-content-item tn-tag-content__item tn-margin-right tn-margin-top-xs tn-margin-bottom-x tn-text-sm tn-text-bold">
                  <text class="tn-tag-content__item--prefix">#</text> 程序员
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="justify-content-item tn-flex-row-center">
          <!-- <view class="tn-bg-orange tn-padding-xs tn-color-white tn-round">
            <text class="tn-icon-add tn-padding-left-xs"></text>
            <text class="tn-padding-left-xs tn-padding-right-sm tn-text-sm">关 注</text>
          </view> -->
          <view class="">
            <text class="tn-icon-more-vertical tn-color-gray--disabled tn-text-bold tn-text-xxl"></text>
          </view>
        </view>
      </view>
      
      

      
      <view class="news-img tn-padding">
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/1.jpg' mode='widthFix' class=''></image> -->
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/2.jpg' mode='widthFix' class=''></image> -->
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/3.jpg' mode='widthFix' class=''></image>
        <image src='https://resource.tuniaokj.com/images/advertise/4.jpg' mode='widthFix' class=''></image> -->
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/5.jpg' mode='widthFix' class=''></image> -->
        <image src='https://resource.tuniaokj.com/images/advertise/tabbar1.jpg' mode='widthFix' class=''></image>
        <image src='https://resource.tuniaokj.com/images/advertise/tabbar2.jpg' mode='widthFix' class=''></image>
        <image src='https://resource.tuniaokj.com/images/advertise/tabbar3.jpg' mode='widthFix' class=''></image>
        <image src='https://resource.tuniaokj.com/images/advertise/tabbar4.jpg' mode='widthFix' class=''></image>
        <image src='https://resource.tuniaokj.com/images/advertise/tabbar5.jpg' mode='widthFix' class=''></image>
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/7.jpg' mode='widthFix' class=''></image> -->
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/8.jpg' mode='widthFix' class=''></image> -->
        <!-- <image src='https://resource.tuniaokj.com/images/advertise/10.jpg' mode='widthFix' class=''></image> -->
      </view>
      
      
    </view>
    
    <view class="tn-margin-top tn-padding-top-sm tn-margin-bottom">
      <view class="see">
        <view class="justify-content-item tn-flex tn-flex-col-center">
          <view style="margin-left: 15rpx;margin-right: 6rpx;transform: scale(0.85);">
            <tn-avatar-group :lists="groupList" size="sm"></tn-avatar-group>
          </view>
          <text class="tn-color-gray">86人</text>
        </view>
        <view class="justify-content-item tn-color-gray tn-text-center tn-margin-right" style="padding-top: 5rpx;">
          <text class="tn-icon-fire tn-text-lg" style="padding-right: 5rpx;"></text>
          <text class="tn-padding-right tn-text-df">263</text>
          <text class="tn-icon-like-lack tn-text-lg" style="padding-right: 5rpx;"></text>
          <text class="tn-text-df">34</text>
        </view>
        
      </view>
    </view>
    
    <!-- 边距间隔 -->
    <view class="tn-strip-bottom"></view>
    
    <view class="tn-flex tn-flex-row-between">
      <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
      Ta们都在看
      </view>
      <view class="justify-content-item tn-margin tn-text-lg tn-color-grey" @click="tn('/homePages/hot')">
        <text class="tn-padding-xs">全部</text>
        <text class="tn-icon-topics"></text>
      </view>
    </view>
    
    
    <!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
    <view class="">
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
      
      
      
      <!-- 单图大图文 -->
      <view class="">
        
        <block v-for="(item,index) in news2" :key="index">
          <view class="article-shadow tn-margin tn-padding-sm" @click="tn('/pageA/news/news')">
            <view class="image-pic" :style="'background-image:url(' + item.userAvatar + ')'">
              <view class="image-design">
              </view>
            </view>  
            <view class="tn-margin-top tn-padding-bottom-sm">
              <view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
                <text class="">{{ item.title }}</text>
              </view>
              <!-- <view class="tn-padding-top-xs" style="min-height: 90rpx;">
                <text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
                  {{ item.desc }}
                </text>
              </view> -->
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
          </view>
          
        </block>
      </view>
      
      <!-- 三图图文 -->
      <view class="">
        <block v-for="(item,index) in news3" :key="index">
          <view class="article-shadow tn-margin" @click="tn('/pageA/news/news')">
            <view class="" style="padding: 15rpx 10rpx 0 10rpx;">
              <tn-grid  hoverClass="none" :col="3">
                <block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
                  <view class="" style="width: 33.3%;">
                    <view class="image-pic tn-margin-xs" :style="'background-image:url(' + image_item + ')'">
                      <view class="image-article">
                      </view>
                    </view>
                    <!-- <image
                      class="blogger__main-image blogger__main-image--3"
                      :src="image_item"
                      mode="aspectFill"
                    ></image> -->
                  </view>
                </block>
              </tn-grid>
            </view>
            
            
            <view class="tn-margin-sm tn-padding-bottom-sm">
              <view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
                <text class="">{{ item.title }}</text>
              </view>
              <!-- <view class="tn-padding-top-xs" style="min-height: 90rpx;">
                <text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
                  {{ item.desc }}
                </text>
              </view> -->
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
          </view>
          
        </block>
      </view>
    </view>
    
    
    <!-- 悬浮按钮-->
    <view class="tn-flex tn-flex-row-between tn-footerfixed">
      <view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
        <tn-button backgroundColor="#FBBD12" padding="40rpx 0" width="90%" :fontSize="28">
          <text class="tn-color-white">点赞鼓励</text>
          <text class="tn-icon-like-lack tn-padding-left-xs tn-color-white"></text>
        </tn-button>
      </view>
      <view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
        <tn-button backgroundColor="#05C160" padding="40rpx 0" width="90%" :fontSize="28" open-type="share">
          <text class="tn-color-white">分享好友</text>
          <text class="tn-icon-wechat tn-padding-left-xs tn-color-white"></text>
        </tn-button>
      </view>
    </view>
    
    <view class='tn-tabbar-height'></view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateNews',
    mixins: [template_page_mixin],
    data(){
      return {
        groupList: [
          {src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'},
          {src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'},
          {src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'},
          {src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'},
          {src: 'https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg'},
        ],
        news3: [{
            userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'red',
            label: ['小程序'],
            title: '我不喜欢带伞，因为雨滴从来不滴落我手心上',
            desc: '小程序前端源码，欢迎白嫖嗷嗷，可以的话，插件市场三连支持一下aa',
            mainImage:[
              'https://resource.tuniaokj.com/images/simple/image0.jpg',
              'https://resource.tuniaokj.com/images/simple/logo-flower.jpg',
              'https://resource.tuniaokj.com/images/simple/banner0.jpg',
            ],
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
              viewUserCount: 567
            },
            collectionCount: 543,
            commentCount: 543,
            likeCount: 206
          }
        ],
        
        news2: [{
            userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'red',
            label: ['小程序'],
            title: '小程序官网源码，已上线',
            desc: '小程序前端源码，欢迎白嫖嗷嗷，可以的话，插件市场三连支持一下aa',
            mainImage: 'https://resource.tuniaokj.com/images/shop/prototype2.jpg',
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
              viewUserCount: 567
            },
            collectionCount: 543,
            commentCount: 543,
            likeCount: 206
          }
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
      // 跳转
      tn(e) {
        uni.navigateTo({
          url: e,
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    color: #FFFFFF;
    font-size: 18px;
    
    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }
    
    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.7;
      background-color: #FFFFFF;
    }
  }
  
  
  /* 富文本图示意 start */
  .news-img {
    z-index: -1;
    padding-bottom: 40rpx;
  
    image {
      width: 100%;
      margin: 20rpx 0;
      // height: 3373rpx;
      // z-index: -1;
    }
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
  
  /* 底部悬浮按钮 start*/
  .tn-tabbar-height {
  	min-height: 100rpx;
  	height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  .tn-footerfixed {
    position: fixed;
    width: 100%;
    bottom: calc(30rpx + env(safe-area-inset-bottom));
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
    
  }
  /* 底部悬浮按钮 end*/
  
  /* 查看*/
  .see {
    display: flex;
    justify-content: space-between;
    padding-top: 10rpx;
    border-radius: 6rpx;
    color: #666;
    line-height: 1.6;
  }
  /* 间隔线 start*/
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/
   
   
   /* 用户头像 start */
   .logo-image {
     width: 90rpx;
     height: 90rpx;
     position: relative;
   }
   
   .logo-pic {
     background-size: cover;
     background-repeat: no-repeat;
     // background-attachment:fixed;
     background-position: top;
     box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
     border-radius: 50%;
     overflow: hidden;
     // background-color: #FFFFFF;
   }
</style>
