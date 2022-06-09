const BG_COLOR = "#231f20"
const outColor = "#F62681"
const nearOutColor = "#F85797"
const insideColor = "#FFD1E3"

let startPoint = {x:0,y:0}
let endPoint = {x:5,y:5}
const startPointColor = "#ffff00"
const endPointColor = "#00e676"
const wallColor = "#5d4037"
const roadColor = "#EDEDED"

const createStartPoint = document.getElementById('createStartPoint')
let onlyOneStartPoint = false
const createEndPoint = document.getElementById('createEndPoint')
let onlyOneEndPoint = false
const createWalls = document.getElementById('createWalls')
const findButton = document.getElementById('findButton')
// const resetButton = document.getElementById('resetButton')


const BG_SIZE = 600
const squareSize = 30
const totalSquares = (BG_SIZE/squareSize)*2-1
// let time = 100
// let colorIndex = 0

let canvas = document.getElementById('canvas')
canvas.width = canvas.height = BG_SIZE
let ctx = canvas.getContext('2d')
ctx.fillStyle = BG_COLOR
ctx.fillRect(0,0,canvas.width,canvas.height)
let array = []
let mapArray = []
let realWay = []

function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function getEventLocation(element,event){
    var pos = getElementPosition(element);
    
    return {
    	x: (event.pageX - pos.x),
      	y: (event.pageY - pos.y)
    };
}

for(let i=0;i<BG_SIZE/squareSize;i++)
{
    let smallArray = []
    for(let j=0;j<BG_SIZE/squareSize;j++)
    {
        smallArray.push(-1)
    }
    array.push(smallArray)
}

createStartPoint.onclick = () => {
    if(createStartPoint.checked==true)
    {
        createEndPoint.checked=false
        createWalls.checked = false
        canvas.addEventListener('mousedown',(e) => 
        {if(!onlyOneStartPoint)
        {
        let point = getEventLocation(canvas,e)
        point.x = Math.floor(point.x/squareSize)
        point.y = Math.floor(point.y/squareSize)
        startPoint.x = point.x
        startPoint.y = point.y
        if(array[point.y][point.x]!==2 && array[point.y][point.x]!==3)
        {
            array[point.y][point.x] = 1
            onlyOneStartPoint = true
            ctx.fillStyle = startPointColor
            ctx.fillRect(squareSize*point.x,squareSize*point.y,squareSize,squareSize)
        }
        }}
        )
    }
}

createEndPoint.onclick = (e) => {
    if(createEndPoint.checked==true)
    {
        createStartPoint.checked=false
        createWalls.checked = false
        canvas.addEventListener('mousedown',(e)=>{
            if(!onlyOneEndPoint)
            {
                let point = getEventLocation(canvas,e)
                point.x = Math.floor(point.x/squareSize)
                point.y = Math.floor(point.y/squareSize)
                endPoint.x = point.x
                endPoint.y = point.y
                if(array[point.y][point.x]!==1 && array[point.y][point.x]!==3)
                {
                    array[point.y][point.x] = 2
                    onlyOneEndPoint = true
                    ctx.fillStyle = endPointColor
                    ctx.fillRect(squareSize*point.x,squareSize*point.y,squareSize,squareSize)
                }
            }
        })
    }
}

createWalls.onclick = () => {
    createEndPoint.checked=false
    createStartPoint.checked=false
    canvas.addEventListener('mousedown',(e)=>{
        if(createWalls.checked===true)
        {
            let point = getEventLocation(canvas,e)
            point.x = Math.floor(point.x/squareSize)
            point.y = Math.floor(point.y/squareSize)
            if(array[point.y][point.x]!==1 && array[point.y][point.x]!==2)
            {
                array[point.y][point.x] = 3
                ctx.fillStyle = wallColor
                ctx.fillRect(squareSize*point.x,squareSize*point.y,squareSize,squareSize)
            }
        }
    })
}


