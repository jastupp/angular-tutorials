import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class TodoFormComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_form: FormGroup;

    //**************
    // Constructor *
    //**************
    constructor(private m_form_builder: FormBuilder) {
        this.form = this.builder.group({
           name: [ '', Validators.required ],
           email: ['']
        });
    }


    ngOnInit(): void {
        // this.form = this.builder.group({
        //     name: [ '', Validators.required ],
        //     email: ['']
        // });
    }

    //**********
    // Getters *
    //**********
    get form() { return this.m_form; }
    get builder() { return this.m_form_builder; }

    //**********
    // Setters *
    //**********
    set form(value) { this.m_form = value; }

}
