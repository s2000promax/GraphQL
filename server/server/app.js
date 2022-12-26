require('dotenv').config();
const PORT = process.env.PORT || process.env.USER_PORT;
const  express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const chalk = require('chalk');

const mongoose = require('mongoose');
const dbName = process.env.USER_DBNAME;
const dbUser = process.env.USER_DBUSER;
const password = process.env.USER_DBPASS;

const db = `mongodb+srv://${dbUser}:${password}@cluster0.3ltupjm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false)
  .connect(db)
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

const app = express();

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT,(error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${PORT}`));
});
