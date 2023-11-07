import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import Carousel from './Carousel';

it("renders without crashing", function() {
  render(<App/>);
});

test("render photos", () => {
  render(<Carousel />)
})



