import { UserDetailsComponent } from './integration/3-user-details/user-details.component';
import { TodosComponent } from './integration/2-todos/todos.component';


export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: TodosComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: TodosComponent },
];
