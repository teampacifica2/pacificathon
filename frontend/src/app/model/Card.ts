import {Type} from "./Type";

export class Card {

  id: number;
  name: string;
  birthDate: string;
  type: Type;

  constructor(id: number, name: string, birthDate: string, type: Type) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.type = type;
  }
}

