import './card.css'

interface CardProps{
    nome:String
    marca:String
    cor:String
}

export function Card({nome,marca,cor}: CardProps){
    return(
    <div className="card">
        <img/>
        <h2></h2>
        <p></p>

    </div>)
}
