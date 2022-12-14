import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  // Top headlines API URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=76d4034b81854b5189fa0f5d426baac6';

  // tech News API URL
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=76d4034b81854b5189fa0f5d426baac6';
  // Business news API URL
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=76d4034b81854b5189fa0f5d426baac6';
  // Sports news API URL
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=76d4034b81854b5189fa0f5d426baac6';
  // Health news API URL
  healthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=76d4034b81854b5189fa0f5d426baac6';
  // Science news API URL
  scienceNews = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=76d4034b81854b5189fa0f5d426baac6';


  // For Bussiness Logic
  tcBuzzNews():Observable<any>{
    return this._http.get(this.businessNews)
  }
  // For Sports Logic
  tcSportsNews():Observable<any>{
    return this._http.get(this.sportsNews)
  }
  // For Health Logic
  tcHealthNews():Observable<any>{
    return this._http.get(this.healthNews)
  }
  // For Science
  tcScienceNews():Observable<any>{
    return this._http.get(this.scienceNews)
  }

  // Use tech Methods
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)
  }




 

  
  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }

}
