import { Component } from '@angular/core';
import { Ticket } from '../helpticket';
import { UserInput } from '../helpticket';
import { TicketServiceService } from '../ticket-service.service';
import { BookMark } from '../helpticket';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [TicketServiceService]
})
export class HomeComponent {
  User: UserInput[] = [];
  Ticket: Ticket[] = [];
  TicketToResolve: Ticket = new Ticket (0,"",0,"",0, true);
  id: number = 1;
  resolution: string ='';
  whoClosed: number =1;
  BookMark: BookMark[] = [];
  newBookMark: BookMark = new BookMark (0,0,0)
  newUser: UserInput = new UserInput (0,"","")
  newTicket: Ticket = new Ticket (0, "",0,"",0,false)
  constructor(private helpticket :TicketServiceService){
    this.helpticket.getUserInput().subscribe(
      (result) => {this.User = result;
        console.log(result) }
    )
    this.helpticket.getTicket().subscribe(
      (result) => { this.Ticket = result;
      console.log(result) }
    );
    this.helpticket.getBookMark().subscribe(
      (result) => {this.BookMark = result;
      console.log(result) }
    )
  }
  resolveTicket(){
    this.helpticket.resolveTicket(this.TicketToResolve.id, this.TicketToResolve.resolution, this.TicketToResolve.whoClosed).subscribe((Response)=> {console.log(Response)});
  }
  CreateTicket(){
    let clone: Ticket = new Ticket (0, "",0,"",0,false)
    Object.assign(clone, this.newTicket)
    this.Ticket.push(clone);
    this.helpticket.CreateTicket(clone).subscribe();
  }
  CreateUser(){
    let clone: UserInput = new UserInput (0,"","")
    Object.assign(clone, this.newUser )
    this.User.push(clone);
    this.helpticket.CreateUser(clone).subscribe();
    console.log(clone);
  }
  getUserInputByID(Id:number){
    for(let i:number = 0; i < this.User.length; i++){
      if (this.User[i].id === Id){
        return this.User[i].userName
      }
      
    }
    return "";
     //this.helpticket.getUserByID(Id).subscribe((Response)=>  {return Response.userName})
  }
  BookMarkTicket(){
    let clone: BookMark = new BookMark (0,0,0)
    Object.assign(clone, this.BookMark)
    this.BookMark.push(clone)
    this.helpticket.BookMarkTicket(clone).subscribe();
    console.log(clone);
  }
}
