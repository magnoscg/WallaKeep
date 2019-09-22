import {withRouter} from "react-router-dom";
import React from "react";
import './BackButton.css';

// ESTE FICHERO NO HAY QUE TOCARLO

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location.pathname
        };
    }

    render() {
        return (
            <span className={`nav-bar-link`} onClick={() => this.props.history.goBack()}>
                Volver
            </span>
        );
    }
}

export default withRouter(BackButton);
