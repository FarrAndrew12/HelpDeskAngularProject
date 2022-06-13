import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from '../ticket-service.service';
import { Ticket } from '../helpticket';
import { UserInput } from '../helpticket';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css'],
  providers:[]
})
export class ViewticketComponent implements OnInit {

  t: Ticket = new Ticket (0, "",0,"",0,false);
  User: UserInput[] = [];
  
  constructor(public helpticket :TicketServiceService) {
    this.t=this.helpticket.ticketmodel;
    console.log(this.helpticket.ticketmodel);
    this.helpticket.getUserInput().subscribe(
      (result) => {this.User = result;
        console.log(result) }
    );
   }

  ngOnInit(): void {
    
  }

  

}
