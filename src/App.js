import React from 'react';
import './App.css';
import EmojiResults from './components/EmojiResults';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearch: undefined
    }
  }

  updateUserSearch = (state) => {
    this.setState({
      userSearch: state,
    })
  }

  render() {
    return (
      <div className={'flexbox App-header'}>
        <Header />
        <SearchInput 
          updateUserSearch={this.updateUserSearch}
        />
        <EmojiResults 
          userSearch={this.state.userSearch}
        /> {/* This uses Emoji Row */}
      </div>
    );
  }
}

export default App;
