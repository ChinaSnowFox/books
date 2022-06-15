var mongoose = require('mongoose');

function ID (id) {
    const ObjectId = mongoose.Types.ObjectId;
    if (id) {
        return new ObjectId(id)
    }
    return new ObjectId()
}

module.exports = ID
