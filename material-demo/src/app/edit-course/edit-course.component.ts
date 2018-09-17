import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

    //**************
    // Constructor *
    //**************
    constructor(@Inject(MAT_DIALOG_DATA) private m_data: any) { }

    //**********
    // Getters *
    //**********
    get data() { return this.m_data; }


    ngOnInit() {
        console.log(this.data);
    }
}
