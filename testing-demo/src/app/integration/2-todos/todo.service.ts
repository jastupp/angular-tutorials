import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {
    }

    add(todo) {
        return this.http.post('...', todo);
    }

    getTodos() {
        console.log('In here ???');
        return this.http.get('...');
    }

    getTodosPromise() {
        console.log('In here Promise ???');

        return this.http.get('...').toPromise();
    }

    delete(id) {
        return this.http.delete('...');
    }
}
