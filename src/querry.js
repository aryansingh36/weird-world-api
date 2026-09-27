import http from "node:http"
const Port = 8000
const server = http.createServer((req,res)=>{
    const urlObj =  new URL(req.url,`http://${req.headers.host}`)
    // console.log(urlObj)
    const querryObj = Object.fromEntries(urlObj.searchParams)
    console.log(querryObj)
})
server.listen(Port,()=>console.log(`sever accessed via port ${Port}`))