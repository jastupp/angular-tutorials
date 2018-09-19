import { routes } from './app.routes';
import { TodosComponent } from './integration/2-todos/todos.component';
import { UserDetailsComponent } from './integration/3-user-details/user-details.component';

describe('routes', () => {

    beforeEach(() => {

    });

    it('should contain a route for /users', () => {
        expect(routes).toContain({ path: 'users', component: TodosComponent });
    });

    it('should contain a route for /todos', () => {
        expect(routes).toContain({ path: 'todos', component: TodosComponent });
    });

    it('should contain a route for /', () => {
        expect(routes).toContain({ path: '', component: TodosComponent });
    });

});
