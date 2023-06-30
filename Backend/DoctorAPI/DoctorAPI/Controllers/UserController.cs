using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using DoctorAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        private readonly IPatientService _patientService;
        private readonly IManageService _manageService;

        public UserController(IDoctorService doctorService,IPatientService patientService,IManageService manageService) { 
            _doctorService= doctorService;
            _patientService= patientService;
            _manageService= manageService;
        }
        [HttpPost("AddDoctor")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorDTO>> AddProductDetails(DoctorDTO doctorDetail)
        {
            var doctor = await _doctorService.AddDoctor(doctorDetail);
            if (doctor != null)
            {
                return Created("Docrtor", doctor);
            }
            return BadRequest(new Error(2, "Doctor Details not added "));


        }
        [HttpPost("AddPatient")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorDTO>> AddPatintDetails(PatientDTO patientDTO)
        {
            var patient = await _patientService.AddPatient(patientDTO);
            if (patient != null)
            {
                return Created("Patient", patient);
            }
            return BadRequest(new Error(2, "Patient Details not added "));

        }
        [HttpPut("Approvedisapprovedoctor")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ApproveDoctor(UpdateDoctorDTO updateDTO)
        {
            var patient = await _doctorService.ApproveDoctor(updateDTO);
            if (patient)
            {
                return Accepted("Approved Doctor Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Approve Doctor "));

        }
        [HttpGet("GetAllDoctors")]
        [ProducesResponseType(typeof(ICollection<Doctor>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Doctor>> GetAllDoctorsDetails()
        {
            ICollection<Doctor> users = await _doctorService.GetAllDoctors();
            if (users != null)
            {
                return Ok(users);
            }
            return NotFound(new Error(1, "No Doctor Details Currently"));

        }
        [HttpGet("GetAllPatients")]
        [ProducesResponseType(typeof(ICollection<Patient>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Patient>> GetAllPatinetDetails()
        {
            ICollection<Patient> users = await _patientService.GetAllDPatients();
            if (users != null)
            {
                return Ok(users);
            }
            return NotFound(new Error(1, "No Patient Details Currently"));

        }
        [HttpDelete("DeleteDoctor")]
        [ProducesResponseType(typeof(ICollection<Doctor>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteDoctorDetails(int key)
        {
            var doctor = await _doctorService.DeleteDoctor(key);
            if (doctor)
            {
                return Accepted("Deleted Doctor Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Delete Doctor Details"));

        }
        [HttpDelete("DeletePatient")]
        [ProducesResponseType(typeof(ICollection<Doctor>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeletePatient(int key)
        {
            var patient = await _patientService.DeletePatient(key);
            if (patient)
            {
                return Accepted("Deleted Patient Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Patient Doctor Details"));

        }
            [HttpPost("LoginUser")]
            [ProducesResponseType(typeof(ICollection<UserDTO>), 200)]
            [ProducesResponseType(StatusCodes.Status404NotFound)]
            public async Task<ActionResult<UserDTO>>  LoginUser(UserDTO key)
            {
                var patient = await _manageService.LoginUser(key);
                if (patient!=null)
                {
                    return Accepted("Login Successfull");
                }
                return BadRequest(new Error(2, "Login UnSuccessfull"));

            }




        }
}
