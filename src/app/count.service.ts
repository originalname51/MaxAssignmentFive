export class CountService {

  count = 0;

  resetCount() {
   this.count = 0;
  }

  incrementCount() {
    this.count = this.count + 1;
    console.log('count incremented, count currently at: ' + this.count);
  }

}
