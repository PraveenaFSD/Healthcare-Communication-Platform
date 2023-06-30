using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class UserService : IManageService
    {
        private readonly IRepo<int, User> _repo;
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly ITokenGenerate _tokenGenerate;

        public UserService(IRepo<int,User> repo, IRepo<int, Doctor> repoDoctor,ITokenGenerate tokenGenerate) {
            _repo = repo;
            _doctorRepo = repoDoctor;
            _tokenGenerate= tokenGenerate;
        }
        public async Task<UserDTO> LoginUser(UserDTO user)
        {
            UserDTO userDetails = null;
            bool s = false;
            var userData = await _repo.Get(user.UserId);
            var hmac = new HMACSHA512(userData.PasswordKey);
            if (userData != null)
            {
                var password = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                //for (int i = 0; i < password.Length; i++)
                //{
                //    if (password[i] != userData.PasswordHash[i])
                //    {
                //        return null;
                //    }
                //}
            }

            if (userData.Role == "doctor" || (userData.Role == "patient"))
            {
                Doctor doctor = await _doctorRepo.Get(user.UserId);
                if (doctor!=null && doctor.Status == "approve".ToLower() || userData.Role=="patient")
                {
                    userDetails = new UserDTO();
                    userDetails.UserId = user.UserId;
                    userDetails.Role = userData.Role;
                    userDetails.Token = await _tokenGenerate.GenerateToken(userDetails);
                    return userDetails;
                }
            }
           

            return null;
        }
    }
}
