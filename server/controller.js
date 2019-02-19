
module.exports = {
    getAllInventory: (req, res) => {
        const db = req.app.get('db')
        
        db.get_inventory().then(resp => {
            res.status(200).send(resp)
        })
    },
    createProduct: (req, res) =>{
        const db = req.app.get('db');
        const { product_name, price, imgurl } = req.body;

        db.create_product([product_name, price, imgurl]).then(resp => {
            res.status(200).send(resp);
        })
    }
}