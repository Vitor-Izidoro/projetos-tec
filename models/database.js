var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Vitor:152436hp@cluster0.yn5zq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
});

module.exports = mongoose;