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
        // let sql = "SELECT AVG(mark) FROM marks"
        // let sql = "SELECT COUNT(*) FROM students"
        // let sql = "SELECT * FROM grupos"
        
        // let sql = "DELETE FROM marks WHERE (mark > 5 AND date >= \"2022-01-01\") OR (mark > 5 AND date <= \"2022-12-31\")"
        
        // let sql=  "ALTER TABLE students ADD COLUMN fechaIngresion DATE"


        // let sql = "SELECT * FROM students WHERE fechaIngresion >= \"2023-01-01\" AND fechaIngresion <= \"2023-12-31\""
        // let sql = "SELECT s.title AS Asignatura, COUNT(t.teacher_id) AS NumeroDeProfesores FROM subject s LEFT JOIN subject_teacher t ON s.subject_id = t.subject_id GROUP BY s.title"

        // let sql = "SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date BETWEEN \"2022-01-01\" AND \"2022-09-31\")"
        
        
        // let sql = "SELECT AVG(mark)FROM marks WHERE (date > \"2022-01-01\" AND date < \"2022-12-31\")"

        // let sql = "SELECT s.first_name, s.last_name, AVG(m.mark) AS MediaNotas FROM students s INNER JOIN marks m ON s.student_id = m.student_id WHERE (date > \"2022-01-01\" AND date < \"2022-12-31\") GROUP BY s.first_name, s.last_name;"
        
        // let sql = "SELECT a.first_name AS NombreAlumno, a.last_name, s.title FROM students a JOIN marks m ON a.student_id = m.student_id JOIN subject s ON m.subject_id = s.subject_id;"
        
        // let sql = "SELECT t.first_name AS NombreProfesor, t.last_name AS ApellidoProfesor, s.title FROM teachers t JOIN subject_teacher st ON t.teacher_id = st.teacher_id JOIN subject s ON st.subject_id = s.subject_id;"
        
        let sql = "SELECT s.title AS NombreAsignatura, CONCAT(t.first_name, ' ', t.last_name) AS Profesor, COUNT(DISTINCT m.student_id) AS NumeroAlumnos FROM subject_teacher st JOIN subject s ON st.subject_id = s.subject_id JOIN teachers t ON st.teacher_id = t.teacher_id LEFT JOIN marks m ON s.subject_id = m.subject_id GROUP BY s.title, Profesor;"
        
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

