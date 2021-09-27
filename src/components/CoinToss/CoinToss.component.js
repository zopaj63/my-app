import PropTypes from "prop-types";

import headsimage from "./images/headsimage.png"
import tailsimage from "./images/tailsimage.png"

export default function CoinTossComponent({ isHeads, tossCoin }) {

    return (
        <span>
            The result of the coin toss is < span style={{ color: "lightGreen" }}></span > {isHeads && <span style={{ color: "lightGreen" }}>"heads"</span>} {!isHeads && <span style={{ color: "lightGreen" }}>"tails"</span>} !
            <br />
            <button onClick={tossCoin}> Toos the coin</button >
            <br />
            {isHeads && <img src={headsimage} alt="headscoin" className="coin" />}
            {!isHeads && <img src={tailsimage} alt="tailscoin" className="coin" />}

        </span >
    );
}

CoinTossComponent.propTypes = {
    isHeads: PropTypes.bool,
    tossCoin: PropTypes.func,
};