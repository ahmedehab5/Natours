const app = require('./app');

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true
}).then((con) => {
    console.log('DB connection successful')
}).catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});