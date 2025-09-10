import { Link } from "react-router"
import { sidebar } from "../../constants"
import './Sidebar.scss'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar.map((section) => (
        <div key={section.id} className="sidebar-section">
          <h3>{section.title}</h3>
          <div className="tabs">
            {section.tabs.map((tab, idx) => (
              <Link to={tab.path} key={idx} className="tab">
                <img src={tab.icon} alt={tab.name} />
                <span>{tab.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
