import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit{

    userData:FormGroup;

    constructor (private fbuilder:FormBuilder){}

    ngOnInit(): void {
        const regex = /(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\@\#\$\%\^\&\*\(\)\-\=\¡\£\_\+\`\~\.\,<\>\/\?\;\:\'\"\\\|\[\]\{\}]).{6,}/;

        this.userData = this.fbuilder.group({
            username:[null, Validators.required],
            password:[null,[Validators.required,Validators.pattern(regex)]],
            email:[null, [Validators.required, Validators.email]]
        })
    }

    onSubmit ({value}){
        console.log(value)
    }
}
