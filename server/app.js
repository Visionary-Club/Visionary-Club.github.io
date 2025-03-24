const express = require('express');
const path = require('path');
const eventsRouter = require('./routes/events');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// ...existing code...

app.use('/api/events', eventsRouter);

// ...existing code...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
