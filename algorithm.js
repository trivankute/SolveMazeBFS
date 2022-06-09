let height = 10
let width = 10
let array = []
let mapArray = []
// for(let i=0;i<height;i++)
// {
//     let smallArray = []
//     for(let j=0;j<width;j++)
//     {
//         smallArray.push(-1)
//     }
//     array.push(smallArray)
// }

// let startPoint = {x:0,y:0}
// let endPoint = {x:5,y:5}

// array[startPoint.x][startPoint.y] = 1
// array[endPoint.x][endPoint.y] = 2
// array[2][0] = 3
// array[2][1] = 3
// array[2][2] = 3
// array[0][2] = 0
// array[1][2] = 3

// for(let i=0;i<height;i++)
// {
//     let smallArray = []
//     for(let j=0;j<width;j++)
//     {
//         smallArray.push({x:-1,y:-1})
//     }
//     mapArray.push(smallArray)
// }

// mapArray[startPoint.y][startPoint.x] = startPoint
// mapArray[endPoint.y][endPoint.x] = endPoint

// let dX = [-1,0,1,0]
// let dY = [0,-1,0,1]

// let queue = []
// queue.push(startPoint)
// let stop=false
// while(queue.length>0&&!stop)
// {
//     let currNode = queue.shift()
//     for(let i=0;i<4;i++)
//     {
//         let newNode = {x:-99,y:-99}
//         newNode.x = currNode.x
//         newNode.y = currNode.y
//         newNode.x += dX[i]
//         newNode.y += dY[i]
//         if(newNode.x>=width||newNode.x<0||newNode.y>=height||newNode.y<0)
//             continue
//         if(array[newNode.y][newNode.x]===0||array[newNode.y][newNode.x]===1||array[newNode.y][newNode.x]===3)
//             continue
//         if(array[newNode.y][newNode.x]===2){console.log("reach");
//         mapArray[newNode.y][newNode.x]=currNode
//         stop=true;
//         break;
//         }
//         queue.push(newNode)
//         mapArray[newNode.y][newNode.x]=currNode
//         array[newNode.y][newNode.x]=0
//     }
// }
console.log(mapArray)
console.log(array)

let realWay = []
let currNode = mapArray[endPoint.x][endPoint.y]
while(currNode!=startPoint)
{
    realWay.push(currNode)
    currNode = mapArray[currNode.y][currNode.x]
}
console.log(realWay)