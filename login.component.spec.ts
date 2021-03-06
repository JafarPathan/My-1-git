import {async,ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalDirective, ModalModule } from "ngx-bootstrap";
import{RouterTestingModule} from '@angular/router/testing';
import { AlertService } from "../../alerts/alert.service";
import { CommonService } from "../../common.service";
import { PasswordValidation } from "./passwordValidation";
import { HttpClient } from "@angular/common/http";

describe('LoginComponent',()=>{
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async()=>{
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AlertService,CommonService],
            imports : [RouterTestingModule,HttpClient,
                ReactiveFormsModule ,ModalModule]
        })
        .compileComponents();
    });

    beforeEach(()=>{
        fixture= TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', ()=>{
        expect(component).toBeTruthy();
    });
})