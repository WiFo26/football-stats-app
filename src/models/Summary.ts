import { WonMatchesAnalyzer } from "../analyzers/WonMatchesAnalyzer";
import { ConsoleReporter } from "../reporters/ConsoleReporter";
import { HtmlReporter } from "../reporters/HtmlReporter";
import { MatchData } from "./MatchReader";

export interface Analyzer {
    analize(matches: MatchData[]): string;
}

export interface Reporter {
    report(analysis: string): void; 
}

export class Summary {

    static winsAnalysisAndHtmlReport(teamName: string): Summary {
        return new Summary(new WonMatchesAnalyzer(teamName), new HtmlReporter())
    }

    static winsAnalysisAndConsoleReport(teamName: string): Summary {
        return new Summary(new WonMatchesAnalyzer(teamName), new ConsoleReporter())
    }    

    constructor(private analyzer: Analyzer,private reporter: Reporter){}

    buildAndPrintSummary(matches: MatchData[]): void{
        this.reporter.report(this.analyzer.analize(matches))
    }
}