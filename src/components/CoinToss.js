export default function CoinToss() {
    return <span>The result of the coin toss is {Math.random() > 0.5 ? "heads" : "tails"}.</span>;
}