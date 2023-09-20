
const getHomeController = (req, res) => {
    res.send('hello world new!!');
}

const getHello = (req, res) => {
    res.render('sample')
}
module.exports = {
    getHomeController, getHello
}