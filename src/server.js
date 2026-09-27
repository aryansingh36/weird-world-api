import http from "node:http"
import {getDataFromDB} from "./db.js"
import {sendResponse} from "./returnresponse.js"
import { filteredDestination} from "./filterdestination.js"

const PORT = 8000

const server = http.createServer(async(req,res)=>{
    const destinations = await getDataFromDB()


    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const querryobj = Object.fromEntries(urlObj.searchParams)
    console.log(querryobj)

    if (urlObj.pathname ==="/api" && req.method === "GET"){
        const filteredData = filteredDestination(destinations,querryobj)     
        sendResponse(res,200,filteredData)
        
    }else if(req.url.startsWith("/api/continent")&& req.method === "GET" ){
        const continent = req.url.split("/").pop()
        const filterDestination = destinations.filter(destination =>{
            return destination.continent.toLowerCase()===continent.toLowerCase()
        })
       sendResponse(res,200, filterDestination)
    }
    else{
       sendResponse(res, 404, { error: "not found", message: "The requested route does not exist" })
    }
})

server.listen(PORT, ()=>{
    console.log(`connected to port ${PORT}`)
})
