import React, { Component } from 'react';
import './Table';
import './Search';
import './App.css';
import Search from './Search';
import Table from './Table';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state  = {
      list,
      searchTerm : "",
    };

    this.onDimiss = this.onDimiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDimiss(id) {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);
    this.setState({list : updatedList});
  }

  onSearchChange(event) {
    this.setState({searchTerm : event.target.value});
  }

  render() {

    const {searchTerm, list } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Filter here:
          </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDimiss={this.onDimiss}
        />
      </div>
    );
  }
}

export default App;
