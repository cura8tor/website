import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit{
    
    userData:FormGroup;

    constructor (private fbuilder:FormBuilder){}
    
    ngOnInit(): void {
        this.userData = this.fbuilder.group({
            username:[null, Validators.required],
            password:[null, Validators.required]
        })
    }

    onSubmit ({value}){
        console.log(value)
    }
}
