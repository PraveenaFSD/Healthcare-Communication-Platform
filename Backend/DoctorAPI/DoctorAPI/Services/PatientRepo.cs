using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Services
{
    public class PatientRepo : IRepo<int, PatientDTO>
    {
        private readonly Context _context;

        public PatientRepo(Context context) {
            _context = context;
        }
        public async Task<PatientDTO?> Add(PatientDTO item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Patient");

                    _context.Patients.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Patient");
                }
                return null;
            }
        }

        public Task<PatientDTO?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public Task<PatientDTO?> Get(int key)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<PatientDTO>?> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<PatientDTO?> Update(PatientDTO item)
        {
            throw new NotImplementedException();
        }
    }
}
