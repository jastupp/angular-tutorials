import { Component } from '@angular/core';
import { FavouriteChangedEvent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private m_task = {
    title: "Review applications",
    assignee: { name: "John "}
  };


  get task() { return this.m_task; }



  title = 'Angular App';
  post = {
    title: "Title",
    isFavorite: true
  };

  private m_courses;

  loadCourses() {
      this.courses = [
        {id: 1, name: "Course 1"},
        {id: 2, name: "Course 2"},
        {id: 3, name: "Course 3"},
      ];
  }

  private m_can_save = true;

  get canSave() {
    return this.m_can_save;
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({id: 4, name: "Course 4"});
  }
  onChange(course) {
    course.name = course.name + " Updated"

    //let index = this.courses.indexOf(course);
    //this.courses.splice(index, 1);
  }


  private m_view_mode = "qwerty ";

  get viewMode() { return this.m_view_mode; }
  set viewMode(value) { this.m_view_mode = value; }


  get courses() { return this.m_courses; }
  set courses(value) { this.m_courses = value; }

  anyCourses() { return this.courses.length > 0; }

  onFavoriteChange(event: FavouriteChangedEvent) {
    console.log("onFavoriteChange called...." + event.state);
  }
}


