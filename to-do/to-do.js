const fs = require('fs');


let listTodoTasks = [];

const saveDB = () => {
    let data = JSON.stringify(listTodoTasks);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error('error saving file');
    });
}

const loadDB = () => {
    try {
        listTodoTasks = require('../db/data.json');
    } catch (error) {
        listTodoTasks = []
    }
}

const create = (description) => {
    loadDB();
    let todo = {
        description,
        completed: false
    }
    listTodoTasks.push(todo);
    saveDB();
    return todo;
}

const updateTask = (description, completed = true) => {
    loadDB();
    let index = listTodoTasks.findIndex(task => {
        return task.description === description;
    })
    if (index >= 0) {
        listTodoTasks[index].completed = completed;
        saveDB();
        return true;
    }
    return false;
}

const getTaskList = () => {
    loadDB();
    return listTodoTasks;
}

const deleteTask = (description) => {
    loadDB();
    let index = listTodoTasks.findIndex(task => {
        return task.description === description;
    })
    console.log("index is:", index);
    if (index >= 0) {
        //listTodoTasks = listTodoTasks.filter((e) => e.index !== index);
        listTodoTasks.splice(index, 1);
        console.log(listTodoTasks);
        saveDB();
        return true;
    }
    return false;
}


module.exports = {
    create,
    getTaskList,
    updateTask,
    deleteTask
}