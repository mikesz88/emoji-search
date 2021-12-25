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
                <input style={{height: '2rem', borderRadius: 8, fontSize: '2rem', padding: '1rem'}} onChange={this.updateChange} type="text" name="search" id="search"/>
                <div>Click on the icon below to copy!</div>
            </div>
        )
    }
}

export default SearchInput;