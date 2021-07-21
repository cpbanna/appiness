import React, { Component } from 'react'


export default class Record extends Component {
    render() {
        return (
            <div>
                <table className='tbl'>
                    <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.age}</td>
                        <td>{this.props.gender}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.phone}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
