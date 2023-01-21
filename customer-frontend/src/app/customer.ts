export type Genders = {
  male: string;
  female: string;
}

export class Customer {

  id!: number;
  firstName!: string;
  lastName!: string;
  dateOfBirth!: string;
  mobileNumber!: string ;
  addressOne!: string;
  addressTwo!: string;
  age!: number;
  gender!: 'male' | 'female';
  email!: string;

}
