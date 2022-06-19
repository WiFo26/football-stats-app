import { MatchReader } from "./models/MatchReader"
import { Summary } from "./models/Summary"

const reader = MatchReader.FromCSV('football.csv')
const summary = Summary.winsAnalysisAndHtmlReport('Man United')

reader.load()
summary.buildAndPrintSummary(reader.matches)
