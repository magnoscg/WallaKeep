import React from "react";
import './SaleItem.css'
import {HOST} from "../../services/Util";

// ESTE FICHERO NO HAY QUE TOCARLO
//cambio los nombres a ingles como lo tengo en mi nodepop

export default class SaleItem extends React.Component {
    render() {
        return (
            <div className={`sale-item`}>
                <div className="row">
                    <div className="col-5">
                        <b>Nombre</b>
                        <br/>
                        {this.props.item.name}

                        <br/>

                        <b>Precio</b>
                        <br/>
                        {this.props.item.price} €

                        <br/>

                        <b>Tags</b>
                        <br/>
                        {this.props.item.tags.join(", ")}
                    </div>
                    <div className="col-7 text-right">
                        <img className={`img-thumbnail item-image`} src={`${HOST}/${this.props.item.photo}`} alt={this.props.item.name}/>
                    </div>
                </div>
            </div>
        );
    }
}
