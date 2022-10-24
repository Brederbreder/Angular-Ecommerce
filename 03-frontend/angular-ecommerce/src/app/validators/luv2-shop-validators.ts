import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {
    // whitespace validation
    static notOnlyWhiteSpace(control: FormControl): ValidationErrors {
        // check whitespace
        if((control.value != null) && (control.value.trim().length == 0)) {
            return { 'notOnlyWhiteSpace': true };
        } else {
            return null;
        }
    }

}
