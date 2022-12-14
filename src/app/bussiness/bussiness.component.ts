import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';


@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  // Bussiness news Data
  tcBuzzNewsData:any=[];
  ngOnInit(): void {
    this.api. tcBuzzNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcBuzzNewsData = result.articles; 
      
    })
  }

}
