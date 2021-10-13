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
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};

        // let smallest;

        // creating initial state for algorithm all nodes will be set to a len of 
        // infinity excep for the current node-start
        for(let vertex in this.adjacencyList){
            if(vertex === start){// the current vertex is 0 for the len since its the same
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // logic 
        while(nodes.values.length){
            nodes.dequeue();
        }
        return null
    }
}