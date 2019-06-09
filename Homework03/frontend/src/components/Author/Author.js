import React from 'react'
import {DropdownItem} from 'reactstrap'

class Author extends React.Component{
    change = (data) => {
        this.props.change(data.id, data.name)
    }
    render () {
        return (
            <DropdownItem key={this.props.data.id} onClick={() => this.change(this.props.data)}>{this.props.data.name}</DropdownItem>
        )
    }
}

export default Author
