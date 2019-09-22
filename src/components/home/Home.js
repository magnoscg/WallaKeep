import React from "react";
import './Home.css';
import Navbar from "../navbar/Navbar";
import SaleSearch from "../sale-search/SaleSearch";
import ContactUs from "../contact-us/ContactUs";
import {Route} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado
    }

    render() {
        return <div>
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-5 logo-text">
                                <h1>Welcome to <b>WallaKeep</b></h1>
                                <h6><i>The place where you can keep everything.</i></h6>
                            </div>
                            <div className="col-5 pr-5">
                                <div className="row">
                                    <div className="container-logo col-8">
                                        <div className="logo-bgr">
                                            <h1><b>WK</b></h1>
                                        </div>
                                    </div>
                                    <div className="logo-end-cover col-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navbar/>
                {/*1. Aquí se añadiría el error boundary para que si la aplicación sufre un fallo se controle y se muestre un mensaje*/}
                <Route exact path="/home/" component={() => (<div className="container home">
                    <i>What are you looking for? A car? A bicycle? then...</i>
                    <h2>This is your place!</h2>
                </div>)}/>
                <Route exact path={`${this.props.match.path}/search`} component={SaleSearch}/>
                {/*1. Crear la ruta correspondiente a el componente SaleItemFullScreen, para más información ver el componente.*/}
                <Route exact path={`${this.props.match.path}/contact-us`} component={ContactUs}/>

            </div>
        </div>
    }
}
