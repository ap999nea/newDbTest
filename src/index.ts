import app from "./server";

const PORT = process.env.port;

const connection = app.listen(PORT, () => {
  console.log("server is up on http://localhost:8000");
});

/*process.on("SIGINT", () => {
  connection.close(() => {
    console.log("Server down");
  });
});*/
