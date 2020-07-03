import { get, writable } from "svelte/store";
import { randomize, nextGeneration } from "./utils";

let rows = 35;
let cols = 90;

const store = writable({
  rows,
  cols,
});

export default store;

export const active = writable(
  randomize(get(store).rows * get(store).cols),
  (set) => {
    const interval = setInterval(() => {
      set(nextGeneration({ active: get(active), ...get(store) }));
    }, 100);

    return () => clearInterval(interval);
  }
);

export const toggle = (id) => {
  const res = get(active).splice(0);
  res[id] = !res[id];
  active.set(res);
};

export const init = () => {
  active.set(randomize(get(store).rows * get(store).cols));
};
