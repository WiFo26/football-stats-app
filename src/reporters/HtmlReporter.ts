import fs from 'fs';
import { Reporter } from "../models/Summary";
import { htmlTemplate } from '../reports/templates/htmlTemplate';

export class HtmlReporter implements Reporter{
    report(analysis: string): void {
        const data = htmlTemplate.replace('%s',analysis)
        fs.writeFileSync('./src/reports/htmlReport.html',data)
    }

}