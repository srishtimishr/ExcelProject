import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'http://localhost:8080';
  constructor(private  http:  HttpClient) {}
  
  updateExcelData(data){
    return this.http.post(`${this.API_URL}/writeData`, data);

  }
    
 }


