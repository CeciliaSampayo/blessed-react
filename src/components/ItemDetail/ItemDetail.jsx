import ItemCount from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContex";


const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    const onAdd = (contador) => {
        addItem(item,contador)
    }
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="img-fluid row"/>
            </div>
            <div className="col-md-8">
                <h5 className="card-title"> {item.nombre}</h5>
                <p className="card-text">Modelo: {item.modelo}</p>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat(`de-DE`).format(item.precio)}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <ItemCount stock= {item.stock} onAdd={onAdd}/>
               <button className="btn btn-secondary">Finalizar compra</button>

            </div>
        </div>
    );
}

export default ItemDetail;
