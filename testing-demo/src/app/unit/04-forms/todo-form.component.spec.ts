import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';
import { async } from '@angular/core/testing';

describe('TodoFormComponent', () => {

    let component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create a form with two controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should make the name control required', () => {
        //fixture.detectChanges();
        //fixture.whenStable(() => {
        const control = component.form.get('name');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });


});
