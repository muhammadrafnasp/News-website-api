import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  // Health news Data
  tcHealthNewsData:any=[];
  ngOnInit(): void {
    this.api. tcHealthNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcHealthNewsData = result.articles; 
      
    })
  }

}
