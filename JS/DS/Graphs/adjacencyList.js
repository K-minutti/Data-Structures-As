/**
 * Basic graph using adjacency list using a map
 * undirected
*/

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList){
            this.adjacencyList[vertex] = [];
        }
        // if already exists do nothing
    }
}