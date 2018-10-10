import {Specialty} from "./Specialty";

export class Advisor {
  id: number;
  firstName: string;
  lastName: string;
  specialties: Array<Specialty>;
  nrOfSpecialties: number;

  constructor(id: number, firstName: string, lastName: string, specialties: Array<Specialty>, nrOfSpecialties: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialties = specialties;
    this.nrOfSpecialties = nrOfSpecialties;
  }
}
