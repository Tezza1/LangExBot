// client/src/components/dialogs/DialogEdit.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle';

class DialogDelete extends Component {
       constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            description: '',
            user: '',
            text: []
        };
    }

    componentDidMount() {
        this.callApi()
    }

    callApi = async () => {
        fetch(`http://localhost:5000/dialogs/find/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    _id: data.response._id,
                    title: data.response.title,
                    description: data.response.description,
                    text: data.response.text,
                    user: data.response.user
                })
            })
            .catch(error => console.log(error));
    };

    render() {
        const ChatBubble = (text, i, className) => {
            return (
                <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
                    <span className="chat-content chip">
                        <img src={'/img/robot-icon.png'}  alt="Icon"/>
                        {text}
                    </span>
                </div>
            );
        };

        const chat = this.state.text.map((el, index) =>
            ChatBubble(el.text, index, el.user)
        );

        return (
            <div>
                <PageTitle title="Dialog Delete"/>
                <form>
                    <div className="row">
                        <div className="col s6 m3 offset-m3">
                            {/*eslint-disable-next-line*/}
                            <a className='btn white red-text waves-effect waves-red top-button'>
                                Delete
                            </a>
                        </div>
                        <div className="col s6 m3">
                            <button className='btn white red-text waves-effect waves-blue top-button'>
                                <Link to="/dialog/show" className="blue-text">Cancel</Link>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m6 s12 offset-m3">
                            <div className="row">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={this.state.description}
                                />
                            </div>
                            <div className="row">
                                <div className="col s12 red lighten-4 bb" id="chat-area">
                                {chat}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DialogDelete;
