import { CsvFileReader } from "./CsvFileReader"

const reader = new CsvFileReader('football.csv')
reader.read()
const data = reader.data

let manUnitedWins = data.filter((element) => (element[1] === 'Man United' && element[5] === 'H') || (element[2] === 'Man United' && element[5] === 'A')).length


console.log(manUnitedWins)
