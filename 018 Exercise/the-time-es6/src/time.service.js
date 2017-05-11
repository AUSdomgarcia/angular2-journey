export class TimeService {

  subscribe(callback) {
    callback(new Date());
    setInterval(() => callback(new Date()), 1000);
  }

}
