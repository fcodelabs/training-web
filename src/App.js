import DiaryHome from "./component/DiaryHome";
import DiaryCard from "./component/DiaryCard";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

function App() {
  const classes = useStyles();
  const cards = useSelector((state) => state.cards);
  // const addCard = (card) => {
  //   const id = Math.floor(Math.random() * 1000) + 1;
  //   const newCard = { id, ...card };
  //   setCards([...cards, newCard]);
  // };

  return (
    <div className={classes.root}>
      <h1 className="h1">HOME</h1>
      <DiaryHome />
      <div className={classes.cardsList}>
        <Box
          display="flex"
          p={2}
          m={2}
          css={{ minWidth: 300 }}
          flexWrap="wrap"
          className={classes.container}
        >
          {cards.length > 0 ? (
            cards.map((card) => (
              <Box p={2} m={2}>
                <DiaryCard
                  title={card.title}
                  subtitle="Dinali"
                  description={card.description}
                />
              </Box>
            ))
          ) : (
            <Box p={2} m={2}>
              <DiaryCard
                title="Nothing to Show"
                subtitle="Nothing to Show"
                description={""}
              />
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "90%",
    minHeight: "800px",
    color: "white",
  },

  cardsList: {
    width: "100%",
    minHeight: "100px",
  },
});

export default App;
