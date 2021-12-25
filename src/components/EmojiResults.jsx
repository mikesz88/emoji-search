import React from "react";
import emojiList from '../assets/emojiList.json';
import EmojiRow from "./EmojiRow";


class EmojiResults extends React.Component {

    searchKeywords = (keywordString, searchItem) => {
        const keywordArray = keywordString.split(" ");
        return keywordArray.some(word => word.includes(searchItem.toLowerCase())) ? true : false;
    }

    
    render() {
        const searchResults = (
            this.props.userSearch && emojiList
            .filter(item => this.searchKeywords(item.keywords, this.props.userSearch))
            .slice(0,20)
            .map((item, index) => (
                <EmojiRow
                    key={index} 
                    emoji={item}
                />
            ))) 

        return (
            <div>
                {this.props.userSearch && searchResults}
            </div>
        )
    }
}

export default EmojiResults;


/*                     <EmojiRow
                    key={index} 
                    emoji={item}
                    />
                    ) : null; */