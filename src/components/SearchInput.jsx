import React from "react";

class SearchInput extends React.Component {

    updateUserSearch = state => this.props.updateUserSearch(state); 

    updateChange = e => {
        e.preventDefault();
        this.updateUserSearch(e.target.value)
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}}>
                <input style={{width: '100%', boxSizing: 'border-box', height: '2rem', borderRadius: 8, fontSize: '2rem', padding: '2rem'}} onChange={this.updateChange} type="text" name="search" id="search"/>
                <div style={{textAlign: 'center'}}>Click on the icon below to copy!</div>
            </div>
        )
    }
}

export default SearchInput;