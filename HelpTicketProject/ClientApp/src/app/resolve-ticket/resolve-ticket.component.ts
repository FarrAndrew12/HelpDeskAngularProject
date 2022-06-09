import { Component, OnInit } from '@angular/core';
import { Ticket } from '../helpticket';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css'],
  providers: [TicketServiceService]
})
export class ResolveTicketComponent implements OnInit {
  Ticket: Ticket[] = [];
  constructor(private helpticket :TicketServiceService ) {
    this.helpticket.getTicket().subscribe(
      (result) => { this.Ticket = result;
      console.log(result) }
    );
    }
    resolveTicket(Id:Number, Resolution: string, whoClosed: number){
      this.helpticket.resolveTicket(Id, Resolution, whoClosed).subscribe((Response)=> {console.log(Response)});
    }
  ngOnInit(): void {
  }

    }
