import fs from 'fs'
import { MatchResult } from './MatchResult';
import { parseStringToDate } from './utils';

type MatchData = [Date,string,string,number,number,MatchResult,string]
export class CsvFileReader {

  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void{
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((record: string): string[] => record.split(','))
      .map((record: string[]): MatchData => {
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
