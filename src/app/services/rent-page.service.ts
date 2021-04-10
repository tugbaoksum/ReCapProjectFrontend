import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentPageService {

  apiUrl="https://localhost:44358/api/";
  constructor(private httpClient:HttpClient) { }

  add(rent:Rent){
    return this.httpClient.post(this.apiUrl+"rentals/add",rent)

  }
}
