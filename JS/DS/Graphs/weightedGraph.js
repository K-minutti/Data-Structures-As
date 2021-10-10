/**
 * Weighted graph implementation 
 * Dijkstra's alogrithm 
 * Priority Queue
 */

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({value, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }
    //naive sort 
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

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

    shortesPathDijkstra(start, finish) {
        // setup algo

        // logic 
        return null
    }
}