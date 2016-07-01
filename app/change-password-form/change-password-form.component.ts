import { Component } from "angular2/core";
import { FormBuilder, ControlGroup, Validators } from "angular2/common";
import { PasswordValidators } from '../password-validators';
@Component({
  selector: 'change-password-form',
  templateUrl: 'app/change-password-form/change-password-form.template.html'
})

export class ChangePasswordFormComponent {

  form:ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
     oldPassword: ['', Validators.required],
     newPassword: ['', Validators.compose([Validators.required, PasswordValidators.passwordComplexity])], 
     confirmPassword: ['', Validators.required] 
    }, { validator: PasswordValidators.unmatchingPasswords });
  }

  changePassword() {
    var oldPassword = this.form.find('oldPassword');
    if(oldPassword.value !== '1234') {
      oldPassword.setErrors({ validOldPassword: true });
    }
    else {
      window.confirm('here we go');
    }
  }
}
