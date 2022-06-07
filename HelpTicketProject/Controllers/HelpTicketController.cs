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
        [HttpPut("CreateUserInput/")]
        public string CreateUser(string username, string email)
        {
            UserInput ui = new UserInput();
            
            ui.UserName=username;
            ui.Email=email;
            db.UserInputs.Add(ui);
            db.SaveChanges();
            return username + " has been successfully added to the database";
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
        [HttpPut("CreateTicket/")]
        public string CreateTicket(Ticket t)
        {
            db.Tickets.Add(t);
            db.SaveChanges();
            return t.Issue + " has been successfully added to the database";
        }
        [HttpPost("ResolveTicket/{id}")]
        public string ResolveTicket(int id, Ticket updated)
        {
            Ticket t = db.Tickets.Find(id);
            
            t.Resolution = updated.Resolution;  
            t.IsClosed = true;
            db.Tickets.Update(t);
            db.SaveChanges();

            return $"{t.IsClosed} has been completed";
        }

    }
}
