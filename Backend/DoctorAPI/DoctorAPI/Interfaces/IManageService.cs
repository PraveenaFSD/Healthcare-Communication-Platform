using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IManageService
    {
        public Task<UserDTO> LoginUser(UserDTO user);

    }
}
