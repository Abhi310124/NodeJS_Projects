const http=require('http')
const fs=require('fs') //Handle the file not to grab the file
const path=require('path')


const port=8080 //giving port 

const server=http.createServer((req,res) =>{
    const filepath=path.join(__dirname,req.url ==='/' ? 'index.html' : req.url) //its a basic if else condition

    console.log(filepath)

    const extname= String(path.extname(filepath)).toLowerCase();
    const mineTypes={
        '.html':'text/html',
        '.js':'text/javascript',
        '.css':'text/css',
    }

    const contentType=mineTypes[extname]  || 'application/octet-stream'  
    /* 
    "If the extension isn’t found in the object, use this default MIME type."

    'application/octet-stream' is the MIME type for unknown binary data

    It tells the browser: “Just download this — I don’t know what it is”
    */

    fs.readFile(filepath,(error,content)=>{
        if(error){
            if(error.code==='ENOENT') {
                res.writeHead(404,{'content-type':contentType})  //here the case of we are checking what type of response (using content type) and it detects automatically and writes that content.
                res.end('404 : File Not Found')
            }//ENOET=Error No ENTry

        }
        else{
            res.writeHead(200,{'content-type' :contentType})
            res.end(content,'utf-8')
        }
    })



})


server.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`)
})