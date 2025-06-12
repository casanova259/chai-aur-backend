require('dotenv').config()
const express = require('express')//variable bna liya
const app = express()//app ko use kr payenge
const port = 3000//virtual ports  listen krega server uspe
const githubData = {
  id: 1,
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  age: 24,
  isVerified: true
};
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('manaicdotcom')
})

//login nhi huya cz hotreloadfing isliye server restarrt jrbna hoga 
app.get('/login',(req,res)=>{
    res.send('<h1>Manik Sharma</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>BHAGOOO</h2>')
})

app.get('/github',(req,res)=>
{
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})