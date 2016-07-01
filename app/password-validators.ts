import { ControlGroup, Control } from "angular2/common";

export class PasswordValidators {

  static unmatchingPasswords(cg: ControlGroup) {
    var newPasswordValue = cg.find('newPassword').value;
    var confirmPasswordValue = cg.find('confirmPassword').value;
    if(newPasswordValue !== confirmPasswordValue) {
      return { unmatchingPasswords: true };
    }
    return null;
  }

  static passwordComplexity(control: Control) {
    if(control.value == '') {
      return null;
    }
    const minLength = 5;

    if(control.value.length < minLength) {
      return { passwordComplexity: { minLength: minLength} };
    }

    return null;
  }
}
