import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  private m_contact_methods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'SMS'}
  ];


  get contactMethods() { return this.m_contact_methods; }

  static log(x) { console.log(x); }

  static submit(f) { console.log(f); }
}

