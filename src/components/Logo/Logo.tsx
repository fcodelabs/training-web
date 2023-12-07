import logo from './../../images/logo.png'
import "./Logo.css"

export default function Logo() {
  return (
    <div className="header">
        <img src={logo} alt="" className="logo"/>
        <div className="header-title">Dear Diary</div>
    </div>
  )
}
