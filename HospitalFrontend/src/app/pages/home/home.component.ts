import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }


  bookappoinment(){
    this.router.navigate(['book_appointment'],{relativeTo:this.route})
  }
}
