import { nextTick, provide, reactive, ref } from 'vue'
import { useOrderedChildren } from '@tuniao/tnui-vue3-uniapp/hooks'

import { indexPageContextKey } from '../tokens'

import type { IndexSubPageContext } from '../tokens'

type TabbarItem = {
  text: string
  icon: string
  activeIcon: string
}
type TabbarData = TabbarItem[]

export const useIndex = () => {
  // 导航栏数据
  const tabbarData: TabbarData = [
    {
      text: '首页',
      icon: 'home-in',
      activeIcon: 'home-in-fill',
    },
    // {
    //   text: '产品',
    //   icon: 'iot',
    //   activeIcon: 'iot-fill',
    // },
    {
      text: '案例',
      icon: 'rocket',
      activeIcon: 'reload-planet-fill',
    },
    {
      text: '资讯',
      icon: 'topics',
      activeIcon: 'topics-fill',
    },
    // {
    //   text: '图鸟',
    //   icon: 'my-circle',
    //   activeIcon: 'my-circle-fill',
    // },
  ]
  

  // 当前选中的tabbar索引
  const currentTabbarIndex = ref(-1)
  // 标记页面是否已经渲染
  const renderPageStatus = ref<boolean[]>(
    Array.from({ length: tabbarData.length }).map(() => false)
  )

  // 底部导航栏发生切换事件
  // 根据index查找对应的页面
  const _findPageByIndex = (index: string | number) => {
    return items.value.find((item) => item.index === index)
  }
  const tabbarChangeHandle = (index: string | number) => {
    if (typeof index === 'string') {
      index = Number.parseInt(index)
    }
    if (!renderPageStatus.value[index]) {
      renderPageStatus.value[index] = true
      nextTick(() => {
        _findPageByIndex(index)?.onLoad?.()
      })
    }
    nextTick(() => {
      _findPageByIndex(index)?.onShow?.()
    })
	console.log(renderPageStatus.value)
  }

  // 处理页面对应scroll-view滚动事件
  const scrollViewScrollHandle = (event: any) => {
    const { scrollTop, scrollLeft } = event.detail
    _findPageByIndex(currentTabbarIndex.value)?.onScroll?.({
      top: scrollTop,
      left: scrollLeft,
    })
  }

  // 子页面数据
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem,
  } = useOrderedChildren<IndexSubPageContext>()

  provide(
    indexPageContextKey,
    reactive({
      items,
      addItem,
      removeItem,
    })
  )

  return {
    tabbarData,
    currentTabbarIndex,
    renderPageStatus,
    tabbarChangeHandle,
    scrollViewScrollHandle,
  }
}
