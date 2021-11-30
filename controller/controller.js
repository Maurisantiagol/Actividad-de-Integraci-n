const pool = require("../database");

const controller = {};

controller.list = async(req, res) => {
    try {
       const productos=await pool.query('SELECT * FROM producto');
        res.render('carritodecompras', {
            data: productos
    
});
    } catch (error) {
        res.redirect("/error");
    }
           
};

controller.save =async (req, res) => {
    const data = req.body;
    const customers=await pool.query(' insert into producto set ?',data);
    res.redirect("carrito");
};

controller.delete =async (req, res) => {
    const { id } = req.params;
await pool.query(' DELETE FROM producto WHERE id_pro = ?',[id]);
res.redirect("/carrito");
}

module.exports = controller;
