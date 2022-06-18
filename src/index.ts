import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"

const reader = new MatchReader(new CsvFileReader('football.csv'))
reader.load()
const data = reader.matches

console.log(data)
