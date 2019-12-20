import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.components';

import {SearchBox} from './components/search-box/search-box.components';

class App extends Component{
constructor(){
  super();
  this.state={
    monster:[],
    SearchField:''
  }
}

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monster:users}));
}

  render() {    

    const { monster,SearchField } = this.state; 

    const FilteredMonsters = monster.filter(
      mons => mons.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    return (      
      <div className="App">
        <SearchBox placeholder={'search monsters'} handleChange={
          e => this.setState({SearchField:e.target.value})
        }/>
        <CardList monster={FilteredMonsters}/>        
      </div>
    );
  }
}

export default App;
