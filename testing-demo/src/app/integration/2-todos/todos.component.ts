import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_todos: any = [];
    private m_message;

    //**************
    // Constructor *
    //**************
    constructor(private m_service: TodoService) {}

    //**********
    // Getters *
    //**********
    get todos() { return this.m_todos; }
    get service() { return this.m_service; }

    //**********
    // Setters *
    //**********
    set todos(value) { this.m_todos = value; }
    set message(value) { this.m_message = value; }

    ngOnInit() {
        console.log('started...');
        console.log('service...', this.service);
        this.service.getTodos().subscribe(t => this.todos = t);
        //this.service.getTodosPromise().then(t => this.todos = t);
        console.log('finished...');

    }

    add() {
        const newTodo = { title: '... ' };
        this.service.add(newTodo).subscribe(
            t => this.todos.push(t),
            err => this.message = err);
    }

    delete(id) {
        if(confirm('Are you sure?')) {
            this.service.delete(id).subscribe();
        }
    }
}
