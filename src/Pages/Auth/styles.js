
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  textField:{
      [`& fieldset`]:{
          borderRadius:20
      }
  },
  button:{
      marginTop:'30px',
  }
}));
