import "./App.css";
import DropdownItem from "./components/drop-down-item/drop-down-item";
import Dropdown from "./components/drop-down/drop-down";

function App() {
  const items = [
    {
      name: "Education",
      icon: "",
    },
    {
      name: "Yeeeah",
      icon: "",
    },
  ];
  return (
    <div className="App">
      <div className="content">
        <Dropdown
          buttonText="Dropdown button"
          content={
            <>
              {items.map((item, id) => (
                <DropdownItem key={id}>
                  <></>
                </DropdownItem>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
