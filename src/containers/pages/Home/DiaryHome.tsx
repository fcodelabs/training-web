import "./DiaryHome.css";
import CustomizedButton from "../../../components/Button/CustomizedButton";
import Header from "../../../components/Header/Header";
import IconInput from "../../../components/Input/IconInput";

import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="title">Home</div>
      <div className="wrapper">
        <IconInput label="Placeholder" icon={<SearchIcon/>} />
        <CustomizedButton
            label="Submit New"
            onClick={()=>{}}            
          />
      </div>
    </div>
  );
}
