module.exports = (app) => {
    const StudentModel = app.models.student;
    return {
        create: (req, res) =>  {
            StudentModel.create(req.body, data => {
                res.json(data);
            });
        },
        findAll: (req, res) => {
            StudentModel.findAll(req.query, data =>{
                res.json(data);
            });
        },
        findById: (req, res) => {
            StudentModel.findById(req.params, data =>{
                res.json(data);
            });
        },
        update: (req, res) => {
            const { id } =  req.params;
            const { name, age } = req.body;
            const params = { id, name, age };

            StudentModel.update(params, data =>{
                res.json(data);
            });
        },
        delete: (req, res) => {
            StudentModel.delete(req.params, data =>{
                res.json(data);
            });
        }
    };
}