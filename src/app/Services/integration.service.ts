import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  // URL:string = 'https://jsonplaceholder.typicode.com/';
  URL:string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  getAll(endPoint:string):Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.URL}/${endPoint}`)
      .pipe(
        retry(2),
        catchError((error:HttpErrorResponse)=>{
          return throwError(()=>{
            return new Error('Error Occord')
          })
        })
      )
  }

  getById(id:number , endPoint:string): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/${endPoint}/${id}`);
  }

  getByCategoryId(catId:number,  endPoint:string): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.URL}/${endPoint}?catId=${catId}`)
  }

  create(body:any , endPoint:string) :Observable<any> {
    return this.httpClient.post(`${this.URL}/${endPoint}` , body , {
      headers: {
        'authorization': 'yOur token',
        'content-type': 'aplication/json'
      },
      params: {
        'catId': 'catId'
      }
    })
  }


}
