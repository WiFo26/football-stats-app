import { MatchData } from "../models/MatchReader";
import { MatchResult } from "../models/MatchResult";
import { Analyzer } from "../models/Summary";

export class WonMatchesAnalyzer implements Analyzer{
    constructor(private teamName: string){}
    analize(matches: MatchData[]): string {
        let matchesWon = 0;
        for (const match of matches) {
            const homeWon = match[1] === this.teamName && match[5] === MatchResult.HomeWin
            const awayWon = match[2] === this.teamName && match[5] === MatchResult.AwayWin
            if ( homeWon || awayWon){
                matchesWon++
            }
        }
        return `Team ${this.teamName} has won ${matchesWon} matches.`
    }
}