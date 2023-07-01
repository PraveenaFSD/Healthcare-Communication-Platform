using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Services
{
    public class UserRepo : IRepo<int, User>
    {
        private readonly Context _context;
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(Context context, ILogger<UserRepo> logger) {
            _context = context;
            _logger= logger;
        }
        public Task<User?> Add(User item)
        {
            throw new NotImplementedException();
        }

        public Task<User?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public async Task<User?> Get(int key)
        {
            try
            {
                User user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == key);
                return user;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public Task<ICollection<User>?> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<User?> Update(User item)
        {
            User user = await Get(item.UserId);
            if(user!=null)
            {
                user.PasswordKey= item.PasswordKey;
                user.PasswordHash= item.PasswordHash;
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }
    }
}
