module.exports = app => {
    const StudentController = app.controllers.student;
    const { rules } = app.utils;
    const { validate } = app.middlewares;
    const { checkSchema } = require('express-validator/check');
    
    app.post('/students', checkSchema(rules.postStudents), validate.check, StudentController.create);
    app.get('/students', StudentController.findAll);
    app.get('/students/:id',checkSchema(rules.id), validate.check, StudentController.findById);
    app.put('/students/:id',checkSchema(rules.id), validate.check, StudentController.update);
    app.delete('/students/:id',checkSchema(rules.id) , validate.check, StudentController.delete);
}