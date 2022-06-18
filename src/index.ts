import { CsvFileReader } from "./CsvFileReader"

const reader = new CsvFileReader('football.csv')
reader.read()
const data = reader.data

console.log(data)
