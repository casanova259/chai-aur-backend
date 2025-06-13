import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('Server Is Ready');
})

app.get('/jokes',(req,res)=>{
    const jokes = [
  {
    id: 1,
    title: "Programmer Joke",
    content: "Why do programmers prefer dark mode? Because the light attracts bugs!"
  },
  {
    id: 2,
    title: "JS Developer",
    content: "How do you comfort a JavaScript bug? You console it."
  },
  {
    id: 3,
    title: "React Fan",
    content: "Why did the React developer stay calm? Because they knew how to handle states."
  },
  {
    id: 4,
    title: "Loop Trouble",
    content: "Why did the developer go broke? Because they used up all their cache!"
  },
  {
    id: 5,
    title: "Git Confusion",
    content: "Why did Git break up with GitHub? Too many issues."
  }
];
 res.send(jokes);
})

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log('Serve at http://localhost:3000')


});