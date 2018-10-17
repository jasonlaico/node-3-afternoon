const swag = require("./../models/swag");

module.exports = {
    search(req,res,next){
        let category = req.query.category;
        if(category){
            let filteredSwag = swag.filter(swag=>swag.category = category);
            res.status(200).json(filteredSwag);
        }
        else{
            res.status(200).json(swag);
        }
    }
}