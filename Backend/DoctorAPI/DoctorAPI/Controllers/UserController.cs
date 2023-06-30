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

        public UserController(IDoctorService doctorService,IPatientService patientService) { 
            _doctorService= doctorService;
            _patientService= patientService;
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

    }
}
