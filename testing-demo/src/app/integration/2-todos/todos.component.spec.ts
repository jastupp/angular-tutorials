/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [TodosComponent],
            providers: [ TodoService ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xit('should load todos from the server', () => {
        const todo_service = TestBed.get(TodoService);
        //spyOn(todo_service, 'getTodos').and.returnValue(from([[1, 2, 3]]));
        spyOn(todo_service, 'getTodos').and.returnValue(null);
        console.log(todo_service === component.service);
        spyOn(todo_service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
        fixture.detectChanges();
        expect(component.todos.length).toBe(3);
    });
});
