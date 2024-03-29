import React from "react";
import './SaleItemFullScreen.css'
import SaleService from "../../services/SaleService";
import {HOST} from "../../services/Util";
import BackButton from "../back-button/BackButton";

const service = new SaleService();

// En este componente se obtiene la ID como parametro y se obtiene el detalle de un item. Ver la línea 48 de Home.js para más información.
// Este componente no hay que tocarlo
export default class SaleItemFullScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {}
        };

        // This ISN'T the way to get a individual item
        // The backend MUST HAVE ANE ENDPOINT TO GET SOME EXTRA DETAILS
        // of one sale
        // DON'T DO IT in real application, this is only educational purpose

        /*TEngo que cambiar esto para que corresponda a mi nodepop*/
        service.getSales({}).then((res) => {
            const items = res.results;

            let item = items.find((item) => item._id === this.props.match.params.id);

            if (!item) {
                this.props.history.goBack();
            }

            this.setState({
                item
            })
        });

    }

    render() {
        return (
            <div className={`container sale-desc`}>
                <BackButton/>
                <div className="text-center">
                    <img className={`item-image`} src={`${HOST}/${this.state.item.photo}`} alt={this.state.item.name}/>
                    <h3>Se {this.state.item.sale ? "vende" : "vendido"} "{this.state.item.name}" por {this.state.item.price} euros.</h3>
                </div>
            </div>
        );
    }
}
