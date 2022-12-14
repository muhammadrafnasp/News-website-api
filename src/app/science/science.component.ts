import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

//  Science news Data
tcScienceNewsData:any=[];
  ngOnInit(): void {
    this.api. tcScienceNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcScienceNewsData = result.articles; 
      
    })

  }

}
