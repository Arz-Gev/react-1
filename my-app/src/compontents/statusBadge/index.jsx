import './style.css'

export default function StatusBadge({status, className}){
    return <label className={className}>{status}</label>
}