const app = require('./app');
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(con => {
    console.log('DB connection successful')
})

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});