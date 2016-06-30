import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './../usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/SignUpForm/signup-form.component.html'
})

export class SignUpFormComponent {
  form:ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.compose([ 
        Validators.required, UsernameValidators.cannotContainSpace 
      ]), UsernameValidators.shouldBeUnique],
      password: ['', Validators.required]
    });
  }
  
  // form = new ControlGroup({
  //   username: new Control('', Validators.required),
  //   password: new Control('', Validators.required) 
  // });

  signUp() {
    this.form.find('username').setErrors({
      invalidLogin: true
    });
    console.log(this.form.value);
  }

}