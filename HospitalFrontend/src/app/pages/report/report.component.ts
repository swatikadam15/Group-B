import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

patientid:any
patientdetails?:any

  constructor(private patientService:DoctorService) {

    
   }

  ngOnInit(): void {


    this.patientid=localStorage.getItem("patientid")
    console.log(this.patientid);
    
    this.patientService.getallgeneratedreport().subscribe((data:any)=>{      
       data.forEach((element:any) => {
        if(element.id==this.patientid){
        this.patientdetails=element
        console.log(this.patientdetails);
       
        }
         
   });
   console.log(data);
   
 })

    
// console.log(this.patientdetails)
  }



}
