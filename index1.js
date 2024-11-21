const express = require('express');
const app = express();
const PORT = 8000;
// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public')); // Serve files from the 'public' folder
app.use((req,res,next)=>{
    console.log(req)
    next();
})
// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Static content endpoint
app.get('/about', (req, res) => {
    res.send('This is the About page!');
});

// REST API Endpoints
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ]);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body; // Assume a user object is sent in the request body
    console.log('New User Added:', newUser);
    res.json({ message: 'User added successfully!', user: newUser });
});

// Dynamic Route Handling
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: `User ${userId}` });
});

// Query Parameters Example
app.get('/search', (req, res) => {
    const query = req.query.q || 'No query provided';
    res.json({ message: `You searched for: ${query}` });
});

// Wildcard Route (Catch-All)
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
