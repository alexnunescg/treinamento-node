let students = {
    totalElements: 2,
    students: [{
        name: 'Aluno 1',
        age: 16,
        id: 1
    }, {
        name: 'Aluno 2',
        age: 18,
        id: 2
    }]
};

module.exports = app => {
    return {
        create: (params, callback) => {
            const { name, age } = params;
            const newId = students.totalElements + 1;
    
            students.students.push({
                name,
                age,
                id: newId
            });
    
            students.totalElements = newId;
    
            callback({ message: 'Register successfully'});
        },
    
        findAll: (params, callback) => {
            const { name } = params;

            if (name) {
                const response = students.students.filter((item) => item.name.indexOf(name) >= 0);
                callback({
                    totalElements: response.length,
                    students: response
                });
            } else {
                callback(students);
            }
        },
    
        findById: (params, callback) => {
            const { id } = params;
            const index  = getById(id);
    
            if (index >= 0) {
                callback({
                    student: students.students[index]
                })
            } else {
                callback({
                    message: 'Student Not Found !!!'
                });
            }
        },
        update: (params, callback) => {
            try {
                const { id, name, age } = params;
                const index  = getById(id);
                if (index >= 0) {
                    const student = students.students[index];
                    student.age = age;
                    student.name = name;
                    students.students[index] = student;
                    callback({
                        student: student
                    });
                } else {
                    callback({
                        message: 'Student Not Found !!!'
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
                students.students.splice(index, 1);
                students.totalElements--;
                callback({
                    student: 'Deleted successfully'
                });
            } else {
                callback({
                    message: 'Student Not Found !!!'
                });
            }

        }
    }
};

const getById = (id) => {
    let index = -1;
    students.students.map((student, i) => {
        if (student.id == id) {
            index = i;
        }
    });
    return index;
}