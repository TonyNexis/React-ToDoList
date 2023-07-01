import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            isErrorName: false,
            isErrorSalary: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isErrorName: false,
            isErrorSalary: false
        })
    }

    addEmployer = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3) {
            this.setState({ isErrorName:true })
            setTimeout(() => {
                this.setState({ isErrorName:false })
            }, 1000);
        } else if (!this.state.salary) {
            this.setState({ isErrorSalary:true })
            setTimeout(() => {
                this.setState({ isErrorSalary:false })
            }, 1000);
        } else {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: '',
            })
        }
    }

    render() {
        const {name, salary, isErrorName, isErrorSalary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className={`form-control new-post-label ${isErrorName ? 'highlight-animation' : ''}`}
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className={`form-control new-post-label ${isErrorSalary ? 'highlight-animation' : ''}`}
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.addEmployer}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;