<template>
  <div class="echarts-box">
    <el-form :inline="true" :model="query">
      <el-form-item label="集群">
        <el-select v-model="query.server">
          <el-option label="寄卖" value="寄卖" />
        </el-select>
      </el-form-item>
      <el-form-item label="模块">
        <el-select v-model="query.module">
          <el-option label="商详页" value="商详页" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import config from '@/assets/config.js'

export default {
  data() {
    return {
      query: {
        server: '',
        module: ''
      },
      node: {},
      chart: null
    }
  },
  methods: {
    initChart() {
      const container = document.getElementById('container')
      const width = container.clientWidth
      const height = container.clientHeight

      // 注册自定义节点的渲染函数
      G6.registerNode('custom-node', {
        draw(cfg, group) {
          /* 最外面的大矩形 */
          group.addShape('rect', {
            draggable: true, // 启用拖拽功能
            attrs: {
              x: 0,
              y: 0,
              width: cfg.size[0],
              height: cfg.size[1]
            }
          })
          /* 矩形 */
          group.addShape('rect', {
            draggable: true, // 启用拖拽功能
            attrs: {
              x: 0,
              y: 0,
              width: cfg.size[0],
              height: cfg.size[1],
              stroke: '#5B8FF9',
              radius: 2
            }
          })
          /* 左边的粗线 */
          group.addShape('rect', {
            draggable: true, // 启用拖拽功能
            attrs: {
              x: 0,
              y: 0,
              width: 3,
              height: cfg.size[1],
              fill: '#5B8FF9'
            }
          })
          /* the description text */
          group.addShape('text', {
            draggable: true, // 启用拖拽功能
            attrs: {
              text: cfg.name,
              x: 20,
              y: 30,
              fontSize: 16,
              fill: 'black'
            }
          })
          /* the description text */
          group.addShape('text', {
            draggable: true, // 启用拖拽功能
            attrs: {
              text: cfg.id,
              x: 20,
              y: 50,
              fill: 'gray'
            }
          })

          return group
        }
      })

      const data = config.nodeTopology

      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas']
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          nodesepFunc: () => 0, // 设置节点之间的水平间距
          // ranksepFunc: () => 1000 // 设置节点之间的垂直间距
        },
        defaultNode: {
          size: [160, 60],
          type: 'custom-node',
          anchorPoints: [
            [0, 0.5], // 左边缘中点
            [1, 0.5] // 右边缘中点
          ]
        },
        defaultEdge: {
          style: {
            stroke: 'gray',
            endArrow: true
          }
        }
      })

      graph.data(data)
      graph.render()

      window.onresize = () => {
        const container = document.getElementById('container')
        const width = container.clientWidth
        const height = container.clientHeight
        graph.changeSize(width, height)
      }
    },
    onQuery() {}
  },
  mounted() {
    this.initChart()
  },
  unmounted() {}
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 600px;
}
</style>
