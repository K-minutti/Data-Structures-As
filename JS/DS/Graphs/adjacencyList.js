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

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
            v !== vertex2
        })

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v => {
            v !== vertex1
        }))
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex]){
            let adjVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adjacencyList[vertex];
    }

    dfs(){
        return null;
    }
}