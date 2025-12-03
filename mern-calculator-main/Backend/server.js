//backend/server.js// express in an web server
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
app.get("/api/calc", (req, res) => {
  const x = parseInt(req.query.n1);
  const y = parseInt(req.query.n2);
  let op = req.query.op;
  let operator = "";
  let result = 0;
  switch (op) {
    case "add":
      result = x + y;
      operator = "+";
      break;
    case "sub":
      result = x - y;
      operator = "-";
      break;
    case "mul":
      result = x * y;
      operator = "*";
      break;
    case "div":
      result = (x / y).toFixed(2);
      operator = "/";
      break;
  }

  res.send(`${x} ${operator} ${y} = ${result}`);
});
app.get("/api/factorial", (req, res) => {
  let n = parseInt(req.query.n);
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  res.send(`Factorial of ${n} is ${fact}`);
});
app.get("/api/GCD", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  res.send(`GCD is ${a}`); // a=10, b=12 then 12-10= 2 now b=2, a=10  then again 10-2=8 now b=2, a=2 then 2-2=0 so GCD is 2
});
app.get("/api/LCM", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  let x = a;
  let y = b;
  let gcd = x;
  while (y !== 0) {
    let t = y;
    y = gcd % y;
    gcd = t;
  }
  let lcm = (a * b) / gcd;
  res.send(`LCM is ${lcm}`);
});
