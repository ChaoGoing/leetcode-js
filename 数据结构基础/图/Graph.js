// 双向图
function Graph(v) {
  this.autoSize = !v
  this.vertices = v || 0 // 这里顶点个数由外部传入，最好应该由addEdge来实现累加
  this.adj = []
  this.edges = 0
  for(let i = 0; i < v; i++) {
    this.adj[i] = [] 
  }
  this.marked = []
  for(let i = 0; i < this.vertices; i++) {
    this.marked[i] = false
  }
}

Graph.prototype = {
  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
    if(this.autoSize) this.vertices++
  },
  // 从第一个点开始寻找是否存在t
  bfs_1(t) {
    const queue = [adj[0]]
    while(queue.length) {
      const current = queue.shift()
      const vertices = this.adj[current]
      for(let i = 0; i < vertices.length; i++) {
        if(this.marked[vertices[i]]) continue
        if(this.marked[vertices[i]] === t) {
          return true
        }
        queue.push(this.marked[vertices[i]])
        this.marked[i] = true
      }
    }
    return false
  },
  // 以s为顶点广度搜索所有顶点
  bfs:function (s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0){
        let v = queue.shift();
        this.marked[v] = true;
        console.log("Visited:" + v);
        this.adj[v].forEach((node, index) => {
            if(!(this.marked[node])){
                queue.push(node);
            }
        })
    }
  },
  // 以v为顶点深度搜索所有顶点
  dfs(v) {
    this.marked[v] = true
    if(this.adj[v]) {
      // do something
    }
    this.adj[v].forEach(node => {
      if(!this.marked[node]) {
        this.dfs(node)
        this.marked[node] = false
      }
    })
  }
}

class DGraph extends Graph{
  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
    if(this.autoSize) this.vertices++
  }
  showGraph() {
    for(let i = 0; i<this.vertices; i++){
      let str = i + "->";
      for(let j = 0; j< this.vertices; j++){
          if(!(this.adj[i][j] == undefined)){
              str += this.adj[i][j] + " ";
          }
      }
      console.log(str);
    }
  }
}

class SGraph extends Graph{
  addEdge(v, w) {
    this.adj[v].push(w)
    this.edges++
    if(this.autoSize) this.vertices++
  }
  showGraph() {
    try{
      for(let i = 0; i<this.vertices; i++){
        let str = i + "->";
        if(!this.adj[i].length) continue
        for(let j = 0; j< this.adj[i].length; j++){
            if(!(this.adj[i][j] == undefined)){
                str += this.adj[i][j] + " ";
            }
        }
        console.log(str);
      }
    }catch(e) {
      
    }
  }
}




module.exports = {
  DGraph,
  SGraph
}