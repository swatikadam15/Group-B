import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';
import { DoctorService } from 'src/app/doctor.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private doctor: DoctorService,
    private router:Router
  ) {}
  docotoLogin!: FormGroup;
  ngOnInit(): void {
    this.docotoLogin = this.formbuilder.group({
      Email: ['swatikadam09@gmail.com'],
      password: ['kadam123'],
    });
  }

  result: any;
  login() {
    this.doctor.login().subscribe(res=>{
      const user=res.find((a:any)=> {
        return a.Email === this.docotoLogin.value.Email && a.password === this.docotoLogin.value.password
      });
      if(user){
        alert("Login Success")
        this.docotoLogin.reset();
        this.router.navigateByUrl('/patientregistration');
      }else{
        alert("Please enter correct email id and password..!!");
      }
    },err=>{
      alert("Something went wrong!!");
    
  })
 
  }
}
