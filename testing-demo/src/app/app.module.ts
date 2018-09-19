import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './integration/01-voter/voter.component';
import { TodosComponent } from './integration/2-todos/todos.component';
import { TodoService } from './integration/2-todos/todo.service';
import { UserDetailsComponent } from './integration/3-user-details/user-details.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [
        HighlightDirective,
        AppComponent,
        VoterComponent,
        TodosComponent,
        UserDetailsComponent,
        NavComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
