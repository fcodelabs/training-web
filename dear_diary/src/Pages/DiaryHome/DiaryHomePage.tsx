import DiaryCard from "../../Components/DiaryCard/DiaryCard";
import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import SearchBar from "./SearchBar/SearchBar";

function DiaryHomePage() {
  return (
    <LayoutBackground>
    <div

    >
      <HeaderComponent/>
      <SearchBar/>
      <ProfileComponent/>
    </div>
      </LayoutBackground>
  );
}

export default DiaryHomePage;
