import React from 'react';

class ChildComponent extends React.Component {

    //re-render
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        // khi showJons là false thì sẽ bị phủ định lại là true và ngược lại.
        this.setState({showJobs: !this.state.showJobs});
    }

    handleOnclickDelete = (job) => {
        console.log('handleOnclickDelete: ', job);
        //gọi hàm thằng cha
        this.props.deleteAJob(job);
    }

    render() {
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        return (<>
            {showJobs === false ?
                <div>
                    <button onClick={() => this.handleShowHide()}>show</button>
                </div>
                :
                showJobs &&
                <>
                    <div className="job-lists">
                        {arrJobs.map((item, index) => {
                            return (<div key={item.id}>
                                {item.title} - {item.salary}
                                <span onClick={() => this.handleOnclickDelete(item)}> x</span>
                            </div>)
                        })}
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}>hide</button>
                    </div>
                </>
            }
        </>)
    }
}

// const ChildComponent = (props) => {
//     let {name, age, address, arrJobs} = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>)
// }

export default ChildComponent;