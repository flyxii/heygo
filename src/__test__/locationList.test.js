import * as React from "react";
import { render } from "@testing-library/react";
import LocationList from "components/LocationList";
import { useLocations } from "hooks/useLocations";

const mockedUseLocations = useLocations; 
jest.mock("hooks/useLocations");

describe("<LocationList />", () => {
  beforeEach(() => {
    mockedUseLocations.mockImplementation(() => ({
      isLoading: true,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    const { getByTestId, asFragment } = render(<LocationList />);

    const inputField = getByTestId("input-field");
    const loading = getByTestId("loading");

    expect(inputField).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Display error message correctly", () => {
    mockedUseLocations.mockImplementation(() => ({
      isLoading: false,
      error: true,
    }));

    const { getByTestId, asFragment } = render(<LocationList />);

    const error = getByTestId("error");

    expect(error).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Display error message when no data return", () => {
    const mockData = [];
    mockedUseLocations.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const { getByTestId, asFragment } = render(<LocationList />);

    const error = getByTestId("message-no-data");

    expect(error).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Displays data correctly", () => {
    const mockData = [{
      name: "mockName",
      id: 1234,
    }];
    mockedUseLocations.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const { getByText, asFragment } = render(<LocationList />);

    const location = getByText("mockName");

    expect(location).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
