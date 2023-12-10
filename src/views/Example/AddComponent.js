import React from "react";

//component con dùng để tái sử dụng
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleOnChangeTitleJob = (event) => {
        this.setState({title: event.target.value})
    }
    handleOnChangeSalary = (event) => {
        this.setState({salary: event.target.value})
    }
    handleSubmit = (event) => {
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        event.preventDefault();
        console.log('Data: ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fName">Job's title:</label><br/>
                <input type="text"
                       value={this.state.title}
                       onChange={(event) => this.handleOnChangeTitleJob(event)}/><br/>
                <label htmlFor="lName">Salary:</label><br/>
                <input type="text"
                       value={this.state.salary}
                       onChange={(event) => this.handleOnChangeSalary(event)}/><br/>
                <input type="submit" value="submit"
                       onClick={(event) => this.handleSubmit(event)}/>
            </form>
        )
    }

}

export default AddComponent;