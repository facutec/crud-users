const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global Variables

// Routes
app.use(require('./routes/routes'));

// Static Files

// Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}`);
});
