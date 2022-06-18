import { MatchResult } from "./MatchResult";
import { parseStringToDate } from "./utils";

type MatchData = [Date,string,string,number,number,MatchResult,string]

export interface DataReader{
    read(): void;
    data: string[][];
}
export class MatchReader {

    matches: MatchData[] | null = null;

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map((record: string[]): MatchData =>{
            return [
                parseStringToDate(record[0]),
                record[1],
                record[2],
                parseInt(record[3]),
                parseInt(record[4]),
                record[5] as MatchResult,
                record[6],
            ]
        })
    }

}