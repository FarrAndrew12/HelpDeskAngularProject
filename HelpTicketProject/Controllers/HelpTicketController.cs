using HelpTicketProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpTicketProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HelpTicketController : ControllerBase
    {

        HelpTicketDBContext db = new HelpTicketDBContext();
        [HttpGet("GetUserInput")]
        public List<UserInput> GetUser()
        {
            return db.UserInputs.ToList();
        }
        [HttpPut("CreateUserInput")]
        public string CreateUser(UserInput user)
        {
            db.UserInputs.Add(user);
            db.SaveChanges();
            return user + " has been successfully added to the database";
        }
        [HttpGet("GetTicket")]
        public List<Ticket> GetTicket()
        {
            return db.Tickets.ToList();
        }

        [HttpGet("GetTicketIssue")]
        public Ticket GetIssue(int id)
        {
            return db.Tickets.Find(id);
        }

        [HttpPost("UpdateTicket/{id}")]
        public string UpdateTicket(int id, Ticket updatedInfo)
        {
            Ticket m = db.Tickets.Find(id);
            m.WhoOpened = updatedInfo.WhoOpened;
            m.WhoClosed = updatedInfo.WhoClosed;
            m.Issue = updatedInfo.Issue;
            db.Tickets.Update(m);
            db.SaveChanges();
            return $"The ticket {m.Issue} has been updated at {m.Id} id";
        }
        [HttpPut("CreateTicket")]
        public string CreateTicket(Ticket tick)
        {
            tick.WhoOpened = 3;
            tick.WhoClosed = 1;
            db.Tickets.Add(tick);
            db.SaveChanges();
            return tick + " has been successfully added to the database";
        }
        [HttpPost("ResolveTicket/{id}/{res}/{whoClosed}")]
        public string ResolveTicket(int id, string res, int whoClosed)
        {
            Ticket t = db.Tickets.Find(id);
            
            t.Resolution = res;  
            t.WhoClosed = whoClosed;
            t.IsClosed = true;
            db.Tickets.Update(t);
            db.SaveChanges();

            return $"{t.IsClosed} has been completed";
        }
        [HttpGet("GetUserInputById/{id}")]
        public UserInput GetUserInputById(int id, UserInput u)
        {
            return db.UserInputs.Where(x => x.Id == id).First();
        }
        [HttpGet("GetTicketById/{id}")]
        public Ticket GetTicketById(int id)
        {
            return db.Tickets.Where(x=> x.Id == id).First();
        }

        [HttpPut("BookMarkTicket")]
        public string BookMarkTicket(BookMark bm)
        {
           
            db.BookMarks.Add(bm);
            db.SaveChanges();
            return $"{bm} has been added";

        }
        [HttpGet("GetBookMarkByUser/{id}")]
        public List<BookMark> GetBookMarkedTicket(int id)
        {
            return db.BookMarks.Where(x => x.Id == id).ToList(); 
        }
        [HttpGet("GetBookMarkByTicket/{id}")]
        public List<BookMark> GetBookMarkedTicketInfo(int id)
        {
            return db.BookMarks.Where(x => x.Id == id).ToList();
        }
    }
}
  

