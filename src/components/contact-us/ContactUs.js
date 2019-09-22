import React from "react";
import './ContactUs.css';
import {getSavedMessages, saveMessages} from "../../services/Util";
import ContactUsForm from "../contact-us-form/ContactUsForm";
import MyMessages from "../my-messages/MyMessages";

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado

        this.state = {
            messages: getSavedMessages()
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(message) {
        const {messages} = this.state;

        messages.push(message);

        this.setState({messages}, () => {
            saveMessages(this.state.messages);
        });
    }

    render() {
        return (
            <div className={`contact-us container`}>
                <div className="row">
                    <div className="col-6">
                        <ContactUsForm onSubmit={this.onSubmit}/>
                    </div>
                    <div className="col-6 text-center">
                        {/*4. Es necesario un contexto para poder pasarle los mensajes*/}
                        <MyMessages/>
                    </div>
                </div>
            </div>
        );
    }
}
