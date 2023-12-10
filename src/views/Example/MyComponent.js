import React from 'react';
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 'job1', title: 'developers', salary: '500$'},
            {id: 'job2', title: 'testers', salary: '400$'},
            {id: 'job3', title: 'manager', salary: '1000$'}
        ]
    }

    //tạo funtion
    addNewJob = (job) => {
        console.log('check job: ' + job)
        this.setState({
            // (...) là tạo ra bản sao của mãng arrJobs (3 dấu chấm là toán tử copy)
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    //tạo hàm xóa truyền cho con
    deleteAJob = (job) => {
        //lấy tất cả phần tử trong mãng
        let currenJobs = this.state.arrJobs;
        /**dùng filter để lọc tất cả phần tử có id khác với id đc truyền vào
         (nghĩa là loại bỏ id trùng với id đc truyển vào)
         sau đó gán ngược lại cho currenJobs, rồi cập nhật lại state */
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    /*
    JSX => return block
    fragment
     */

    //re-rebder
    render() {
        return (<>
            <AddComponent
                addNewJob={this.addNewJob}/>
            <ChildComponent
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
            />
        </>)
    }
}

export default MyComponent;