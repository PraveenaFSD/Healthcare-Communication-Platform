using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class UserService : IManageService
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly ITokenGenerate _tokenGenerate;
        private readonly IRepo<int, Patient> _patientRepo;

        public UserService(IRepo<int,User> repo, IRepo<int, Doctor> repoDoctor,ITokenGenerate tokenGenerate, IRepo<int,Patient> patientRepo) {
            _userRepo = repo;
            _doctorRepo = repoDoctor;
            _tokenGenerate= tokenGenerate;
            _patientRepo= patientRepo;
        }

        public async Task<bool> DeleteUser(IdDTO id)
        {
            User user = await _userRepo.Get(id.UserId);
            if(user.Role=="doctor".ToLower())
            {
                Doctor doctor=await _doctorRepo.Delete(id.UserId);
                if(doctor!=null)
                {
                    return true;
                }
   
            }

             Patient patient=await _patientRepo.Delete(id.UserId);
            if(patient!=null)
            {
                return true;
            }
           
            return false;
        }

        public async Task<UserDTO> LoginUser(UserDTO user)
        {
            UserDTO userDetails = null;
            bool s = false;
            var userData = await _userRepo.Get(user.UserId);
            var hmac = new HMACSHA512(userData.PasswordKey);
            if (userData != null)
            {
                var password = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < password.Length; i++)
                {
                    if (password[i] != userData.PasswordHash[i])
                    {
                        return null;
                    }
                }
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

        public async Task<UserDTO> UpdateUserPassword(UserDTO user)
        {

            User userData = await _userRepo.Get(user.UserId);
            if (userData != null)
            {
                var hmac = new HMACSHA512();

                userData.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                userData.PasswordKey = hmac.Key;
                var updateduser = await _userRepo.Update(userData);
                if (updateduser != null)
                {
                    UserDTO userResult = new UserDTO();
                    userResult.UserId = userData.UserId;
                    userResult.Role = userData.Role;
                    return userResult;

                }
            }

            return null;
        }
    }
}
