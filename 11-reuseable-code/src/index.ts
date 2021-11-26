import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTarget/HtmlReport';




const matchReader 
=  MatchReader.fromCsv ('football.csv');

matchReader.load();

const summary =  Summary
.winsAnalysisWithHtmlReport ('Man United')


summary.buildAndPrintReport
(matchReader.matches);



