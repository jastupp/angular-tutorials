import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    let errors = null;

    if((control.value as string).indexOf(' ') >= 0) {
      errors = {cannotContainSpace: true};
    }
    return errors;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(((control.value as string) === 'jas') ? {shouldBeUnique: true} : null);
      },2000);
    });
  }
}




