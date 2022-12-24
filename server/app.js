require('dotenv').config();
const PORT = process.env.PORT || process.env.USER_PORT;
const  express = require('express');
const { graphqlHTTP } = require('express-graphql');
const chalk = require('chalk');

const app = express();

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT,(error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${PORT}`));
});
