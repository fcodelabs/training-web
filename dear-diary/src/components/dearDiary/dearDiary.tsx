import logo from "./logo.png"
import "./dearDiary.css"  
  
const Deardiary = () => {
    return (
        <div className="signin-page-header-background">
            <img src={logo} alt="logo" className="signin-page-logo" />
            <div className="signin-page-title">
                Dear Diary
            </div>
        </div>
        )
}

export default Deardiary;