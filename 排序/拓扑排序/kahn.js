const { SGraph } = require('../../数据结构基础/图/Graph.js')

/**
 * 拓扑排序的kahn实现
 * 统计每个顶点的入度，当某个顶点入度为0，则当前顶点的依赖项都已被处理，该顶点为可处理顶点
 */

SGraph.prototype.topoSortByKahn = function() {
  const degree = new Array(this.vertices).fill(0)
  // 统计每个点的入度
  for(let i = 0; i < this.vertices; i++) {
    const list = this.adj[i]
    for(let j = 0; j < list.length; j++) {
      degree[list[j]]++
    }
  }
  console.log('degree', degree)
  const queue = []
  // 将入度为0的顶点入栈
  for(let i = 0; i < this.vertices; i++) {
    if(degree[i] === 0) {
      queue.push(i)
    }
  }
  let output = ''
  // 类似bfs, 更新degree入度数据，并将入度为0的顶点入栈
  while(queue.length) {
    const p = queue.shift()
    output+= p+'=>'
    const list = this.adj[p]
    for(let i = 0; i < list.length; i++) {
      degree[list[i]]--
      if(degree[list[i]] === 0) {
        queue.push(list[i])
      }
    }
  }
  console.log(output)
}

const graph = new SGraph(6)
// 表示1依赖0
graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 5)
graph.addEdge(5, 4)
graph.addEdge(3, 4)

graph.showGraph()
graph.topoSortByKahn()