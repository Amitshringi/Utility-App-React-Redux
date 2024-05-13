const express = require("express");
const cors = require("cors");
const todoRoutes = require("./todoRoutes");

const server = express();

// Enable CORS
server.use(cors());
server.use(express.json()); // Parse JSON bodies

// Use todoRoutes for handling todo-related routes
server.use("/api/todos", todoRoutes);

server.get("/", (req, res) => {
    res.send("Welcome to Utility API");
});

const PORT = 4100;
server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
