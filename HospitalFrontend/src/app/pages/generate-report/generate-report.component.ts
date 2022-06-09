import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  constructor(private patient:DoctorService) { }

id:any
patientData:any

ngOnInit(): void {
  this.getallreport()
}

  getallreport(){
    this.patient.getallgeneratedreport().subscribe((data:any)=>{
    this.patientData=data
   console.log(data)
    })
  }
  
print(id:any){

}

 
}
