import React from "react";
import emojiList from '../assets/emojiList.json';


class Header extends React.Component {
    render() {
        const grin = emojiList.find(item => item.title === 'Grin');
        const smiley = emojiList.find(item => item.title === 'Smiley');

        return (
            <div style={{textAlign: 'center', marginTop: '2rem'}}>{grin.symbol}Emoji Search{smiley.symbol}</div>
        )
    }
}

export default Header;




