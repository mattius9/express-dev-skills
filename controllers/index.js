function getTitle(req,res){
    res.render('index', { title: 'Developer Skills' })
}

module.exports = {
    getTitle
}