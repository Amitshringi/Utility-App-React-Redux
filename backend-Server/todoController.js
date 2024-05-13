const todos = [
    { "text": "Go to Gym at 9", "completed": false },
    { "text": "Go to Office at 10", "completed": false },
    { "text": "Meeting at 11", "completed": false }
];

// Controller function for getting todos
exports.get = (req, res) => {
    return res.json(todos);
};

// Controller function for adding a new todo
exports.post = (req, res) => {
    const { text, completed } = req.body;
    const newTodo = { text, completed: false };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
};
