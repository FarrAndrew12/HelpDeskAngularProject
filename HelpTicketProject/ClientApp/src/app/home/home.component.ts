import { Component } from '@angular/core';
import { Ticket } from '../helpticket';
import { UserInput } from '../helpticket';
import { TicketServiceService } from '../ticket-service.service';
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
}
