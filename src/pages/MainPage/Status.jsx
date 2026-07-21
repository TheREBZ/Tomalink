import Card from "./Card"

const Status = () => {
    const status1 = {
        stat: "In storage",
        price: "2450kg",
        details: "View Details"
    }
    const status2 = {
        stat: "In Transit",
        price: "1200kg",
        details: "View Details"
    }
    const status3 = {
        stat: "Total Orders",
        price: "12",
        details: "View Details"
    }
    const status4 = {
        stat: "Total Earnings",
        price: "N 120,000",
        details: "View Details"
    }
  return (
    <div className="stats-content">
        <Card stat={status1.stat} price={status1.price} details={status1.details}/>
        <Card stat={status2.stat} price={status2.price} details={status2.details}/>
        <Card stat={status3.stat} price={status3.price} details={status3.details}/>
        <Card stat={status4.stat} price={status4.price} details={status4.details}/>
    </div>
  )
}

export default Status