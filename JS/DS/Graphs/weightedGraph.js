/**
 * Weighted graph implementation 
 */

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(! this.adjacencyList[vertex]){ // if the node does not exist add it to the adjList
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertexOne, vertexTwo, weight){
        this.adjacencyList[vertexOne].push({vertex: vertexTwo, weight})
        this.adjacencyList[vertexTwo].push({vertex: vertexOne, weight})
    }
}