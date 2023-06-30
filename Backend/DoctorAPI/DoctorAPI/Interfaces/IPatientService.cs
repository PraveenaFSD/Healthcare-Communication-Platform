using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IPatientService
    {
        public Task<UserDTO> AddPatient(PatientDTO item);
        public Task<bool> DeletePatient(int key);

        public Task<ICollection<Patient>> GetAllDPatients();

    }
}
