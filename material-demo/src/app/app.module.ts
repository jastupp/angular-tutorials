import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
    declarations: [
        AppComponent,
        EditCourseComponent
    ],
    entryComponents: [
        EditCourseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatComponentsModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule {}
