import { Component, OnInit } from '@angular/core';
import { Ticket } from '../helpticket';
import { TicketServiceService } from '../ticket-service.service';
import { UserInput } from '../helpticket';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css'],
  providers: [TicketServiceService]
})
export class ResolveTicketComponent implements OnInit {
  Ticket: Ticket[] = [];
  User: UserInput[] = [];
  constructor(private helpticket :TicketServiceService ) {
    this.helpticket.getUserInput().subscribe(
      (result) => {this.User = result;
        console.log(result) }
    )
    this.helpticket.getTicket().subscribe(
      (result) => { this.Ticket = result;
      console.log(result) }
    );
    }
    resolveTicket(Id:Number, Resolution: string, whoClosed: number){
      this.helpticket.resolveTicket(Id, Resolution, whoClosed).subscribe((Response)=> {console.log(Response)});
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
  ngOnInit(): void {
  }

    }
