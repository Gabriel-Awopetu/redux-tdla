import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
