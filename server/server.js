const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.router');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/user', userRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, () => {
    console.log('Listening on port: ', port);
});
