export default function GreetingCard({firstName}) {
   // const { firstName } = props  instead of passing props in parameter you can just use your curely brackets
   // {} in your parameter and add your parameters in ({})//
    return(
        <div className="GreetingCard">
            <h3>Hello {firstName}!</h3>
        </div>
    )
}