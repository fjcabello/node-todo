const argv = require('yargs')
    .command('create', 'create a new element', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task'
        }
    })
    .command('update', 'update task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task'
        },
        completed: {
            default: true,
            alias: 'c',
            desc: 'Mark a task as completed'
        }
    })
    .command('delete', 'delete an element', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the task'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}