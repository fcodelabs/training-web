import TextField from '@mui/material/TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"
import { useState, useEffect } from 'react';
import { searchCards } from '../../redux/slices/diaryCardSlice';
import { useAppSelector } from '../../redux/store/hooks';

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
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <TextField
        className="search-input"
        id="outlined-basic"
        placeholder='place holder'
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '35%',
          boxShadow: '2px 2px 2px 0px rgba(50, 50, 50, 0.205)',
        }}
        InputProps={{
          style: { backgroundColor: 'white' },
          startAdornment: (
            <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
          ),
        }}
      />
    </div>
  );
};

export default PrimarySearchAppBar;