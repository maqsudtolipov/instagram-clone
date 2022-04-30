const express = require("express");

const app = express();

app.use(express.json());

const posts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1651174233411-deececc508b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1650744367607-33b6dcb5eabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1651086922017-fab7708d2181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1651084969294-03a2b0c02c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

app.get("/api/v1/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    results: posts.length,
    data: {
      posts,
    },
  });
});

app.post("/api/v1/posts", (req, res) => {
  posts.push(req.body);

  res.status(201).json({
    status: "success",
    data: {
      post: req.body,
    },
  });
});

//-- Create server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
