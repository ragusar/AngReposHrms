import { AbstractControl, ValidationErrors } from "@angular/forms";


const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]*$/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }


const ALPHABETS_ONLY = (/^[A-Za-z]+$/);
const ALPHABETS_ONLY_VALIDATION_ERROR={onlyAphabetsError:'alphabets only allowed with maximum of 15 characters'}

const NUMBERS_ONLY = (/^[0-9]+$/);
const NUMBERS_ONLY_VALIDATION_ERROR={onlyNumbersError:'Numbers only allowed with maximum of 10 digits'}




export function alphaNumPattern(control:AbstractControl):ValidationErrors|null{
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

export function onlyAlphabets(control:AbstractControl):ValidationErrors|null{
    return ALPHABETS_ONLY.test(control.value) ? null : ALPHABETS_ONLY_VALIDATION_ERROR;
}

export function onlyNumbers(control:AbstractControl):ValidationErrors|null{
    return NUMBERS_ONLY.test(control.value) ? null : NUMBERS_ONLY_VALIDATION_ERROR;
}

