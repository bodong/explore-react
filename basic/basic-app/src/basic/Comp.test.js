import { render } from "@testing-library/react";
import Comp from "./Comp";

test("renders h1", () => {
  const { getByText } = render(<Comp />);
  const h1 = getByText(/Hello People/);
  expect(h1).toHaveTextContent("Hello People");
});
