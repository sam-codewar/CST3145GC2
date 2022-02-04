const express = require("express")
const path = require('path');

const courses = [
  { 'topic': 'math', 'location': 'London', 'price': 100 },
  { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
  { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
  { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
];

const app = express()
app.get("/users", (req, res) => {
  res.status(200).json({ 'email': 'user@email.com', 'password': 'mypassword' })
})
app.get("/lessons", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(courses));
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(8000)
