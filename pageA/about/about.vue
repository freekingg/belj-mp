<template>
  <view class="">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-margin tn-text-center" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-text-xl">品牌简介</view>
	   <view class="tn-text-xl">
		  布尔逻辑（Bool Logic）是中国的一家高科技品牌。为用户提供可落地的科创产品，促使用户财富不断增值。
		  由创始人张爱林、王鹏、郭永辉等人于2020年6月1日创立，截止目前，我们已经搭建了15+可落地的科创项目，每年为公司创造营收约5000000+元，为了将项目更深入的发展，我们将可落地的科创项目打包成产品，为用户带去更多财富的同时，也能促进我们对产品的研究和迭代，截至2024年，与我们的合作的用户有200+人，带动用户创造月总营收约2000000+元，平均每月给单个合作用户带去的收益为约10000+元
	   </view>
     
    </view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateAbout',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {

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
</style>
