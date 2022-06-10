

export class UserInput{
    id:number;
    userName:string;
    email: string;

    constructor(id:number, userName: string, email: string){
        this.id = id;
        this.userName = userName;
        this.email = email;
    }
}

export class Ticket {
    id: number;
    issue: string;
    whoOpened: number;
    resolution: string;
    whoClosed: number;
    isClosed: boolean;

    constructor (  id: number, issue: string, whoOpened: number, resolution: string, whoClosed: number, isClosed: boolean){
        this.id = id;
        this.issue = issue;
        this.whoOpened = whoOpened;
        this.resolution = resolution;
        this.whoClosed = whoClosed;
        this.isClosed = isClosed;
    }
}
export class BookMark{
    id: number;
    userInputId: number;
    ticketId: number;

    constructor(id: number, userInputId: number, ticketId:number){
        this.id = id;
        this.userInputId= userInputId
        this.ticketId = ticketId
    }
}