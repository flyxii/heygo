// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";

global.renderWithRouter = (component, route) => {
  const history = createMemoryHistory();

  if (route) {
    history.push(route);
  }

  return {
    ...render(<Router history={history}>{component()}</Router>),
    history,
  };
};
