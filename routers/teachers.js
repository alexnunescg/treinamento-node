module.exports = app => {
    const TeacherController = app.controllers.teacher;
    const { rules } = app.utils;
    const { validate } = app.middlewares;
    const { checkSchema } = require('express-validator/check');

    app.post('/teachers', checkSchema(rules.postStudents), validate.check, TeacherController.create);
    app.get('/teachers', TeacherController.findAll);
    app.get('/teachers/:id', checkSchema(rules.id), validate.check, TeacherController.findById);
    app.put('/teachers/:id', checkSchema(rules.id), validate.check, TeacherController.update);
    app.delete('/teachers/:id', checkSchema(rules.id) , validate.check, TeacherController.delete);
}
