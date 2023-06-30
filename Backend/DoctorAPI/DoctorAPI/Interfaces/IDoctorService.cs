using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IDoctorService
    {
        public Task<UserDTO> AddDoctor(DoctorDTO item);

    }
}
