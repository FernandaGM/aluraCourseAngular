import {FormGroup, ValidatorFn} from '@angular/forms';

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
  const userName = formGroup.get('userName').value;
  const password = formGroup.get('password').value;

  return userName === password && userName.trim() + password.trim() ?  {userNamePassword: true} : null;
}
