import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";


// Smoke Test //
it('renders the landing page', () => {
  render(<Carousel />)
})

// Snapshot Test //
it('matches snapshot', function() {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})