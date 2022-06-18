import fs from 'fs'
export abstract class CsvFileReader<T> {

  data: T[] = [];

  constructor(public filename: string) {}
  
  abstract mapRecord(record: string[]): T;

  read(): void{
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((record: string): string[] => record.split(','))
      .map(this.mapRecord)
  }

}
