const app = require('./app');
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true
}).then((con) => {
    console.log('DB connection successful')
}).catch(err => console.log(err))

const tourSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, 'A tour must have a name'],
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type : Number,
        required : [true,'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour',tourSchema);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});