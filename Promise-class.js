class Commnitment {
  static pending = "pending";
  static fullfilled = "fulllfilled";
  static rejected = "rejected";
  constructor(fn) {
    this.status = Commnitment.pending; //set as default
    this.result = null;
    fn(this.res.bind(this), this.rej.bind(this));
  }
  res(result) {
    if (this.status === Commnitment.pending) {
      this.status = Commnitment.fullfilled;
      this.result = result;
    }
  }
  rej(result) {
    if (this.status === Commnitment.pending) {
      this.status = Commnitment.rejected;
      this.result = result;
    }
  }
}

let newCommnitment = new Commnitment((res, rej) => {
  res("success");
});
