Live Url of API:- https://backend-api-2zb3.onrender.com/

# install package.json file:-
npm init -y

# install express
npm install express

# install nodemon:- 
npm install -D nodemon

# iss script addkarne "npm run dev" kar sakte hai
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }, 

# index.js (Simple api Get and Post)

const express = require('express');
const app =express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello from the API",
    })
});

app.post('/api/data', (req, res) => {
    console.log("Body received:", req.body);
    const { name, name1 } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required",
        });
    }
    res.status(200).json({
        success: true,
        message: `Hello, ${name} & ${name1}! Your data has been received.`,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


# Diff GET and POST:-
* GET: Ye sirf data mangne ke liye hota hai (jaise Google par search karna). Isme "Body" nahi hoti.

* POST: Ye data bhejne ke liye hota hai. Isme "Body" sabse zaroori hissa hai.

*Always we send some json or text in body 
tab then web get post request.  
{ "name": "Abhi Sahu" } in Postman:-

# we instal cors with out cors don't acces s backend url:-
* npm install cors

* index.js 
const cors = require("cors");
app.use(cors());


# how to fetch url in backend and frontend :-
Backend :-
app.use(cors({
   origin: "https://myfrontend.vercel.app"
}));
Frontend :- 
fetch("https://my-api.onrender.com/users")
  .then((res) => res.json())
  .then((data) => {
      console.log(data);
  });




