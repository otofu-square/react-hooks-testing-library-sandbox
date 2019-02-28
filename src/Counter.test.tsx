import { renderHook, act, cleanup } from "react-hooks-testing-library";
import { useCounter } from "./Counter";

test("count state", () => {
  afterEach(cleanup);

  const { result } = renderHook(() => useCounter());

  // initial count value
  expect(result.current.count).toBe(0);

  // increment
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
  act(() => result.current.increment());
  expect(result.current.count).toBe(2);

  // decrement
  act(() => result.current.decrement());
  expect(result.current.count).toBe(1);
  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});
