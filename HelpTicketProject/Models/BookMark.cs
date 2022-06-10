using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models
{
    public partial class BookMark
    {
        public int Id { get; set; }
        public int? UserInputId { get; set; }
        public int? TicketId { get; set; }

        public virtual Ticket? Ticket { get; set; }
        public virtual UserInput? UserInput { get; set; }
    }
}
