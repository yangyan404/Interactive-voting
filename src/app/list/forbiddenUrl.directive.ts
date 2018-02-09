

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

//自定义校验
export function forbiddenName(reg:RegExp) :ValidatorFn {
    return (control:AbstractControl):{[key:string]:any} =>{
        let valid=reg.test(control.value); 
        return valid ? null:{'forbidden':{value:`${control.value}不合法`}};
    }
}

@Directive({
    selector: '[forbiddenUrl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: ForbiddenUrlDirective, multi: true }
    ]
})
export class ForbiddenUrlDirective implements Validator { 
    @Input() forbiddenUrl: string;
    validate(c:AbstractControl):{[key:string]:any} {
        return this.forbiddenUrl ?forbiddenName(new RegExp(this.forbiddenUrl,'i'))(c):null;
    }
}