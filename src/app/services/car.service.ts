import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="https://localhost:44358/api/"


  constructor(private HttpClient:HttpClient) { }
  getCarDetail():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "Cars/getcardetails"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "Cars/getcardetailsbybrandid?id=" + brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "Cars/getcardetailsbycolorid?id=" +colorId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }
  
  GetCarDetailsById(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailsById?id="+id;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }

}
