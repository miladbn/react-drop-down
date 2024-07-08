import { useRef, useState } from "react";
import Icons from "./Icons";

interface IconsProps {
  Close: React.FC;
  Search: React.FC;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const tags: string[] = [
    "Tutorial",
    "HowTo",
    "DIY",
    "Review",
    "Tech",
    "Gaming",
    "Travel",
    "Fitness",
    "Cooking",
    "Vlog",
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
    <div className="bg-[#eef1f8] h-screen grid place-items-center">
      <div className="relative w-80 h-96 text-sm">
        {selected.length > 0 && (
          <div className="bg-white w-80 relative text-xs flex flex-wrap gap-1 p-2 mb-2">
            {selected.map((tag) => (
              <div
                key={tag}
                className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500 flex items-center gap-2"
              >
                {tag}
                <div
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setSelected(selected.filter((i) => i !== tag))}
                >
                  <Icons.Close />
                </div>
              </div>
            ))}
            <div className="w-full text-right">
              <span
                className="text-gray-400 cursor-pointer"
                onClick={() => {
                  setSelected([]);
                  inputRef.current?.focus();
                }}
              >
                Clear all
              </span>
            </div>
          </div>
        )}
        <div className="card flex items-center justify-between p-3 w-80 gap-2.5">
          <Icons.Search />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.trimStart())}
            placeholder="Search or Create tags"
            className="bg-transparent text-sm flex-1 caret-rose-600"
            onFocus={() => setMenuOpen(true)}
            onBlur={() => setMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisable) {
                setSelected((prev) => [...prev, query]);
                setQuery("");
                setMenuOpen(true);
              }
            }}
          />
          <button
            className="text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
            disabled={isDisable}
            onClick={() => {
              if (isDisable) return;
              setSelected((prev) => [...prev, query]);
              setQuery("");
              inputRef.current?.focus();
              setMenuOpen(true);
            }}
          >
            + Add
          </button>
        </div>

        {menuOpen && (
          <div className="card absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
            <ul className="w-full">
              {filteredTags.length > 0 ? (
                filteredTags.map((tag) => (
                  <li
                    key={tag}
                    className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setMenuOpen(true);
                      setSelected((prev) => [...prev, tag]);
                      setQuery("");
                    }}
                  >
                    {tag}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No options available</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>

    //     <div className="container">
    //   <div className="relative w-80 h-96 text-sm">
    //     {selected.length > 0 && (
    //       <div className="tag-container">
    //         {selected.map((tag) => (
    //           <div key={tag} className="tag">
    //             {tag}
    //             <div
    //               onMouseDown={(e) => e.preventDefault()}
    //               onClick={() => setSelected(selected.filter((i) => i !== tag))}
    //             >
    //               <Icons.Close />
    //             </div>
    //           </div>
    //         ))}
    //         <div className="clear" onClick={() => { setSelected([]); inputRef.current?.focus(); }}>
    //           Clear all
    //         </div>
    //       </div>
    //     )}
    //     <div className="card">
    //       <Icons.Search />
    //       <input
    //         ref={inputRef}
    //         type="text"
    //         value={query}
    //         onChange={(e) => setQuery(e.target.value.trimStart())}
    //         placeholder="Search or Create tags"
    //         className="input"
    //         onFocus={() => setMenuOpen(true)}
    //         onBlur={() => setMenuOpen(false)}
    //         onKeyDown={(e) => {
    //           if (e.key === "Enter" && !isDisable) {
    //             setSelected((prev) => [...prev, query]);
    //             setQuery("");
    //             setMenuOpen(true);
    //           }
    //         }}
    //       />
    //       <button
    //         className="button"
    //         disabled={isDisable}
    //         onClick={() => {
    //           if (isDisable) return;
    //           setSelected((prev) => [...prev, query]);
    //           setQuery("");
    //           inputRef.current?.focus();
    //           setMenuOpen(true);
    //         }}
    //       >
    //         + Add
    //       </button>
    //     </div>
    //     {menuOpen && (
    //       <div className="menu">
    //         <ul className="w-full">
    //           {filteredTags.length > 0 ? (
    //             filteredTags.map((tag) => (
    //               <li
    //                 key={tag}
    //                 className="menu-item"
    //                 onMouseDown={(e) => e.preventDefault()}
    //                 onClick={() => {
    //                   setMenuOpen(true);
    //                   setSelected((prev) => [...prev, tag]);
    //                   setQuery("");
    //                 }}
    //               >
    //                 {tag}
    //               </li>
    //             ))
    //           ) : (
    //             <li className="no-options">No options available</li>
    //           )}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default App;
