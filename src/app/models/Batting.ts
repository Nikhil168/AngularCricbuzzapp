export class Batting {
  private didNotBat: Boolean;
  private runs: number;
  private balls: number;
  private out: String;
  private baller: String;
  private outType: String;
  private fielder: String;

  constructor() {
    this.didNotBat = true;
  }
  StartBatting() {
    this.didNotBat = false;
    this.balls = 0;
    this.runs = 0;
    this.out = 'Not Out';

  }
  PlayDotBall() {
    this.balls++;
  }
  PlaySingle() {
    this.runs++;
    this.balls++;
  }
  playDouble() {
    this.runs += 2;
    this.balls++;

  }
  setOut(outType: String, fielder: String, baller: String) {

  }

 

}
