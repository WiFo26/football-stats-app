import { Reporter } from "../models/Summary";

export class ConsoleReporter implements Reporter {
    report(analysis: string): void {
        console.log(analysis)
    }
}