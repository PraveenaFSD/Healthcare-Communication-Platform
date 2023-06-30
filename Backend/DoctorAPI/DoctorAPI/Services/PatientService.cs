using DoctorAPI.Interfaces;
using DoctorAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepo<int, PatientDTO> _patientRepo;
        private readonly ITokenGenerate _tokenGenerate;

        public PatientService(IRepo<int,PatientDTO> patientRepo,ITokenGenerate tokenGenerate) {
            _patientRepo = patientRepo;
            _tokenGenerate=tokenGenerate;
        }
        public async Task<UserDTO> AddPatient(PatientDTO item)
        {

            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.User.Role = "patient";


            PatientDTO patientDTO = await _patientRepo.Add(item);
            UserDTO user;
            if (patientDTO != null)
            {
                user = new UserDTO();
                user.UserId = patientDTO.User.UserId;
                user.Role = patientDTO.User.Role;
                user.Token = await _tokenGenerate.GenerateToken(user);
                return user;
            }

            return null;
        }
    }
}
