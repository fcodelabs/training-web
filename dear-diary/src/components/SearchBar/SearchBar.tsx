import TextField from '@mui/material/TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"


export default function PrimarySearchAppBar() {

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <TextField
          className="search-input"
          id="outlined-basic"
          placeholder='place holder'
          variant="outlined"
          size="small"
          style={{
            width:'50%',
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
}
