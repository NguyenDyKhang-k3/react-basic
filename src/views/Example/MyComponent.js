import React from 'react';
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'job1', title: 'developers', salary: '500$'},
            {id: 'job2', title: 'testers', salary: '400$'},
            {id: 'job3', title: 'manager', salary: '1000$'}
        ]
    }

    handleOnChangeFirstName = (event) => {
        this.setState({firstName: event.target.value})
    }
    handleOnChangeLastName = (event) => {
        this.setState({lastName: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert("click me");
        console.log('Data: ', this.state);
    }


    render() {
        return (
            <>
                <form>
                    <label htmlFor="fName">First Name</label><br/>
                    <input type="text"
                           value={this.state.firstName}
                           onChange={(event) => this.handleOnChangeFirstName(event)}/><br/>
                    <label htmlFor="lName">Last Name</label><br/>
                    <input type="text"
                           value={this.state.lastName}
                           onChange={(event) => this.handleOnChangeLastName(event)}/><br/>
                    <input type="submit" value="submit"
                           onClick={(event) => this.handleSubmit(event)}/>
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'21'}
                    address={'Can Tho'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;