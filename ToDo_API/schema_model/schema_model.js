/**
 * Created by shahzaibnoor on 10/07/2017.
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ToDoSchema = Schema({
    todo: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: Date,
        default: Date.now
    }
});

//Exporting our model
var TodoModel = mongoose.model('Todo', ToDoSchema);

exports = TodoModel;
