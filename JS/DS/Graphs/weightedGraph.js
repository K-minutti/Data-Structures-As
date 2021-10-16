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
    //naive implementation of heap
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

    shortesPathDijkstra(start, finish) {// returns path as list of nodes in order
        // setup algo 
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

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
            smallest = nodes.dequeue().value; // minHeap priorityQueue
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // get next node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calc new distance to next node
                    let potentialNextNode = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(potentialNextNode < distances[nextNeighbor]){
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = potentialNextNode;
                        // updating previous - How we got to Neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, potentialNextNode);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}