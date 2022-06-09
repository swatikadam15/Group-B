import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  filter: any;

  constructor(private http:HttpClient) { }


patientRegister(data:any){
  return this.http.post('http://localhost:3000/app/patient/register',data)
}

patientDetails(){
  return this.http.get('http://localhost:3000/app/patient/details')
}
patientsingleDetails(id:any){
  return this.http.get("http://localhost:3000/app/patient/getsingle/"+id)
}

generatereport(data:any){
  return this.http.post("http://localhost:3000/app/patient/report",data)
}
getallgeneratedreport(){
return this.http.get("http://localhost:3000/app/patient/getallreport")
}
}
