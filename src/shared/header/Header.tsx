import logo from '../../../public/logo.svg'
import './header.scss'

export const Header = () => {
  return (
    <header className="header">

      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
        <span>Admin Dashboard</span>
      </div>

      {/* nav links */}
      <div className="icons">
        <img src="/public/search.svg" alt="" className="icon" />
        <img src="/public/app.svg" alt="" className="icon" />
        <img src="/public/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/public/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>Jane</span>
        </div>
        <img src="/public/settings.svg" alt="" className="icon" />

      </div>

    </header>
  )
}
