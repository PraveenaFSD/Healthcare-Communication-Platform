﻿using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IPatientService
    {
        public Task<UserDTO> AddPatient(PatientDTO item);

    }
}
