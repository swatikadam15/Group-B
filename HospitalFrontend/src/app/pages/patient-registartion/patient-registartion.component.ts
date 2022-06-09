import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
// import { BookappointmentService } from 'src/app/bookappointment.service';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-patient-registartion',
  templateUrl: './patient-registartion.component.html',
  styleUrls: ['./patient-registartion.component.css']
})

export class PatientRegistartionComponent implements OnInit {
  router: any;

  constructor(
    private formBuilder: FormBuilder,
    private patientregi: DoctorService,
    router :Router
  ) { }
  submitted = false;


    registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    address:['', Validators.required],
    phonenumber:['', Validators.required],
    // email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    // password: ['', [Validators.required, Validators.minLength(6)]]
});



reportgeneration(){
  this.router.navigate(['/doctor']);
}
get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    
  }
//   bookappointment(){
//   this.patientregi.patientregistration(this.registerForm.value).subscribe((result)=>{
//     console.log(result)
//     alert('register successfully');
//     this.registerForm.reset({});
   
//   })
// }

patientregister(){
  this.patientregi.patientRegister(this.registerForm.value).subscribe((result)=>{
    console.log(result)
    alert('Patient Register Successfully');
    this.registerForm.reset({});
  
  })
}
}
