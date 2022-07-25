import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";

const mocks = []; // We'll fill this in next

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Something Went Wrong...")).toBeInTheDocument();
});