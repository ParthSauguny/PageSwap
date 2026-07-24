// Local development entry point only. Vercel uses api/index.js instead,
// which imports the same app.js but skips app.listen() — serverless
// functions don't run a persistent server process.
const app = require("./app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("server started at port", PORT));