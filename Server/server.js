const Diff = require("diff");
const axios = require("axios")
const fs = require("fs")
const express = require("express")
const app = express() 
const cors = require("cors");
const { json } = require("body-parser");

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Welcome page")
})

app.get("/diffpackage",(req,res) => {
 const file1= fs.readFileSync("file1.md","utf-8",(err,data) => {
if(err) 
    console.error(err.stack)
})
 const file2 = fs.readFileSync("file2.md","utf-8",(err,data) => {
if(err) 
    console.error(err.stack)
})

const result = Diff.diffLines(file1.toString(),file2.toString(),{
    ignoreWhitespace: false
})
        res.send({Response : result})
})

app.get("/diffchecker",async(req,res) => {
     const file1= fs.readFileSync("file1.md","utf-8",(err,data) => {
    if(err) 
        console.error(err.stack)
    })
     const file2 = fs.readFileSync("file2.md","utf-8",(err,data) => {
    if(err) 
        console.error(err.stack)
    })
    axios.post(
        "https://api.diffchecker.com/public/text",{
            "left" : file1,
            "right" : file2
        },{
            params : {
                "output_type" : "html_json",
                "email" : "kapil.singh@integrella.com"
            }
        }).then(response => res.send({Response : response?.data?.html})).catch(err => console.error(err.stack))
        
})


app.listen(9000,() => console.log("Server is running"))