using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models
{
    public partial class UserInput
    {
        public UserInput()
        {
            BookMarks = new HashSet<BookMark>();
            TicketWhoClosedNavigations = new HashSet<Ticket>();
            TicketWhoOpenedNavigations = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }

        public virtual ICollection<BookMark> BookMarks { get; set; }
        public virtual ICollection<Ticket> TicketWhoClosedNavigations { get; set; }
        public virtual ICollection<Ticket> TicketWhoOpenedNavigations { get; set; }
    }
}
