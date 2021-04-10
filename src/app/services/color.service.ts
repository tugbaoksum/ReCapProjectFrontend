import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl="https://localhost:44358/api/Colors/getall"

  constructor(private HttpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.HttpClient.get<ListResponseModel<Color>>(this.apiUrl)

  }
}
