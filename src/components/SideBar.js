import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

export class SideBar extends Component {

    state = {}
    
    handleChange = (event, {value}) => {
        this.setState({value})
        this.props.filterRocks({value})
    }
    
    render() {
        const { value } = this.state;

        const categoryOptions = [
            {
                key: 'All',
                text: 'All',
                value: 'All',
            },
            {
                key: 'Metamorphic',
                text: 'Metamorphic',
                value: 'Metamorphic',
            },
            {
                key: 'Sedimentary',
                text: 'Sedimentary',
                value: 'Sedimentary',
            },
            {
                key: 'Special',
                text: 'Special',
                value: 'Special',
            },
            {
                key: 'Danger',
                text: 'Danger',
                value: 'Danger',
            },
            {
                key: 'Boring',
                text: 'Boring',
                value: 'Boring',
            },
            {
                key: 'Fancy',
                text: 'Fancy',
                value: 'Fancy',
            },
            {
                key: 'Igneous',
                text: 'Igneous',
                value: 'Igneous',
            }
        ]

        return (
            <Link to="/rocks">
                <Dropdown
                    placeholder='Select Category'
                    value={value}
                    fluid
                    selection
                    options={categoryOptions}
                    onChange={this.handleChange}
                />
            </Link>
        )
    }
}

export default SideBar;

