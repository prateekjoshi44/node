const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://prateekjoshi44:9068@cluster0.ogqmnaa.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
    ).then(client => {
            console.log('Connected to MongoDB');
            _db = client.db()
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No Database Found!!"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
// module.exports = mongoConnect;
