const Paied = require('../../models/paied');

const duyetOrder = async(req, res, next) => {
    Paied.updateOne({_id: req.query.id}, {$set: {
        status: 'Đang giao',
    }})
        .then(() => res.redirect('back'))
        .catch(next);
}

module.exports = {
    duyetOrder,
}
  