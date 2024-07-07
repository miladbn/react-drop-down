import "./App.css";
import DropdownItem from "./components/drop-down-item/drop-down-item";
import Dropdown from "./components/drop-down/drop-down";

function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="App">
      <div className="content">
        <Dropdown
          buttonText="Dropdown button"
          content={
            <>
              {items.map((item, id) => (
                <DropdownItem key={id}>{`Item ${item}`}</DropdownItem>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
