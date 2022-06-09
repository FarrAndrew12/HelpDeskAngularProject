

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
    IsClosed: boolean;

    constructor (  id: number, issue: string, whoOpened: number, resolution: string, whoClosed: number, IsClosed: boolean){
        this.id = id;
        this.issue = issue;
        this.whoOpened = whoOpened;
        this.resolution = resolution;
        this.whoClosed = whoClosed;
        this.IsClosed = IsClosed;
    }
}