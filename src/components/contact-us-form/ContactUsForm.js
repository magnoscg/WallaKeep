import React from "react";
import "./ContactUsForm.css";
import { currentUser , checkIfUserHasSignIn} from "../../services/Util";

// 3. El nombre y apellidos del formulario deben inicializarse a los valores del nombre y apellidos del currentUser()

const initialState = () => {
    return {
        name: currentUser().name,
        surname: currentUser().surname,
        subject: '',
        message: ''
    }
};

export default class ContactUsForm extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado

        checkIfUserHasSignIn(this.props.history)
        


        this.state = initialState();

        // 3. Gestionar el formulario y verificar la información (onChange)
        // 3. Una vez verificada enviar a través de this.props.onSubmit

        this.handleTyping = this.handleTyping.bind(this);   
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTyping(event) {

        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        
        event.preventDefault();

        const { name, surname, subject, message } = this.state;

        if (name.trim().length <1) {
            alert("The field Name cant be empty")
            return
        }

        if(surname.trim().length <1) {
            alert("The field Surname cant be empty")
            return
        }

        if(subject.trim() === "") {
            alert("The field Subject cant be empty")
            return
        }

        if (message.trim()=== "") {
            alert("The field Message cant be empty")
            return
        }

        this.props.onSubmit(this.state)
        
    }



    render() {
        return <>
            <h4 className={`ml-2 mb-4`}>Contact with the WallaKeep team</h4>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <h5 className={`ml-2`}><b>Name</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="name" value={this.state.name} onChange={this.handleTyping}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Surname</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="surname" value={this.state.surname} onChange={this.handleTyping}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Subject</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="subject" value={this.state.subject} onChange={this.handleTyping}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Message</b></h5>
                    <textarea className={`form-control d-block contact-form-input`} value={this.state.message} name="message" cols="30" rows="10" onChange={this.handleTyping}/>
                </div>
                <div className={`ml-2`}>
                    <button type="submit" className="btn-primary btn">Save</button>
                </div>
            </form>
        </>;
    }
}
