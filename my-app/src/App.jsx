import StatusBadge from "./compontents/statusBadge" 
// import './style.css'

function App() {
  return (
    <>
    <StatusBadge status="success" className="green" />
    <StatusBadge status="pending" className="yellow" />
    <StatusBadge status="error" className="red"/> 
    </>
  )
}

export default App



  