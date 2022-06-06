using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HelpTicketProject.Models
{
    public partial class HelpTicketDBContext : DbContext
    {
        public HelpTicketDBContext()
        {
        }

        public HelpTicketDBContext(DbContextOptions<HelpTicketDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BookMark> BookMarks { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;
        public virtual DbSet<UserInput> UserInputs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpTicketDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BookMark>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("BookMark");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.ToTable("Ticket");

                entity.Property(e => e.Issue).HasMaxLength(50);

                entity.Property(e => e.Resolution).HasMaxLength(50);

                entity.HasOne(d => d.WhoClosedNavigation)
                    .WithMany(p => p.TicketWhoClosedNavigations)
                    .HasForeignKey(d => d.WhoClosed)
                    .HasConstraintName("FK__Ticket__WhoClose__398D8EEE");

                entity.HasOne(d => d.WhoOpenedNavigation)
                    .WithMany(p => p.TicketWhoOpenedNavigations)
                    .HasForeignKey(d => d.WhoOpened)
                    .HasConstraintName("FK__Ticket__WhoOpene__38996AB5");
            });

            modelBuilder.Entity<UserInput>(entity =>
            {
                entity.ToTable("UserInput");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .HasColumnName("EMail");

                entity.Property(e => e.UserName).HasMaxLength(40);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
