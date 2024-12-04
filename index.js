import app from "./app.js";
import connection from "./database/db.connection.js";

try {
    connection().then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        })
    })
} catch (error) {
    console.log(error,"database connection error");
}