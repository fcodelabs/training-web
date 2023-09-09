import React, { FC } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => (
  <div>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </div>
);

export default Hello;
