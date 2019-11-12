var mongoose = require('mongoose');


//Se levanta la coneccion a la bdd
mongoose.connect("mongodb://localhost:27017/students"/*, { autoIndex: false }*/).then(
    () => { console.log('Database connection is successful');console.log() },
    err => { console.log('Error when connecting to the database' + err) }
);

var Grades = require('./model/grades');

//2) El conjunto de datos contiene 4 calificaciones de n estudiantes. 
//   Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:
Grades.count({},(err, result) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("2) Documentos dentro de la coleccion :")
        console.log(result);
    }
});

//3) Encuentra todas las calificaciones del estudiante con el id numero 4
Grades.find( {student_id : 4} ,{ _id : 0 , score : 1}, (error , docs)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("3) Encuentra todas las calificaciones del estudiante con el id numero 4")
        console.log(docs);
    }
});
//4) ¿Cuántos registros hay de tipo exam?
Grades.count( {type : "exam"} , (error , result)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("4) ¿Cuántos registros hay de tipo exam?")
        console.log(result);
    }
});
//5) ¿Cuántos registros hay de tipo homework?
Grades.count( {type : "homework"} , (error , result)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("5) ¿Cuántos registros hay de tipo homework?")
        console.log(result);
    }
});
//6) ¿Cuántos registros hay de tipo quiz?
Grades.count( {type : "quiz"} , (error , result)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("6) ¿Cuántos registros hay de tipo quiz?")
        console.log(result);
    }
});
//7) Elimina todas las calificaciones del estudiante con el id numero 3
Grades.deleteMany({student_id : 3}).then((res)=>{
    console.log("7) Elimina todas las calificaciones del estudiante con el id numero 3");
    console.log("Elementos eliminados : " + res.deletedCount);    
});

//8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
Grades.find( {type : "homework" , score : 75.29561445722392 } , { _id : 0 , student_id : 1}, (error , docs)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?");
        console.log(docs);
    }
});
//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
Grades.updateMany( {_id : "50906d7fa3c412bb040eb591" }, { score : 100 } , (error , response)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100");
        console.log("Documentos modificados : " + response.nModified);
    }
});
//10) A qué estudiante pertenece esta calificación.
Grades.findById( "50906d7fa3c412bb040eb591" , { student_id : 1 } , (error , doc)=>{
    if (error) {
        console.log("Error")
    } else {
        console.log("10) A qué estudiante pertenece esta calificación.");
        console.log("Documento encontrado : " + doc);
    }
});