import './index.css'

const Card = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="main-card">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button type="button" onClick={onDelete} id="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default Card
