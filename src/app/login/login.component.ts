import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { AuthenticationService } from './././login.service' '././services/authentication.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    submitted : boolean = false;
    invalidCredentials : boolean = true;

    constructor(private router: Router, private formBuilder: FormBuilder, 
         private AuthenticationService: AuthenticationService
        ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['',  Validators.required],
            password: ['',  Validators.required]
        });
    }


    login(){
        this.submitted = true;
        if (!this.loginForm.invalid) {
            const formData = this.loginForm.value;
            this.AuthenticationService.authenticateUser(formData.username, formData.password)
            .subscribe(data => {
                if(data){
                this.invalidCredentials = false;
                this.router.navigate(["dashboard"]);
                }
                else{
                    
                  //  alert("Invalid credentiaLS");
                    //this.router.navigate(["login"]);
                }
            });
        }

    }
}