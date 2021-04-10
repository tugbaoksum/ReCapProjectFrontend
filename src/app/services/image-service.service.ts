import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44358/api/"
  getImagesByCar(carId:number):Observable<ListResponseModel<Image>>{
    let newPath= this.apiUrl + "Cars/getcarimagebycarid?id=" + carId
    return this.httpClient.get<ListResponseModel<Image>>(newPath)
  }
  getCarsByColorAndBrandId(colorId:number,brandId:number):Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"Cars/getcardetailsbycolorandbrandid?colorid="+colorId+"&brandid="+brandId
    return this.httpClient.get<ListResponseModel<Image>>(newPath)

  }
}
