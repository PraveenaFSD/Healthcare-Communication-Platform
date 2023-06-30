using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorAPI.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }

        [EmailAddress(ErrorMessage = "Please enter the email correctly")]
        public string? Email { get; set; }
        public string? Specialization { get; set; }
        public string? LicenseNumber { get; set; }
        public string? Status { get; set; } 
        public int Experience { get; set; }

    }
}
