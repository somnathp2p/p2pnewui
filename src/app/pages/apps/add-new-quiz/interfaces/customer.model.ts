export class Customer {
  id: number;
  question: string;
  imageSrc: string;
  marks: string;


  constructor(customer) {
    this.id = customer.id;
    this.question = customer.question;
    this.imageSrc = customer.imageSrc;
    this.marks = customer.marks;

  }

}
