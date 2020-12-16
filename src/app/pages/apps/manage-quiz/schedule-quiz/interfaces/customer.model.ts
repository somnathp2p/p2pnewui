export class Customer {
  id: number;
  date: string;
  desc: string;
  start: string;
  end: string;
  assigned: number;
  city: string;
  attemped: string;
  duration: string;
  track: string;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.date = customer.date;
    this.desc = customer.desc;
    this.start = customer.start;
    this.end = customer.end;
    this.assigned = customer.assigned;
    this.attemped = customer.attemped;
    this.duration = customer.duration;
    this.track = customer.track;
    this.labels = customer.labels;
  }

 

  set name(value) {
  }



  set address(value) {
  }
}
