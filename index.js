import inquirer from 'inquirer';
import {writeLeagueDataToJson} from './utils/scrape.js';

inquirer
  .prompt([
    {
      type: 'input',
      message: "Please enter your ESPN league id (can be found in the league's url).",
      name: 'leagueId'
    }]).then((ans) => {
      let teams = writeLeagueDataToJson(ans.leagueId);
    });