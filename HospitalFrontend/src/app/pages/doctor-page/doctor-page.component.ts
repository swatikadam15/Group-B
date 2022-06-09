import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookappointmentService } from 'src/app/bookappointment.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';


@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
})
export class DoctorPageComponent implements OnInit {
  userid: any;
  patientData:any
  constructor(
    private router: Router,
    private patient: BookappointmentService,
    private Patients:DoctorService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.userid = this.patient.getuserid();

    // this.patient.getAllPaitent().subscribe((result:any)=>{
    //   console.log(result)
    //   this.patientData=result

    // })
    this.getPatientDetails()
  }
  bookappoinmentForm = this.fb.group({
    // userid:[''],
    // id:['',Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    phonenumber:['',Validators.required],
    address:['',Validators.required],
    appointmentdate:['',Validators.required],
    patientdetails:['',Validators.required],
    prescription:['',Validators.required]
  });
pid:any
data:any;
id:any
phonenumber:any;
  generatereports(){
    this.Patients.generatereport(this.bookappoinmentForm.value).subscribe((result:any)=>{
      console.log(result)
      alert("generate report Successfully")
      this.bookappoinmentForm.reset({})

    })

  }


  getPatientDetails(){
    this.Patients.patientDetails().subscribe((result:any)=>{
      console.log(result)
     this.patientData=result

    })
  }
  getsinglePatientDetails(pid:any){
    this.Patients.patientsingleDetails(pid).subscribe((result:any)=>{
      this.data=result
      console.log(this.data)

      this.bookappoinmentForm.controls['firstname'].setValue(this.data.firstname)
      this.bookappoinmentForm.controls['lastname'].setValue(this.data.lastname)
      this.bookappoinmentForm.controls['phonenumber'].setValue(this.data.phonenumber) 
      this.bookappoinmentForm.controls['address'].setValue(this.data.address) 

    })
  }

Search(){
  if(this.phonenumber==""){
    this.ngOnInit()
  }else{
    this.patientData=this.patientData.filter((res:any)=>{
      return res.phonenumber.toLocaleLowerCase().match(this.phonenumber.toLocaleLowerCase())
  
    })
  }
}

}
