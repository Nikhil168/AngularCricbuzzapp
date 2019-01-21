export class Commentry {
    currentBall: number=0;
    currentOver: number=0;
    runsOnCurrentBall: any;
    descriptionForCurrentBall: string;
    constructor(currentBall: number,
        currentOver: number,
        runsOnCurrentBall: number,
        descriptionForCurrentBall: string) {
            this.currentBall=currentBall;
            this.currentOver=currentOver;
            this.runsOnCurrentBall=runsOnCurrentBall;
            this.descriptionForCurrentBall=descriptionForCurrentBall;
    }
    setCurrentBall(currentBall: number) {
        this.currentBall = currentBall;
        console.log(this.currentBall);
    }
    setCurrentOver(currentOver: number) {
        this.currentOver = currentOver;
        console.log(this.currentOver);
    }
    setRunsOnCurrentBall(runOnCurrentBall: number) {
        this.runsOnCurrentBall = runOnCurrentBall;
        console.log(this.runsOnCurrentBall);
    }
    setDescriptionForBall(description: string) {
        this.descriptionForCurrentBall = description;
        console.log(this.descriptionForCurrentBall);
    }
    getCurrentOver():number
    {
        return this.currentOver;
    }
    getCurrentBall():number
    {
        return this.currentBall;
    }
    getDescriptionForBall():string{
        return this.descriptionForCurrentBall;
    }
    getRunsOnCurrentBall()
    {
        return this.runsOnCurrentBall;
    }
    
}