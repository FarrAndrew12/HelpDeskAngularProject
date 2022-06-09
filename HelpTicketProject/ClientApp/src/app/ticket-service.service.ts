import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket, UserInput } from './helpticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
rootUrl: string;
  constructor(private http:HttpClient, @Inject('BASE_URL') baseURL: string) { 
    this.rootUrl = baseURL;
  }

  getUserInput(): Observable<UserInput[]> {
    return  this.http.get<UserInput[]>(this.rootUrl + "helpticket/GetUserInput")
  }

  getTicket(): Observable<Ticket[]> {
  return this.http.get<Ticket[]>(this.rootUrl + "helpticket/GetTicket")
  } 
  resolveTicket(Id:Number, Resolution: string, whoClosed: number){
    return this.http.post(this.rootUrl + `helpticket/ResolveTicket/${Id}/${Resolution}/${whoClosed}`, {})
  } 
  CreateTicket(newTicket: Ticket){
    return this.http.put(this.rootUrl + "helpticket/CreateTicket" , newTicket)
  }
}
