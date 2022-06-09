
const BG_COLOR = "#231f20"
const outColor = "#F62681"
const nearOutColor = "#F85797"
const insideColor = "#FFD1E3"
// const colorArray= [
//     {
//         outColor: "#F62681",
//         nearOutColor: "#F85797",
//         insideColor: "#FFD1E3"
//     },
//     {
//         outColor: "#00e676",
//         nearOutColor: "#69f0ae",
//         insideColor: "#b9f6ca"
//     },
//     {
//         outColor: "#3C99DC",
//         nearOutColor: "#66D3FA",
//         insideColor: "#D5F3FE"
//     },
//     {
//         outColor: "#651fff",
//         nearOutColor: "#7c4dff",
//         insideColor: "#b388ff"
//     },
// ]


// function draw(color,x,y,n)
// {
//     let xMouse = x-n
//     let yMouse = y
//     if(n==0)
//     {
//         ctx.fillStyle = color
//         ctx.fillRect(squareSize*xMouse,squareSize*yMouse,squareSize,squareSize)
//         return
//     }
//     let i = 0
//     while(i<n)
//     {
//         if(xMouse<0||xMouse>BG_SIZE/squareSize||yMouse<0||yMouse>BG_SIZE/squareSize)
//         {
//             i++
//             xMouse++
//             yMouse--
//         }
//         else
//         {
//             ctx.fillStyle = color
//             ctx.fillRect(squareSize*xMouse,squareSize*yMouse,squareSize,squareSize)
//             i++
//             xMouse++
//             yMouse--
//         }
//     }
//     i = 0
//     while(i<n)
//     {
//         if(xMouse<0||xMouse>BG_SIZE/squareSize||yMouse<0||yMouse>BG_SIZE/squareSize)
//         {
//             i++
//             xMouse++
//             yMouse++
//         }
//         else
//         {
//             ctx.fillStyle = color
//             ctx.fillRect(squareSize*xMouse,squareSize*yMouse,squareSize,squareSize)
//             i++
//             xMouse++
//             yMouse++
//         }
//     }
//     i = 0
//     while(i<n)
//     {
//         if(xMouse<0||xMouse>BG_SIZE/squareSize||yMouse<0||yMouse>BG_SIZE/squareSize)
//         {
//             i++
//             xMouse--
//             yMouse++
//         }
//         else
//         {
//             ctx.fillStyle = color
//             ctx.fillRect(squareSize*xMouse,squareSize*yMouse,squareSize,squareSize)
//             i++
//             xMouse--
//             yMouse++
//         }
//     }
//     i = 0
//     while(i<n)
//     {
//         if(xMouse<0||xMouse>BG_SIZE/squareSize||yMouse<0||yMouse>BG_SIZE/squareSize)
//         {
//             i++
//             xMouse--
//             yMouse--   
//         }
//         else
//         {
//             ctx.fillStyle = color
//             ctx.fillRect(squareSize*xMouse,squareSize*yMouse,squareSize,squareSize)
//             i++
//             xMouse--
//             yMouse--    
//         }
//     }
// }


// canvas.addEventListener('mousedown',(e)=>{
//     let x = Math.floor(e.x/squareSize)
//     let y = Math.floor(e.y/squareSize)
//     let level = 0
//     let interval = setInterval(()=>{
//         if(level<totalSquares)
//         {
//             draw(colorArray[colorIndex].outColor,x,y,level)
//             level++
//         }
//         else
//             clearInterval(interval)
//     },time)

//     setTimeout(()=>{
//         let level = 0
//         let interval = setInterval(()=>{
//             if(level<totalSquares)
//             {
//                 draw(colorArray[colorIndex].nearOutColor,x,y,level)
//                 level++
//             }
//             else
//                 clearInterval(interval)
//         },time)
//     },time)
    
//     setTimeout(()=>{
//         let level = 0
//         let interval = setInterval(()=>{
//             if(level<totalSquares)
//             {
//                 draw(colorArray[colorIndex].insideColor,x,y,level)
//                 level++
//             }
//             else
//                 clearInterval(interval)
//         },time)
//     },time*2)

//     setTimeout(()=>{
//         let level = 0
//         let interval = setInterval(()=>{
//             if(level<totalSquares)
//             {
//                 draw(BG_COLOR,x,y,level)
//                 level++
//             }
//             else
//                 clearInterval(interval)
//         },time)
//     },time*3)
//     changeColor()

// })

// function changeColor()
// {
//     colorIndex++;
//     if(colorIndex>3)
//         colorIndex = 0
// }



