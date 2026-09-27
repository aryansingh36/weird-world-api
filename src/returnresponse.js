export function sendResponse(res,statusCode, Data){
    res.statusCode = statusCode
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(Data))
}
        
       