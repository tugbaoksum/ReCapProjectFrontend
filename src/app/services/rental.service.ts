import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44358/api/Rentals/getrentaldetails"

constructor(private HttpClient:HttpClient) { }

getRentals():Observable<ListResponseModel<Rental>>{
   return this.HttpClient.get<ListResponseModel<Rental>>(this.apiUrl)

}
}
