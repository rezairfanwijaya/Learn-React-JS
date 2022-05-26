export default function WellcomeH1() {
    return (
        <h1>Welcome dari H1</h1>
    )
}

export function WelcomeH2(props) {
    console.log(props);
    return (
        <h2>{props.children}</h2>
    )
}