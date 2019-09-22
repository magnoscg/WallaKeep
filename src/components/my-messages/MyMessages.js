import React, {Component} from 'react';

export default class MyMessages extends Component {
    render() {
        let messages = this.context;

        if (!messages) messages = [];

        return (
            <div>
                <h4 className={`ml-2 mb-4`}>Your messages</h4>
                <table style={{width: "100%"}}>
                    <tbody>
                    <tr>
                        <th>
                            Subject
                        </th>
                        <th>
                            Message
                        </th>
                    </tr>
                    {/*4. Mostrar los mensajes en la tabla a través de una función map*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

// 4. Añadir el contextType para que así el componente pueda usar el contexto (MyMessages.contextType...)
