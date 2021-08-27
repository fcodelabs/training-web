import DiaryCard from "./SuperDiaryCard";

export default interface DiaryState{
    diaryCardsLoading:boolean,
    diaryCardPostLoading:boolean
    diaryData:DiaryCard[]
}