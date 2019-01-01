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

  //GET
  //{{api}}/users
  getUsers():Observable<any>{
    var url = this.baseUrl+'/users/';
    return this.http.get(`${url}`);
  }  

  //PUT
  //{{api}}/users/login
  login(login,password): Observable<any> {
      var url = this.baseUrl+'/login?login='+login+'&password='+password;
      return this.http.get(`${url}`);
  }
  //PUT
  //{{api}}/user/enable/id
  enableUser(user_id):Observable<any>{
    var url = this.baseUrl+'/users/enableUser?user_id='+user_id;
    return this.http.get(`${url}`);
  }
  //PUT
  //{{api}}/user/disable/id
  disableUser(user_id):Observable<any>{
    var url = this.baseUrl+'/users/disableUser?user_id='+user_id;
    return this.http.get(`${url}`);
  }  
  //PUT
  //{{api}}/messages
  addEvent(event,response,user_id):Observable<any>{
    var url = this.baseUrl+'/event/add?event='+event+'&response='+response+'&user_id='+user_id;
    return this.http.get(`${url}`);
  }
  
  //DELETE
  //{{api}}/message/id
  deleteEvent(id,apiKey,user_id):Observable<any>{
    var url = this.baseUrl+'/event/delete?event_id='+id+'&apiKey='+apiKey+'&user_id='+user_id;
    return this.http.get(`${url}`);
  }

  //PUT
  //{{api}}/messages/askDelete/id
  askDelete(message_id):Observable<any>{
    var url = this.baseUrl+'/event/askDelete?message_id='+message_id;
    return this.http.get(`${url}`);
  }

  //Rassembler les deux en une seule
  //PUT
  //{{api}}/messages/askDelete/id
  removeDelete(message_id):Observable<any>{
    var url = this.baseUrl+'/event/removeDelete?message_id='+message_id;
    return this.http.get(`${url}`);
  }

  //GET 
  //{{api}}/messages
  getEvent():Observable<any>{
    var url = this.baseUrl+'/event/get';
    return this.http.get(`${url}`);
  }
} 
