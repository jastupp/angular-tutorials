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
  `
})
export class CoursesComponent {

    private m_title = "List of Courses";

    /**
     * Constructor
     *
     * @param m_courses
     */
    constructor(private m_service: CoursesService ) {
      //this.m_courses = m_service.getCourses();
    }



    get title() {
      return this.m_title;
    }

    get courses() {
      return this.m_service.getCourses();
    }
}
