import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

    private m_form = new FormGroup({
        name: new FormControl(),
        contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl()
        }),
        topics: new FormArray([])
    });

    constructor(private m_builder: FormBuilder) {}

    ngOnInit(): void {
        this.builder.group({
            name: ['', Validators.required],
            contact: this.builder.group({
                email: [],
                phone: []
            }),
            topics: this.builder.array([])
        })
    }


    get builder() { return this.m_builder; }

    get form() { return this.m_form; }
    get topics() { return this.form.get('topics') as FormArray; }

    addTopic(topic: HTMLInputElement) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    removeTopic(topic: FormControl) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }



}
