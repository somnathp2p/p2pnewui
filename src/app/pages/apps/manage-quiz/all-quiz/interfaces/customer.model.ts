export class Customer {
  id: number;
  desc: string;
  topic: string;
  subtopic: string;
  category: string;
  Question: number;
  QType: string;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.desc = customer.desc;
    this.topic = customer.topic;
    this.subtopic = customer.subtopic;
    this.category = customer.category;
    this.Question = customer.Question;
    this.QType = customer.QType;
    this.labels = customer.labels;
  }

}
