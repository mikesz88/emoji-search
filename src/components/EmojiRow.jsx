import React from "react";

class EmojiRow extends React.Component {
    render() {
        const { emoji } = this.props
        return (
            <div className="hover">
                <button style={{fontSize: '2rem'}} onClick={() => {navigator.clipboard.writeText(emoji.symbol)}}>{emoji.symbol} - {emoji.title}</button>
            </div>
        )
    }
}

export default EmojiRow;

