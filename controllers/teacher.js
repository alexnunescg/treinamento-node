module.exports = (app) => {
    const TeacherModel = app.models.teacher;
    return {
        create: (req, res) =>  {
            TeacherModel.create(req.body, data => {
                res.json(data);
            });
        },
        findAll: (req, res) => {
            TeacherModel.findAll(req.query, data =>{
                res.json(data);
            });
        },
        findById: (req, res) => {
            TeacherModel.findById(req.params, data =>{
                res.json(data);
            });
        },
        update: (req, res) => {
            const { id } =  req.params;
            const { name, age } = req.body;
            const params = { id, name, age };

            TeacherModel.update(params, data =>{
                res.json(data);
            });
        },
        delete: (req, res) => {
            TeacherModel.delete(req.params, data =>{
                res.json(data);
            });
        }
    };
}
