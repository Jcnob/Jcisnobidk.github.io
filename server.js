const express = require("express"); const app = express(); app.listen(8000); const path = require("path"); const Discord = require("discord.js")
app.get("/",(req,res) => {
    res.sendfile(path.join(__dirname,"/main.html"))
})
app.get("/home",(req,res) => {
 res.sendfile(path.join(__dirname,"/index.html"))
})
app.get("/banword",(req,res) => {
    res.sendfile(path.join(__dirname,"/bannedword.html"))
})
app.get("/discord_server",(req,res) => {
    res.sendfile(path.join(__dirname,"discord.html"))
})
app.get("/rules",(req,res) => {
    res.sendfile(path.join(__dirname,"rules.html"))
})
app.get("/ban_appeals",(req,res) => {
    res.sendfile( path.join(__dirname, '/ban_appeal.html'));
})
app.get("/mod_application",(req,res) => {
    res.sendfile(path.join(__dirname,`/mod_application.html`))
})
app.get("/faq",(req,res) => {
    res.sendfile(path.join(__dirname,("/faq.html")))
})
app.get("*",(req,res) => {
    res.sendfile(path.join(__dirname,"/404.html"))
})
const hook = new Discord.WebhookClient("948383635717898252","0bBI2-KAquiBCrBeHPSmi7FrdAtDK7GjOEl0DICHz0Hv4YTl2CN39rWyH7g0-64Ficwa")
hook.send("Website is up!")
console.log("ho")