import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import "rxjs/Rx";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) =>{ return response.json();}));
    }
    getfitnessdata():Observable<Appointment[]> {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) =>{return <Appointment[]>response.json()}));
    }
    postcontactdata(data){
      return this.http.post(UserService.BaseUrl+'contactus',data,httpOptions).pipe(map((response: Response) =>{ return response.json();}));
    }
    deletefitnessdata(id){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+id,httpOptions).pipe(map((response: Response) =>{return response.json();}));
    }
    updatefitnessdata(id,data){
      return this.http.put(UserService.BaseUrl+'allfriends/'+id,data,httpOptions).pipe(map((response: Response) =>{return response.json();}));
    }
}

export interface Appointment{
  id:number,
  firstname:string,
  lastname:string,
  age:string,
  phone:string,
  email:string,
  packages:string,
  country:string,
  inr:string,
  paisa:string
}