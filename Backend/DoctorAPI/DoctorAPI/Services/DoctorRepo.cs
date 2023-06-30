using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Services
{
    public class DoctorRepo : IRepo<int, DoctorDTO>
    {
        private readonly Context _context;

        public DoctorRepo(Context context) {
            _context = context;
        }
        public async Task<DoctorDTO?> Add(DoctorDTO item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Doctor");
                    
                    _context.Doctors.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Doctor");
                }
                return null;
            }
        }

        public Task<DoctorDTO?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public Task<DoctorDTO?> Get(int key)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<DoctorDTO>?> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<DoctorDTO?> Update(DoctorDTO item)
        {
            throw new NotImplementedException();
        }
    }
}
