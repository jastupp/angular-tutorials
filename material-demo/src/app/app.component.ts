import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_is_checked = true;
    private m_colours = [
        {id: 1, name: 'Red' },
        {id: 2, name: 'Green' },
        {id: 3, name: 'Blue' }
    ];
    private m_colour = 2;
    private m_min_date = new Date(2018, 1, 1);
    private m_max_date = new Date(2018, 12, 31);
    private m_categories = [
        { name: 'Beginner' },
        { name: 'Intermediate' },
        { name: 'Advanced' }
    ];
    private m_progress = 0;
    private m_timer;
    private m_is_loading = false;


    //**************
    // Constructor *
    //**************
    constructor(private m_dialog: MatDialog) {}

    ngOnInit() {
        this.timer = setInterval(() => {
            this.m_progress++;
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 100);

        this.isLoading = true;
        this.getCourses()
            .subscribe(x => this.isLoading = false );
    }

    getCourses() {
        return timer(5000);
    }

    //**********
    // Getters *
    //**********
    @Input() get isChecked() { return this.m_is_checked; }
    @Input() get colours() { return this.m_colours; }
    @Input() get colour() { return this.m_colour; }
    get minDate() { return this.m_min_date; }
    get maxDate() { return this.m_max_date; }
    get categories() { return this.m_categories; }
    get progress() { return this.m_progress; }
    get timer() { return this.m_timer; }
    get isLoading() { return this.m_is_loading; }
    get dialog() { return this.m_dialog; }

    //**********
    // Setters *
    //**********
    set timer(value) { this.m_timer = value; }
    set isLoading(value) { this.m_is_loading = value; }

    onChange($event) {
        console.log(this.minDate, $event);
    }

    selectCategory(category) {
        this.categories
            .filter(c => c !== category)
            .forEach(c => c['selected'] = false);

        category.selected = !category.selected;
    }

    openDialog() {
        this.dialog.open(EditCourseComponent, {
            data: { courseId: 1 }
        }).afterClosed().subscribe(result => console.log(result));
    }
}
