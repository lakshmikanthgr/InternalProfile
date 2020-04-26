using System.ComponentModel.DataAnnotations;

namespace InternalProfile.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength = 2,ErrorMessage = "Password must be 4 to 8 letters")]
        public string Password { get; set; }
    }
}