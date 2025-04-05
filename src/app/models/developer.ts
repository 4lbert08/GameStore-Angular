export interface IDeveloper {
  id: string;
  name: string;
  image: string;
  work: string;
  gmail: string;
}

export class Developer {
  id!: string;
  name!: string;
  image!: string;
  work!: string;
  gmail!: string;
}
