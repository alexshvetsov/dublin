import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function hexColorValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(value);
    return isValidHex ? null : { invalidHexColor: true };
  };
}
