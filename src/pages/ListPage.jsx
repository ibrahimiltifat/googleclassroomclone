import { Grid } from "@mui/material";
import List from "../components/List";

function App() {
  return (
    <Grid container item xs={12} justifyContent="center">
      <Grid item xs={10}>
        <List title="Project1" date="no due date" />
      </Grid>
      <Grid item xs={10}>
        <List title="Project1" date="Date Oct 21. 12.26PM" />
      </Grid>
      <Grid item xs={10}>
        <List title="Project1" date="Date Oct 21. 12.26PM" />
      </Grid>
      <Grid item xs={10}>
        <List title="Project1" date="Date Oct 21. 12.26PM" />
      </Grid>
    </Grid>
  );
}

export default App;
