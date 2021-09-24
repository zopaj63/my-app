export default function CoinTossComponent({ isHeads, tossCoin }) {

    return (
        <span>
            The result of the coin toss is < span style={{ color: "lightGreen" }}></span > {isHeads && <span style={{ color: "lightGreen" }}>"heads"</span>} {!isHeads && <span style={{ color: "lightGreen" }}>"tails"</span>} !
            <button onClick={tossCoin}> Toos the coin</button >
        </span >
    );
}
