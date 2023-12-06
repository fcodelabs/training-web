import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import SearchBar from "./SearchBar/SearchBar";

function DiaryHomePage() {
  return (
    <LayoutBackground>
      <HeaderComponent />
      <ProfileComponent />
      <SearchBar />
    </LayoutBackground>    
  );
}

export default DiaryHomePage;
