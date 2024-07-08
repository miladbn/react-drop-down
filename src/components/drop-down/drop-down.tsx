import { useRef, useState } from "react";
import "./drop-down.scss";
import DropDownMeu from "./drop-down-menu";
import DropDownInput from "./drop-down-input";
import Show from "../show";
import DropDownSelect from "./drop-down-select";

const DropDown: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const tags: string[] = [
    "Education",
    "Yeaah, science",
    "Art",
    "Sport",
    "Games",
  ];

  const filteredTags = tags.filter(
    (item) =>
      item.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim()) &&
      !selected.includes(item)
  );

  const isDisable =
    !query.trim() ||
    selected.some(
      (item) =>
        item.toLocaleLowerCase().trim() === query.toLocaleLowerCase().trim()
    );

  return (
    <div className="container">
      <div className="relative ">
        <DropDownSelect
          inputRef={inputRef}
          selected={selected}
          setSelected={setSelected}
        />

        <div className="card">
          <DropDownInput
            ref={inputRef}
            query={query}
            setQuery={setQuery}
            isDisable={isDisable}
            setSelected={setSelected}
            setMenuOpen={setMenuOpen}
          />
        </div>
        <Show when={menuOpen}>
          <DropDownMeu
            filteredTags={filteredTags}
            setSelected={setSelected}
            setMenuOpen={setMenuOpen}
            setQuery={setQuery}
          />
        </Show>
      </div>
    </div>
  );
};

export default DropDown;
