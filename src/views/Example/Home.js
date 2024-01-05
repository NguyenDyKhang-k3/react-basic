import React from "react";
import Color from "../HOC/Color";
import logo from '../../images/PoPo.png';
import {connect} from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        console.log('run create')
        this.props.addUserRedux()
    }

    render() {
        console.log('>> check prop: ' + this.props)
        const listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage with Eric & Hoi Dan IT
                </div>
                <div>
                    <img src={logo} style={{width: '200px', height: '200px', marginTop: '20px'}}/>
                </div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        }
                    )
                }
                <button onClick={() => this.handleCreateUser()}>Add New</button>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER', payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
