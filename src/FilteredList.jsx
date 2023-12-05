import React, { Component } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    console.log(event)
    this.setState({type: event});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    console.log(this.state.search)
    console.log(this.state.type)
    if (this.state.type === "all") {
      return item.name.toLowerCase().search(this.state.search) !== -1;
    } else if (this.state.search === "") {
      return item.type.search(this.state.type) !== -1;
    } else {
       if (item.name.toLowerCase().search(this.state.search) !== -1 && item.type === this.state.type)
        return item
    }
  }

  render(){
    return (
        <div className = "filter-list">
          <DropdownButton title={"Type"} onSelect={this.onFilter}>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
          </DropdownButton>
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
