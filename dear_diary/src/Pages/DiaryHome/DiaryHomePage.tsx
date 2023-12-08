import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import SearchBar from "./SearchBar/SearchBar";

function DiaryHomePage() {
  return (
    <div
    style={{
      width: "100%",
    }}
    >
      <HeaderComponent/>
      <SearchBar/>
      <ProfileComponent/>
    </div>
      
  );
}

export default DiaryHomePage;