findButton.onclick = () =>{
    let reach = false
    for(let i=0;i<BG_SIZE/squareSize;i++)
    {
        let smallArray = []
        for(let j=0;j<BG_SIZE/squareSize;j++)
        {
            smallArray.push({x:-1,y:-1})
        }
        mapArray.push(smallArray)
    }
    mapArray[startPoint.y][startPoint.x] = startPoint
    mapArray[endPoint.y][endPoint.x] = endPoint
    let dX = [-1,0,1,0]
    let dY = [0,-1,0,1]
    let queue = []
    queue.push(startPoint)
    let stop=false
    // while(queue.length>0&&!stop)
    // {
    // let currNode = queue.shift()
    // for(let i=0;i<4;i++)
    // {
    //     let newNode = {x:-99,y:-99}
    //     newNode.x = currNode.x
    //     newNode.y = currNode.y
    //     newNode.x += dX[i]
    //     newNode.y += dY[i]
    //     if(newNode.x>=BG_SIZE/squareSize||newNode.x<0||newNode.y>=BG_SIZE/squareSize||newNode.y<0)
    //         continue
    //     if(array[newNode.y][newNode.x]===0||array[newNode.y][newNode.x]===1||array[newNode.y][newNode.x]===3)
    //         continue
    //     if(array[newNode.y][newNode.x]===2){reach = true;
    //     mapArray[newNode.y][newNode.x]=currNode
    //     stop=true;
    //     break;
    //     }
    //     queue.push(newNode)
    //     mapArray[newNode.y][newNode.x]=currNode
    //     // setTimeout(()=>{
    //     //     ctx.fillStyle = insideColor
    //     //     ctx.fillRect(newNode.x*squareSize,newNode.y*squareSize,squareSize,squareSize)
    //     // },100)
    //     array[newNode.y][newNode.x]=0
    // }
    // }
    let interval = setInterval(()=>{
        if(queue.length>0&&!stop)
        {    let currNode = queue.shift()
            for(let i=0;i<4;i++)
            {
                let newNode = {x:-99,y:-99}
                newNode.x = currNode.x
                newNode.y = currNode.y
                newNode.x += dX[i]
                newNode.y += dY[i]
                if(newNode.x>=BG_SIZE/squareSize||newNode.x<0||newNode.y>=BG_SIZE/squareSize||newNode.y<0)
                    continue
                if(array[newNode.y][newNode.x]===0||array[newNode.y][newNode.x]===1||array[newNode.y][newNode.x]===3)
                    continue
                if(array[newNode.y][newNode.x]===2){reach = true;
                mapArray[newNode.y][newNode.x]=currNode
                stop=true;
                break;
                }
                queue.push(newNode)
                mapArray[newNode.y][newNode.x]=currNode
                setTimeout(()=>{
                    ctx.fillStyle = insideColor
                    ctx.fillRect(newNode.x*squareSize,newNode.y*squareSize,squareSize,squareSize)
                },20)
                array[newNode.y][newNode.x]=0
            }}
        else
        {
            clearInterval(interval)
            if(reach)
            {
                let currNode = mapArray[endPoint.y][endPoint.x]
                while(currNode!=startPoint)
                {
                    realWay.push(currNode)
                    currNode = mapArray[currNode.y][currNode.x]
                }
                let i = realWay.length-1
                let interval = setInterval(()=>{
                    if(i>=0)
                    {
                        ctx.fillStyle = roadColor
                        ctx.fillRect(realWay[i].x*squareSize,realWay[i].y*squareSize,squareSize,squareSize)
                        i--
                    }
                    else
                    {
                        clearInterval(interval)
                    }
                },100)
            }
            else
            {
                alert("cant reach")
            }
        }
    }
    ,100)
}

// resetButton.onclick = () => {
//     requestAnimationFrame(()=>{
//         ctx.fillStyle = BG_COLOR
//         ctx.fillRect(0,0,canvas.width,canvas.height)
//         onlyOneStartPoint = false
//         onlyOneEndPoint = false
//         for(let i=0;i<BG_SIZE/squareSize;i++)
//         {
//             let smallArray = []
//             for(let j=0;j<BG_SIZE/squareSize;j++)
//             {
//                 smallArray.push(-1)
//             }
//             array.push(smallArray)
//         }
//         startPoint = {x:-99,y:-99}
//         endPoint = {x:-99,y:-99}
//     })
// }

