const express = require('express');
const healthRoute = require('./routes/health');

const app = express();
app.use(express.json());
app.use(healthRoute);

const PORT = process.env.PORT || 8080;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;