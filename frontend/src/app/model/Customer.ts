import {Card} from "./Card";

export class Customer {

  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  telephone: string;
  cards: Array<Card>;

  constructor(id: number, firstName: string, lastName: string, address: string, city: string, telephone: string, cards: Array<Card>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.telephone = telephone;
    this.cards = cards;
  }
}
