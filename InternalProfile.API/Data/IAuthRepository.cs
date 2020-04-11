using System.Threading.Tasks;
using InternalProfile.API.Models;

namespace InternalProfile.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user,string password);
         Task<User> Login(string user,string password);
         Task<bool> UserExist(string user);
    }
}