import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit{
    
    userData:FormGroup;

    constructor (private fbuilder:FormBuilder, private authService:AuthService){}
    
    ngOnInit(): void {
        this.userData = this.fbuilder.group({
            email:[null, Validators.required],
            password:[null, Validators.required]
        })
    }

    onSubmit ({value}){
        this.authService.login(value)
    }

    twitterAuth () {
        this.authService.twitterAuth()
    }
}