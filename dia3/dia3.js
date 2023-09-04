const mysql = require("mysql2/promise")

async function main(){
    try{
        let connection = await mysql.createConnection(
            {
                host        : "localhost",
                user        : "root",
                password    : "05082005ja",
                database    : "proyecto_museo"
        })
        console.log("Conexion correcta");


        // let sql = "INSERT INTO prestamos (fechaPrestamo, fechaDevolucion, tipoPrestamo, idPropietario) " +
                                        // "VALUES (\"2025-02-02\", \"2025-02-02\", \"piezas en posesión de dueños\", 1)"



        // let sql = "SELECT p.idprestamos AS ID_Prestamo, pz.idpiezas AS ID_Pieza, pz.nombrePieza AS Nombre_Pieza, pz.descripcionPieza AS Estado_Pieza, l.nombreLocalizacion AS Localizacion, p.fechaDevolucion AS Fecha_Expiracion, pp.apellidos AS Apellido_Dueño, pp.email AS Email_Dueño FROM prestamos p JOIN piezas pz ON p.idprestamos= pz.idPrestamo JOIN localizacion l ON pz.idLocalizacion = l.idlocalizacion JOIN propietariopiezas pp ON p.idPropietario = pp.idpropietarioPiezas;"

        let sql = "SELECT tipoExposicion, COUNT(*) AS Num_Piezas FROM colecciones GROUP BY tipoExposicion ORDER BY Num_Piezas DESC;"

        // let sql = "ALTER TABLE piezas AUTO_INCREMENT=1"



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