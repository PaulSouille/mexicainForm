import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";


@Injectable()
export class ApiProvider {
  account : Account;
  private baseUrl: string = "http://home.paulsouille.fr:3000"
  constructor(
    private readonly http: HttpClient
      ) {
  }
   
  getEvent():Observable<any>{
    var url = this.baseUrl+'/event/get';
    return this.http.get(`${url}`);
  }
  login(login,password): Observable<any> {
      var url = this.baseUrl+'/login?login='+login+'&password='+password;
      return this.http.get(`${url}`);
  }
  addEvent(event,response,user_id):Observable<any>{
    var url = this.baseUrl+'/event/add?event='+event+'&response='+response+'&user_id='+user_id;
    return this.http.get(`${url}`);
  }
  deleteEvent(id,apiKey,user_id):Observable<any>{
    var url = this.baseUrl+'/event/delete?event_id='+id+'&apiKey='+apiKey+'&user_id='+user_id;
    return this.http.get(`${url}`);
  }
  askDelete(message_id):Observable<any>{
    var url = this.baseUrl+'/event/askDelete?message_id='+message_id;
    return this.http.get(`${url}`);
  }
  removeDelete(message_id):Observable<any>{
    var url = this.baseUrl+'/event/removeDelete?message_id='+message_id;
    return this.http.get(`${url}`);
  }
} 
