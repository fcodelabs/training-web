import DiaryCard from "../components/DiaryCard";
import AddCardForm from "../components/AddCardForm";

const DiaryHome = () => {
    return (
        <div className="DiaryHome">
            <AddCardForm />
            <DiaryCard />
        </div>
    );
};

export default DiaryHome;
