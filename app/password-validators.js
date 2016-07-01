System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.unmatchingPasswords = function (cg) {
                    var newPasswordValue = cg.find('newPassword').value;
                    var confirmPasswordValue = cg.find('confirmPassword').value;
                    if (newPasswordValue !== confirmPasswordValue) {
                        return { unmatchingPasswords: true };
                    }
                    return null;
                };
                PasswordValidators.passwordComplexity = function (control) {
                    if (control.value == '') {
                        return null;
                    }
                    var minLength = 5;
                    if (control.value.length < minLength) {
                        return { passwordComplexity: { minLength: minLength } };
                    }
                    return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=password-validators.js.map