import TextField from '@mui/material/TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'; 
import { useState, useEffect } from 'react';
import { searchCards } from '../../redux/diarycard/diaryCardSlice';
import { useAppSelector } from '../../redux/hooks';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%`


const SearchInput = styled(TextField)`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px 0px rgba(50, 50, 50, 0.205);
  transition: all 0.3s ease-in-out;
  
  @media screen and (max-width: 1000px){
    width: 95% !important;
  }`  


type Card = {
  id: string;
  title: string;
  body: string;
}

type PrimarySearchAppBarProps =  {
  setFilteredList: (filtered: Card[]) => void;
}

const PrimarySearchAppBar = ({setFilteredList}: PrimarySearchAppBarProps ) => {
  const [search, setSearch] = useState("");
  const cards = useAppSelector((state) => state.diaryCard.cards);

  useEffect(() => {
    const filtered = searchCards(search, cards);
    setFilteredList(filtered);
  }, [search, cards, setFilteredList]);

  return (
    <SearchBarWrapper>
      <SearchInput
        className="search-input"
        id="outlined-basic"
        placeholder='Search'
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white' },
          startAdornment: (
            <SearchIcon sx={{ marginRight: '8px', color: 'gray' }} />
          ),
        }}
      />
    </SearchBarWrapper>
  );
};

export default PrimarySearchAppBar;