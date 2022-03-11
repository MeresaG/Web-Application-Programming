/* 
* @author Meresa G
* @since 2022-3-10
*/

"use strict";
export class Patient {
   
    #patientId = null;
    #fName = null;
    #mName = null;
    #lName =null;
    #dateOfBirth = null;
    #department = null;
    #outPatient = null;

    constructor(pId, fName, mName, lName, dateOfbirth, department, outPatient) {
        this.#patientId = pId;
        this.#fName = fName;
        this.#mName = mName;
        this.#lName = lName;
        this.#dateOfBirth = dateOfbirth;
        this.#department = department;
        this.#outPatient = outPatient;
    }

    getPatientId() { return this.#patientId;}
    getfName() { return this.#fName;}
    getmName() { return this.#mName; }
    getlName() { return this.#lName;}
    getDateOfBirth() { return this.#dateOfBirth; }
    getDepartment() { return this.#department; }
    getOutPatient() {return this.#outPatient; }

    setPatientId(value) { this.#patientId = value; }
    setfName(value) { this.#fName = value;  }
    setmName(value) {this.#mName = value; }
    setlName(value) {this.#lName = value ;}
    setDateOfBirth(value) { this.#dateOfBirth = value; }
    setDepartment(value) {this.#department = value ;}
    setOutPatient(value) {this.#outPatient = value; }

    toString() {
        return `{PatientId: ${this.#patientId}, FirstName: ${this.#fName}, MiddleName: ${this.#mName}, LastName: ${this.#lName}, Department: ${this.#department}, DateOfBirth: ${this.#dateOfBirth}, OutPatient: ${this.#outPatient}}`;
    }

}