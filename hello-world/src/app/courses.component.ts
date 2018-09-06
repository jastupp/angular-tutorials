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
    <input (keyup.enter)="onKeyUp()" >
    <div (click)="divClick($event)">
      <button (click)="onSave($event)">Save</button>
    </div>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>  `
})
export class CoursesComponent {

    private m_title = 'List of Courses';
    private m_image = 'http://lorempixel.com/400/200';
    private m_colspan = 2;
    private m_active = false;

    /**
     * Constructor
     *
     * @param m_courses
     */
    constructor(private m_service: CoursesService ) {
      // this.m_courses = m_service.getCourses();
    }

    onKeyUp() {
      console.log('Enter Pressed ');
    }

    divClick($event) {
      console.log('Div Button pressed ', $event);

    }

    onSave($event) {
      $event.stopPropagation();
      console.log('Button pressed ', $event);
    }

    get active() { return this.m_active; }

    get colSpan() {
      return this.m_colspan;
    }

    get url() {
      return this.m_image;
    }

    get title() {
      return this.m_title;
    }

    get courses() {
      return this.m_service.getCourses();
    }
}
