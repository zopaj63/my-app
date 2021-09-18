export default function CoinToss() {
    const isHeads = Math.random() > 0.5;
    return (
        <span>
            The result of the coin toss is {isHeads && "heads"} {!isHeads && "tails"}!
        </span>
    );
}