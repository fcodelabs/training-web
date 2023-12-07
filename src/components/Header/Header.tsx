import Logo from "../Logo/Logo"
import "./Header.css"
import frame from './../../images/frame.png'

export default function Header() {
  return (
    <div className="header-container">
        <Logo/>
        <div className="profile">
            <img src={frame} alt="" className="frame"/>
            <div className="name">William</div>
        </div>
    </div>
  )
}
