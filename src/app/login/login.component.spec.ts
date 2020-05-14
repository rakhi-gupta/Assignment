import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

fdescribe('LoginComponent', () => {
    let loginAppComponent:  LoginComponent;
    let fixture:  ComponentFixture<LoginComponent>;
    let router: Router;
    // let mockRouter = {
    //     navigate: jasmine.createSpy('navigate')
    // }

    let authenticationService: AuthenticationService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            ReactiveFormsModule,
            HttpClientModule,
            RouterTestingModule
        ],
        declarations: [
            LoginComponent
        ],
        providers:[
            FormBuilder,
            AuthenticationService
            //{provide: Router, useValue: mockRouter}
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        loginAppComponent = fixture.componentInstance;
        router = TestBed.get(Router);
        authenticationService = fixture.debugElement.injector.get(AuthenticationService);
        fixture.detectChanges();
    });

    

    xit('should create the app', () => {
        expect(loginAppComponent).toBeTruthy();
    });

    xit('should initialize form with empty values when login page is rendered', () => {
        expect(loginAppComponent.loginForm.value).toEqual({username: "", password: ""});
    });

    xit("should set isSubmitted property to false on component init", () => {
        expect(loginAppComponent.submitted).toBe(false);
    });
    xit("should set isSubmitted property to false on component init", () => {
        expect(loginAppComponent.invalidCredentials).toBe(true);
    });

    it("should validate form to check if username and password are present when form is submitted", () => {
        loginAppComponent.loginForm.setValue({username: "Rakhi", password: "abcd"});
        spyOn(authenticationService, 'authenticateUser').and.returnValue(Observable.create(true));
        const navigateSpy = spyOn(loginAppComponent['router'], 'navigate' );
        loginAppComponent.login();
        
        expect(loginAppComponent.submitted).toBe(true);
        expect(navigateSpy).toHaveBeenCalled();
       // expect(loginAppComponent['router'].navigate).toHaveBeenCalledWith(['dashboard']);

    });

    

        // it('should call authenticate user when valid credentials are entered', () => {

        // });
    
    // it('should successfully redirect to dashboard when valid credentials are entered', () => {

    // });

    // it('should throw invalid credentials error when user is not valid', () => {

    // });

    // it('should throw error error when user is not valid', () => {

    // });


});
