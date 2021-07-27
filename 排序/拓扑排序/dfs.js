const { SGraph } = require('../../数据结构基础/图/Graph.js')

SGraph.prototype.topoSortByKahn = function() {
  const inverseAdj = []
  // 逆邻接表，表示 依赖于当前顶点 的 顶点
  for(let i = 0; i < this.vertices; i++) {
    inverseAdj[i] = []
  }
  for(let i = 0; i < this.vertices; i++) {
    for(let j = 0; j < this.adj[i].length; j++) {
      inverseAdj[this.adj[i][j]].push(i)
    }
  }

  console.log(inverseAdj)

  function _dfs(point, _inverseAdj, visited) {
    for(let i = 0; i < inverseAdj[point].length; i++) {
      const w = inverseAdj[point][i]
      if(visited[w]) continue
      visited[w] = true
      _dfs(w, _inverseAdj, visited)
    }
    console.log("point", point)
  }

  const visited = new Array(this.vertices).fill(false)
  for(let i = 0; i < this.vertices; i++) {
    if(!visited[i]) {
      visited[i] = true
      _dfs(i, inverseAdj, visited)
    }
  }
  
}

const graph = new SGraph(6)
// 表示5先于1执行，即1依赖5， 如果表示5依赖于1，那么并不需要逆邻接矩阵
graph.addEdge(5, 1)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 5)
graph.addEdge(5, 4)
graph.addEdge(3, 0)

graph.showGraph()
graph.topoSortByKahn()