import React from 'react';

// class ChildComponent extends React.Component {
//     render() {
//         console.log('>>> Check props: ', this.props)
//
//         let {name, age, address, arrJobs} = this.props;
//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>)
//     }
// }

const ChildComponent = (props) => {
    let {name, age, address, arrJobs} = props;
    return (
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>)
}

export default ChildComponent;