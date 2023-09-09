import AddTodo from "../components/parts/addTodo";
import TodoGridContainer from "../components/parts/todoGridContainer";
type Props = {};

function Home({}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#12181A",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <AddTodo />
      <TodoGridContainer />
    </div>
  );
}

export default Home;
