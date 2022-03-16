/**
 * hcmcwebapp.js
 * 
 * @author Meresa G
 * @since 2022-03-10
 */
 "use strict";

import { Patient } from "./model/Patient.js";

console.log("Hello HCMC Web App");

$(document).ready( function () {

    console.log("HCMC module loaded via JQuery");
    const patientsData = [];

    $('#my-form').submit( function(event) {
        event.preventDefault();
        console.log(event.target);

        const patientId = $('#patientIdNumber').val();
        const firstName = $('#firstName').val();
        const middleName = $('#middleInitials').val();
        const lastName = $('#lastName').val();
        const birthDate = $('#dateOfBirth').val();
        const dateOfBirth = new Date(birthDate);
        const department = $('#ddlDepartment').val();
        const outPatient = $("input[name='radioIsOutPatient']:checked").val();
    

        const newPatient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, outPatient);
        patientsData.push(newPatient);
        createPatient(newPatient);
        $('#patientIdNumber').val("");
        $('#firstName').val("");
        $('#middleInitials').val("");
        $('#lastName').val("");
        $('#dateOfBirth').val("");
        $('#ddlDepartment').prop('selectedIndex',0);
        $('input[name="radioIsOutPatient"]').prop('checked', false);
        //$(this)[0].reset();

    });

    $("#chkShowOutPatients").click(function() {
       
        $('#tbodyPatientsList').empty();

        if($(this).is(":checked")){
            for(const patient of patientsData) {
                    if(patient.getOutPatient() == "Yes") {
    
                        createPatient(patient);
                    }
            }

        }

        else {

            for(const patient of patientsData) {
                createPatient(patient);
        }
        }
    }); 

    $("#chkElderlyPatients").click(function() {
        $('#tbodyPatientsList').empty();

        if($(this).is(":checked")){
            for(const patient of patientsData) {
                let today = new Date();
                let birthDate = patient.getDateOfBirth();
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if(age >= 65) {

                    createPatient(patient);
                }
            }

        }
        else {

            for(const patient of patientsData) {
                createPatient(patient);
        }
        }
    });

    function createPatient(newPatient){

        const tblPatients = document.querySelector("#tbodyPatientsList");
        const newRow = tblPatients.insertRow(-1);
        
        const newCellPatientId = newRow.insertCell(0);
        const strNewRowPatientId = document.createTextNode(`${newPatient.getPatientId()}`);
        newCellPatientId.appendChild(strNewRowPatientId);

        const newCellfName = newRow.insertCell(1);
        const strNewRowfName = document.createTextNode(`${newPatient.getfName()}`);
        newCellfName.appendChild(strNewRowfName);

        const newCellmName = newRow.insertCell(2);
        const strNewRowmName = document.createTextNode(`${newPatient.getmName()}`);
        newCellmName.appendChild(strNewRowmName);

        const newCelllName = newRow.insertCell(3);
        const strNewRowlName = document.createTextNode(`${newPatient.getlName()}`);
        newCelllName.appendChild(strNewRowlName);

        const newCellDateOfBirth = newRow.insertCell(4);
        const strNewRowDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
        newCellDateOfBirth.appendChild(strNewRowDateOfBirth);

        const newCellDepartment = newRow.insertCell(5);
        const strNewRowDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
        newCellDepartment.appendChild(strNewRowDepartment);

        const newCellOutPatient = newRow.insertCell(6);
        const strNewRowlOutPatient = document.createTextNode(`${newPatient.getOutPatient()}`);
        newCellOutPatient.appendChild(strNewRowlOutPatient);
        



        console.log("Patient Data Recorded");
    }

});

