// file system
const fs = require('fs');
const { WriteStream } = require('tty');
// reading files
/* fs.readFile('./advanced/docs/note1.txt', (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data)
})

// writing files
fs.writeFile('./advanced/docs/note2.txt', "hello world", ()=>{
    console.log("file was written")
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', ()=>{
        if(err){
            console.log(err)
        }
        console.log("directory was created")
    })
}else{
    fs.rmdir('./assets', ()=>{
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
} */

const readStream = fs.createReadStream("./docs/blog", {encoding: "utf8"})
const writeStream = fs.createWriteStream("./docs/")

readStream.on("data", (chunk)=>{
    console.log("new chunk")
    console.log(chunk)
    writeStream.write("\n new chunk \n")
    writeStream.write(chunk)
})