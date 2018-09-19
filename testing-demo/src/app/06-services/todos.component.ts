import { TodoService } from './todo.service';
import { OnInit } from '@angular/core';

export class TodosComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_todos: any = [];
    private m_message;

    //**************
    // Constructor *
    //**************
    constructor(private service: TodoService) {}

    //**********
    // Getters *
    //**********
    get todos() { return this.m_todos; }
    get message() { return this.m_message; }

    //**********
    // Setters *
    //**********
    set todos(value) { this.m_todos = value; }
    set message(value) { this.m_message = value; }


    ngOnInit() {
        this.service.getTodos().subscribe(t => this.todos = t);
    }

    add() {
        const newTodo = { title: '... ' };
        this.service.add(newTodo).subscribe(
            t => this.todos.push(t),
            err => this.message = err);
    }

    delete(id) {
        if (confirm('Are you sure?')) {
            this.service.delete(id).subscribe();
        }
    }
}
