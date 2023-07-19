import React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    return (
    <div className="divCarrito">
        <p className="pCarrito">5</p>
        <ShoppingCartIcon className="carritoLogo" color="action" sx={{ fontSize: 100 }} />
    </div>

    )
}

export default CartWidget


