import { MatchReader } from "./MatchReader"

const reader = new MatchReader('football.csv')
reader.read()
const data = reader.data

console.log(data)
