import { Component, OnInit } from '@angular/core';
import { Ticket } from '../helpticket';
import { UserInput } from '../helpticket';
import { BookMark } from '../helpticket';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
  providers: []
})
export class BookmarkComponent implements OnInit {
  Ticket: Ticket[] = [];
  User: UserInput[] = [];
  BookMark: BookMark[] = [];
  lookUpId: number = 0;
  constructor(private helpticket :TicketServiceService ) {
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
    getUserInputByID(Id:number){
      for(let i:number = 0; i < this.User.length; i++){
        if (this.User[i].id === Id){
          return this.User[i].userName
        }
        
      }
      return "";
       //this.helpticket.getUserByID(Id).subscribe((Response)=>  {return Response.userName})
    }
    getBookMarkByUser(Id: number){
       this.helpticket.getBookMarkByUser(this.lookUpId).subscribe(
        (result) => {this.BookMark = result;
        console.log(result)}
       )
       
      return "";
    }
    
  ngOnInit(): void {
  }

}
