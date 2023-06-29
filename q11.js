class Graph {
    constructor(edges) {
      this.adjMatrix = this._generateAdjacencyMatrix(edges);
      this.adjList = this._generateAdjacencyList(edges);
    }
  
    _generateAdjacencyMatrix(edges) {
      const nodes = [...new Set(edges.flat())];
      const numNodes = nodes.length;
      const adjMatrix = Array(numNodes)
        .fill()
        .map(() => Array(numNodes).fill(0));
  
      const nodeToIndex = {};
      nodes.forEach((node, index) => {
        nodeToIndex[node] = index;
      });
  
      edges.forEach(([src, dest]) => {
        const srcIndex = nodeToIndex[src];
        const destIndex = nodeToIndex[dest];
        adjMatrix[srcIndex][destIndex] = 1;
        adjMatrix[destIndex][srcIndex] = 1;
      });
  
      return adjMatrix;
    }
  
    _generateAdjacencyList(edges) {
      const adjList = {};
  
      edges.forEach(([src, dest]) => {
        if (!adjList[src]) {
          adjList[src] = [];
        }
        if (!adjList[dest]) {
          adjList[dest] = [];
        }
        adjList[src].push(dest);
        adjList[dest].push(src);
      });
  
      return adjList;
    }
  
    printAdjMatrix() {
      console.log("Adjacency Matrix:");
      console.log(this.adjMatrix);
    }
  
    printAdjList() {
      console.log("Adjacency List:");
      console.log(this.adjList);
    }
  }
  
  const edges = [  [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
  const graph = new Graph(edges);
  graph.printAdjMatrix();
  graph.printAdjList();
  