export default function CoinToss() {
    const isHeads = Math.random() > 0.5;
    return (
        <span>
            The result of the coin toss is <span style={{ color: "lightGreen" }}></span>{isHeads && <span style={{ color: "lightGreen" }}>"heads"</span>} {!isHeads && <span style={{ color: "lightGreen" }}>"tails"</span>}!
        </span>
    );
}