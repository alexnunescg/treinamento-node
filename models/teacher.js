let teachers = {
  totalElements: 2,
  teachers: [{
      name: 'Professor 1',
      age: 25,
      id: 1
  }, {
      name: 'Professor 2',
      age: 30,
      id: 2
  }]
};

module.exports = app => {
    return {
        create: (params, callback) => {
            const { name, age } = params;
            const newId = teachers.totalElements + 1;

            teachers.teachers.push({
                name,
                age,
                id: newId
            });

            teachers.totalElements = newId;

            callback({ message: 'Register successfully'});
        },

        findAll: (params, callback) => {
            const { name } = params;

            if (name) {
                const response = teachers.teachers.filter((item) => item.name.indexOf(name) >= 0);
                callback({
                    totalElements: response.length,
                    teachers: response
                });
            } else {
                callback(teachers);
            }
        },

        findById: (params, callback) => {
            const { id } = params;
            const index  = getById(id);

            if (index >= 0) {
                callback({
                    teacher: teachers.teachers[index]
                })
            } else {
                callback({
                    message: 'Teacher Not Found !!!'
                });
            }
        },
        update: (params, callback) => {
            try {
                const { id, name, age } = params;
                const index  = getById(id);
                if (index >= 0) {
                    const teacher = teachers.teachers[index];
                    teacher.age = age;
                    teacher.name = name;
                    teachers.teachers[index] = teacher;
                    callback({
                        teacher: teacher
                    });
                } else {
                    callback({
                        message: 'Teacher Not Found !!!'
                    });
                }
            } catch (error) {
                callback({
                    error: error.message
                });
            }

        },
        delete: (params, callback) => {
            const { id } = params;
            const index  = getById(id);

            if (index >= 0) {
                teachers.teachers.splice(index, 1);
                teachers.totalElements--;
                callback({
                    teacher: 'Deleted successfully'
                });
            } else {
                callback({
                    message: 'Teacher Not Found !!!'
                });
            }

        }
    }
};

const getById = (id) => {
    let index = -1;
    teachers.teachers.map((teacher, i) => {
        if (teacher.id == id) {
            index = i;
        }
    });
    return index;
}
