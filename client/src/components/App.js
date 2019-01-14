// client/src/components/App.js

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import DialogCreate from './dialogs/DialogCreate';
import DialogEdit from './dialogs/DialogEdit';
import DialogDelete from './dialogs/DialogDelete';
import DialogList from './dialogs/DialogList';
import DialogShow from './dialogs/DialogShow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/show" exact component={DialogList} />
                        <Route path="/dialog/new" exact component={DialogCreate} />
                        <Route path="/dialog/edit" exact component={DialogEdit} />
                        <Route path="/dialog/delete" exact component={DialogDelete} />
                        <Route path="/dialog/show" exact component={DialogShow} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;