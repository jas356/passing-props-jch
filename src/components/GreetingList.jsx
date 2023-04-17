import GreetingCard from "./GreetingCard"

export default function GreetingList () {
    return (
    <section className="GreetingList">
        <h2>Greeting List</h2>
        <GreetingCard firstName="David"/>
        <GreetingCard firstName="Jonathan"/>
        <GreetingCard firstName="Jasmine"/>
    </section>
    )
}