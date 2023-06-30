using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly IRepo<int, DoctorDTO> _repo;
        private readonly ITokenGenerate _tokenGenerate;

        public DoctorService(IRepo<int, DoctorDTO> doctorRepo,ITokenGenerate tokenGenerate)
        {
            _repo= doctorRepo;
            _tokenGenerate= tokenGenerate;
        }
        public async Task<UserDTO> AddDoctor(DoctorDTO item)
        {
            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.Status = "bending";
            item.User.Role = "doctor";


            DoctorDTO doctorDTO =await _repo.Add( item);
            UserDTO user;
            if (doctorDTO != null)
            {
                user = new UserDTO();
                user.UserId = doctorDTO.User.UserId;
                user.Role = doctorDTO.User.Role;
                user.Token =await _tokenGenerate.GenerateToken(user);
                return user;
            }
         
            return null;
        }

    
    }
}
