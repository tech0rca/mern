import React, { Component } from 'react';
import axios from 'axios';

export default class ExercisesList extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/exercises").then((response) => {
        console.log(response.data)


        this.setState({
            exercises: response.data
        })
        console.log(this.state.exercises)
    });
}
    renderTableHeader() {
            return (
                <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            )
    }


    renderTable() {
        return this.state.exercises.map((exercise, index) => {
            const {_id, username, duration, date, description} = exercise
            return (
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{username}</td>
                    <td>{duration}</td>
                    <td>{date}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h1 id='title'>Table</h1>
                <table id='exercises'>
                    <tbody>
                    {this.renderTableHeader()}
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}