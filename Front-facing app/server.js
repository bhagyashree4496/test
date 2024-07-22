const express = require("express");
const areasRouter = require("./routes/areas");
const usersRouter = require("./routes/users");
const clustersRouter = require("./routes/clusters");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/areas", areasRouter);
app.use("/users", usersRouter);
app.use("/clusters", clustersRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
