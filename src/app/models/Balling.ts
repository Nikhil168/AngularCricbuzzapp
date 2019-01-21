export class Balling {
  didNotBall: Boolean;


  constructor() {
    this.didNotBall = true;
  }
  startNewOver() {
    this.didNotBall = false;
  }

}
