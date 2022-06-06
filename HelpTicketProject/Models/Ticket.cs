using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models
{
    public partial class Ticket
    {
        public int Id { get; set; }
        public string? Issue { get; set; }
        public int? WhoOpened { get; set; }
        public string? Resolution { get; set; }
        public int? WhoClosed { get; set; }
        public bool? IsClosed { get; set; }

        public virtual UserInput? WhoClosedNavigation { get; set; }
        public virtual UserInput? WhoOpenedNavigation { get; set; }
    }
}
