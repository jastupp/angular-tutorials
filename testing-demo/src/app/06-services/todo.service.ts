import { HttpClient } from '@angular/common/http';

export class TodoService {


    //**************
    // Constructor *
    //**************
    constructor(private m_http: HttpClient) {}

    //**********
    // Getters *
    //**********
    get http() { return this.m_http; }

    add(todo) {
        return this.http.post('...', todo);
    }

    getTodos() {
        return this.http.get('...');
    }

    delete(id) {
        return this.http.delete('...');
    }
}
