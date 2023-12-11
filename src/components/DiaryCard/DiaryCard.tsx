import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DiaryCard() {
  return (
    <div>
      <Card sx={{ width: '271px', height: '170px' }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 18, fontWeight: 500, color: "#4B465C", marginBottom: '6px' }}
          >
            Card Title
          </Typography>
          <Typography
            sx={{ fontSize: 15, fontWeight: 400, color: "#4B465C", marginBottom: '16px' }}
          >
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Typography>
          <Button  sx={{ fontSize: 15, fontWeight: 600, color: "#0092DD" }} size="small">Show More</Button>
        </CardContent>
      </Card>
    </div>
  );
}
