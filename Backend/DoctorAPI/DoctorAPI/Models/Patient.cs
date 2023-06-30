using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DoctorAPI.Models
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        [EmailAddress(ErrorMessage = "Please enter the email correctly")]
        public string? Email { get; set; }
        public string? BloodGroup { get; set; }


    }
}
