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

    DFSRecursive(startNode){
        const res = []; // list to return search output 
        const visited = {}; // map of visited nodes/vertex
        const adjList = this.adjacencyList;

        function depthFirstSearch(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            res.push(visited);
            let nodeLen = adjList[vertex].length;
            for(let i = 0; i < nodeLen; ++i){
                let adjNode = adjList[vertex][i];
                if(!visited[adjNode]){
                    depthFirstSearch(adjNode)
                }
            }
        }

        depthFirstSearch(startNode)
        return res;
    }


    DFSIterative(startNode){
        let res = [];
        let visited = {};
        let stack = [startNode];// add starting node to graph
        let adjList = this.adjacencyList;
        let currNode; // init var outside of while loop
        visited[startNode] = true; //marking starting node as seen

        while(stack.length){
            currNode = stack.pop();
            res.push(currNode);// add node to search results 
            // adding nodes with edges to currNode
            for(let i = 0; i <adjList[currNode].length;++i){
                let adjNode = adjList[currNode][i];
                if(!visited[adjNode]){
                    visited[adjNode] =true;
                    stack.push(adjNode);
                }
            }
        }
        return res;
    }

    BreadthFirstSearch(startNode){
        let res = [];
        let queue = [startNode];
        let visited = {};
        let adjList = this.adjacencyList;
        let currNode;
        visited[startNode] = true;
        while(queue.length){
            currNode = queue.shift();
            res.push(node);

            adjList[currNode].forEach(adjNode => {
                if(!visited[adjNode]){
                    visited[adjNode] = true; // setting as seen
                    queue.push(adjNode) // now that we have seen the node 
                    // we also have to visit its neighbors which we will get to once
                    // we all foreach on the node.
                }
            })
        }
        return res;
    }
}