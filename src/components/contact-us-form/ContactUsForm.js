import React from "react";
import "./ContactUsForm.css";

// 3. El nombre y apellidos del formulario deben inicializarse a los valores del nombre y apellidos del currentUser()

const initialState = () => {
    return {
        name: '',
        surname: '',
        subject: '',
        message: ''
    }
};

export default class ContactUsForm extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado

        this.state = initialState();

        // 3. Gestionar el formulario y verificar la información (onChange)
        // 3. Una vez verificada enviar a través de this.props.onSubmit
    }


    render() {
        return <>
            <h4 className={`ml-2 mb-4`}>Contact with the WallaKeep team</h4>

            <form>
                <div>
                    <h5 className={`ml-2`}><b>Name</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="name" value={this.state.name}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Surname</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="surname" value={this.state.surname}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Subject</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="subject" value={this.state.subject}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Message</b></h5>
                    <textarea className={`form-control d-block contact-form-input`} value={this.state.message} name="message" cols="30" rows="10"/>
                </div>
                <div className={`ml-2`}>
                    <button type="submit" className="btn-primary btn">Save</button>
                </div>
            </form>
        </>;
    }
}
