export default {
  routes: [
    {
      path: '/',
      icon: 'House',
      title: '首页',
      view: 'Home.vue'
    },
    {
      path: '/about',
      icon: 'View',
      title: '关于',
      view: 'About.vue'
    },
    {
      path: '/tasktopology',
      icon: 'View',
      title: '任务拓扑',
      view: 'TaskTopology.vue'
    },
    {
      path: '/datareport/threadpool',
      icon: 'View',
      title: '线程池',
      view: 'datareport/ThreadPool.vue'
    }
  ],
  nodeTopology: {
    nodes: [
      {
        id: 'Start',
        label: '开始',
        type: 'circle',
        size: [50, 50],
        labelCfg: { style: { fontSize: 16 } }
      },
      {
        id: 'ProductTask',
        name: '商品基本信息'
      },
      {
        id: 'ProductStockTask',
        name: '商品库存信息'
      },
      {
        id: 'ProductStatusTask',
        name: '商品状态信息'
      },
      {
        id: 'ProductExtTask',
        name: '商品拓展信息'
      },
      {
        id: 'SellerTask',
        name: '卖家信息'
      },
      {
        id: 'PromiseTask',
        name: '履约信息'
      },
      {
        id: 'SameStyleTask',
        name: '同款推荐'
      },
      {
        id: 'ActivityTask',
        name: '参与活动'
      }
    ],
    edges: [
      {
        source: 'ProductTask',
        target: 'SellerTask'
      },
      {
        source: 'ProductTask',
        target: 'SameStyleTask'
      },
      {
        source: 'SameStyleTask',
        target: 'ProductStatusTask'
      },
      {
        source: 'ProductTask',
        target: 'ActivityTask'
      },
      {
        source: 'ProductExtTask',
        target: 'PromiseTask'
      },
      {
        source: 'ProductStockTask',
        target: 'ProductStatusTask'
      },
      {
        source: 'Start',
        target: 'ProductTask'
      },
      {
        source: 'Start',
        target: 'ProductStockTask'
      },
      {
        source: 'Start',
        target: 'ProductExtTask'
      }
    ]
  }
}
