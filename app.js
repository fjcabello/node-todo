const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');


let command = argv._[0];

switch (command) {
    case 'create':

        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = todo.getTaskList();
        for (let task of list) {
            console.log('======== TODO =========='.green);
            console.log(task.description);
            console.log('State: ', task.completed);
            console.log('========================'.green);

        }
        break;
    case 'update':
        console.log(argv.completed);
        let updated = todo.updateTask(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        console.log('delete');
        let deleted = todo.deleteTask(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Unrecognized command');
}