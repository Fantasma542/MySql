const mysql = require("mysql2/promise")

async function main(){
    try{
        let connection = await mysql.createConnection(
            {
                host        : "localhost",
                user        : "root",
                password    : "05082005ja",
                database    : "dia1"
        })
        console.log("Conexion correcta");
        // let sql = "CREATE TABLE teachers (id INT AUTO_INCREMENT PRIMARY KEY, " +
        //                                     "first_name VARCHAR(50), " + 
        //                                     "last_name VARCHAR(50))";

        // let sql = "INSERT INTO marks (student_id, subject_id, date, mark) " +
                                        // "VALUES (10, 10, \"2023-08-30\",7)"

        // let sql = "DELETE FROM grupos"

        // let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, " +
        //                                     "calle VARCHAR(200), " + 
        //                                     "numero INT, " +
        //                                     "ciudad VARCHAR(60))";

    // let sql = "INSERT INTO direccion (calle, numero, ciudad) " +
    //                                     "VALUES (\"Calle de la Alegría\", 1, \"Madrid\")"

    // let sql=  "ALTER TABLE direccion ADD COLUMN pais VARCHAR(30);"
    
    // let sql = "ALTER TABLE direccion DROP COLUMN pais;"
    
    // let sql = "DROP TABLE direccion"

    // let sql = "UPDATE marks SET mark=0"
    // let sql = "SELECT first_name, last_name FROM students"
    
    // let sql = "SELECT * FROM dia1.teachers"
    
    // let sql = "DELETE FROM marks WHERE date < \"2013-09-02\""
    
    // let sql = "UPDATE marks SET mark=5 WHERE mark < 5"

        let [result] = await connection.query(sql);
        console.log(result);

        await connection.end
    }
    catch(err)
    {
        console.log(err);
        // await connection.end();
    }
}
main()

