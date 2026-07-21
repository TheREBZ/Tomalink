

const Card = ({stat, price, details}) => {
  return (
    <div>
        <div className="card-content">
        <p>{stat}</p>
        <h1>{price}</h1>
        <p>{details}</p>
        </div>
    </div>
  )
}

export default Card