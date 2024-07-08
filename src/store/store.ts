import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type State = {
  query: string;
  selected: string[];
  menuOpen: boolean;
};
export type Action = {
  setQuery: (query: string) => void;
  setSelected: (items: string[]) => void;
  setMenuOpen: (value: boolean) => void;
};
export const store = create<State & Action>()(devtools((set) => ({})));
