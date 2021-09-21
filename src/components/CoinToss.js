import React from "react";

export default class CoinToss extends React.Component {
    state = {
        isHeads: Math.random() > 0.5,
    };

    tossCoin = () => {
        this.setState({ isHeads: Math.random() > 0.5 });
    };

    render() {
        const { isHeads } = this.state;


        return (
            <span>
                The result of the coin toss is < span style={{ color: "lightGreen" }}></span > {isHeads && <span style={{ color: "lightGreen" }}>"heads"</span>} {!isHeads && <span style={{ color: "lightGreen" }}>"tails"</span>} !
                <button onClick={this.tossCoin}> Toos the coin</button >
            </span >
        );
    }
}