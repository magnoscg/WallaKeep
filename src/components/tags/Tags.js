import React, {Component} from 'react';
import SaleService from "../../services/SaleService";


// ESTE FICHERO NO HAY QUE TOCARLO

const service = new SaleService();

export default class Tags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        };

        service.getTags().then((res) => {
            if (res.ok) {
                this.setState({
                    tags: res.allowedTags
                })
            }
        });
    }

    render() {
        return (
            <select name={this.props.name} onChange={this.props.onTagChange} className={this.props.class}>
                <option value="">{this.props.firstOptionName}</option>
                {this.state.tags.map((tag, index) => <option key={`${tag}-${index}`} value={tag}>{tag}</option>)}
            </select>
        );
    }
}

Tags.defaultProps = {
    name: "tag",
    onTagChange: () => {
    },
    class: "form-control col-2 ml-4",
    firstOptionName: "Filter by tag"
};
