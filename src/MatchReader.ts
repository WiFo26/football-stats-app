import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { parseStringToDate } from "./utils";

type MatchData = [Date,string,string,number,number,MatchResult,string]

export class MatchReader extends CsvFileReader<MatchData>{
    mapRecord(record: string[]): MatchData {
        return [
            parseStringToDate(record[0]),
            record[1],
            record[2],
            parseInt(record[3]),
            parseInt(record[4]),
            record[5] as MatchResult,
            record[6],
        ]
    }

}