import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {NotificationService} from '../../services';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit{

    userData:FormGroup;
    emailExists:boolean;
    loading:boolean = false;

    constructor (private fbuilder:FormBuilder, 
                 private authService:AuthService,
                 private notifService:NotificationService){}

    ngOnInit(): void {
        const regex = /(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\@\#\$\%\^\&\*\(\)\-\=\¡\£\_\+\`\~\.\,<\>\/\?\;\:\'\"\\\|\[\]\{\}]).{6,}/;

        this.userData = this.fbuilder.group({
            password:[null,[Validators.required,Validators.pattern(regex)]],
            email:[null, [Validators.required, Validators.email]],
            displayName:[null, [Validators.required]]
        })
    }

    onSubmit ({value}){
        if(this.loading === false && this.emailExists === false){
            this.authService.signUp(value)
        }else{
            this.notifService.sendMessage(this.notifService.types.danger, 'Email already exists, please choose another email!')
        }        
    }

    checkEmailExists (){

        const successHanlder = (res)=>{
            if(res.length < 1){
                this.emailExists = false
            }else{
                this.emailExists = true
            }
        }

        const errorHandler = (error)=>{
            console.log(error)
        }

        const completedHandler = ()=>{
            this.loading = false
        }

        if(this.userData.controls.email.valid ===  true)
            this.loading = true
            this.authService
                .checkEmailExists(this.userData.value.email)
                .subscribe(successHanlder, errorHandler, completedHandler)
    }

    twitterAuth () {
        this.authService.twitterAuth()
    }
}