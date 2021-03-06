import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // only class has state
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input 
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;