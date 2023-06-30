import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
// import { WhoAmI } from './someTests';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Tony Nexis', salary: 600, increase: false, rise: true, id: 1},
                {name: 'Alex Monk', salary: 1200, increase: false, rise: false, id: 2},
                {name: 'John Karakey', salary: 800, increase: false, rise: false, id: 3},
                {name: 'Dan Brown', salary: 750, increase: true, rise: false, id: 4},
                {name: 'Yoko Shido', salary: 1500, increase: false, rise: false, id: 5},
                {name: 'Mala Karyka', salary: 350, increase: false, rise: false, id: 6},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addEmployer = (name, salary) => {
        const newEmployer = {
            name,
            salary,
            increase: false,
            rise: false,
            id: Date.now()
        }

        this.setState(({data}) => {
            const newArr = [...data, newEmployer];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        return (
            <div className='app' >
                {/* <WhoAmI name='John' surname='Smith' link='google.com'/> */}
                <AppInfo data={this.state.data}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm onAdd={this.addEmployer}/>
            </div>
        )
    }
}

export default App;