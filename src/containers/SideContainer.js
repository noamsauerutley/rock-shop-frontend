import React, { Component } from 'react';
import SideBar from '../components/SideBar'

export class SideContainer extends Component {
    render() {
        return (
            <div className="three wide column">
                <SideBar filterRocks={this.props.filterRocks}/>
            </div>
        )
    }
}

export default SideContainer;
