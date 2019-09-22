import React from "react";
import './SaleItem.css'
import {HOST} from "../../services/Util";

// ESTE FICHERO NO HAY QUE TOCARLO

export default class SaleItem extends React.Component {
    render() {
        return (
            <div className={`sale-item`}>
                <div className="row">
                    <div className="col-5">
                        <b>Nombre</b>
                        <br/>
                        {this.props.item.nombre}

                        <br/>

                        <b>Precio</b>
                        <br/>
                        {this.props.item.precio} €

                        <br/>

                        <b>Tags</b>
                        <br/>
                        {this.props.item.tags.join(", ")}
                    </div>
                    <div className="col-7 text-right">
                        <img className={`img-thumbnail item-image`} src={`${HOST}${this.props.item.foto}`} alt={this.props.item.nombre}/>
                    </div>
                </div>
            </div>
        );
    }
}
