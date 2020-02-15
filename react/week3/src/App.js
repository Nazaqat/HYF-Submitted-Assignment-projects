import React from 'react';
import Header from './component/Header'
import Modal from './component/Modal'
import DisplayList from './component/DisplayList'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// I think the import path is wrong. Shouldn't it be 

// @fortawesome/<write module here>
// @fontwesome/<write module here>
// @fontwesome/<write module here>?

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', items: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelDelete = this.handelDelete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 

    var value = this.state.value;
    var newItems = this.state.items.concat(value);
    
    this.setState({value: '', items:newItems})
    
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
        item.key!==key);
        this.setState({
            items: filteredItems
          })
}


  render() {

 
  return (
    <div className="App">
      
     <Modal>
       <Header></Header>
       
       <form onSubmit={this.handleSubmit}> 
        <input type="text" placeholder="Enter activity here.." value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>

      <DisplayList
      handelDelete={this.handelDelete}
      items={this.state.items}
      
      >

      </DisplayList>
      
       
     </Modal>
    </div>
  );
}
}

export default App;
