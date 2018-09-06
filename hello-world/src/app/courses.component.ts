import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <div (click)="divClick($event)">
      <button (click)="onSave($event)" class="btn btn-primary" [class.active]="active">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="keyUp()" /><br/>
    {{course.title | uppercase | lowercase }} <br/>
    {{course.students | number }} <br/>
    {{course.rating | number:'2.1-1' }}<br/>
    {{course.price | currency:'AUD':' ':'3.2-2' }}<br/>
    {{course.releaseDate | date:'shortDate'}}<br/>
    {{text | summary }}<br/>
  `
})
export class CoursesComponent {

    private m_title = "List of Courses";
    private m_active = false;
    private m_email = "QWERTY";
    private m_course = {
      title: "The course Title",
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016, 3, 1)
    };
    private m_text = "A long valueA long valueA long valueA long valueA long valueA long valueA long value";

    /**
     * Constructor
     *
     * @param m_courses
     */
    constructor(private m_service: CoursesService ) {
      //this.m_courses = m_service.getCourses();
    }

    get text() { return this.m_text; }

    get course() { return this.m_course }

    get email() { return this.m_email; }
    set email(value) { this.m_email = value; }

    keyUp() {
      console.log("Key Up: got " + this.email);
    }

    divClick($event) {
      console.log("Div Clicked", $event);
    }

    onSave($event) {
      $event.stopPropagation();
      console.log("Save Clicked", $event);
    }

    get active() {
      return this.m_active;
    }

    get title() {
      return this.m_title;
    }

    get courses() {
      return this.m_service.getCourses();
    }
}
