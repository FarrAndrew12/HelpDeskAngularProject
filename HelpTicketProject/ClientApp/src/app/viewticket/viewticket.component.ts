import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from '../ticket-service.service';
import { Ticket } from '../helpticket';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css'],
  providers:[]
})
export class ViewticketComponent implements OnInit {

  t: Ticket = new Ticket (0, "",0,"",0,false);
  
  constructor(private helpticket :TicketServiceService) {
    
   }

  ngOnInit(): void {
    this.t=this.helpticket.ticketmodel;
    console.log(this.helpticket.ticketmodel);
  }

  

}
