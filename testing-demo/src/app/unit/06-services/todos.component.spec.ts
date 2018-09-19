import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, throwError } from 'rxjs';

describe('Todos conponent', () => {

    let component: TodosComponent;
    let service: TodoService;


    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should set / get the todos', () => {
        const data = [
            { id: 1, title: 'a' },
            { id: 2, title: 'b' },
            { id: 3, title: 'c' }];

        component.todos = data;
        expect(component.todos).toBe(data);
    });

    it('should set / get the message', () => {
        const message = 'dummy message';
        component.message = message;
        expect(component.message).toBe(message);
    });

    it('should set the todo property with items from the server', () => {
        const data = [
            { id: 1, title: 'a' },
            { id: 2, title: 'b' },
            { id: 3, title: 'c' }];

        spyOn(service, 'getTodos').and.callFake(() => {
            return from([data]);
        });
        component.ngOnInit();
        expect(component.todos).toBe(data);
    });

    it('should call server to save changes when a new todo item is added', () => {
        const spy = spyOn(service, 'add').and.callFake((t) => {
            return from([[]]);
        });
        component.add();
        expect(spy).toHaveBeenCalled();
    });

    it('should add the nre todo returned from the server', () => {
        const data = { id: 1};
        spyOn(service, 'add').and.returnValue(from([data]));
        component.add();
        expect(component.todos.indexOf(data)).toBeGreaterThan(-1);
    });

    it('should set the message property if server returns error', () => {
        const error = 'error from the server';
        spyOn(service, 'add').and.returnValue( throwError(error));
        component.add();
        expect(component.message).toBe(error);
    });

    it('should call the server to delete an item if the user confirms', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(service, 'delete').and.returnValue(from([[]]));
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });

    it('should not call the server if the user cancels', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const spy = spyOn(service, 'delete').and.returnValue(from([[]]));
        component.delete(1);
        expect(spy).not.toHaveBeenCalledWith(1);
    });



});
