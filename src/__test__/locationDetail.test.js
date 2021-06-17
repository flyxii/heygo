import * as React from "react";
import { render } from "@testing-library/react";
import { Route } from "react-router-dom";
import LocationDetail from "components/LocationDetail";
import { useLocationDetail } from "hooks/useLocationDetail";

const mockUseLocationDetail = useLocationDetail; 
jest.mock("hooks/useLocationDetail");

/*jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ environment: "dev", service: "fakeService" }),
}));*/

describe("<LocationDetail />", () => {
  beforeEach(() => {
    mockUseLocationDetail.mockImplementation(() => ({
      isLoading: true,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    const { getByTestId, asFragment } = renderWithRouter(
      () => (
        <Route path="/location/:id">
          <LocationDetail />
        </Route>
      ),
      "/location/1234"
    );

    const loading = getByTestId("loading");

    expect(loading).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Display error message correctly", () => {
    mockUseLocationDetail.mockImplementation(() => ({
      isLoading: false,
      error: true,
    }));

    const { getByTestId, asFragment } = renderWithRouter(
      () => (
        <Route path="/location/:id">
          <LocationDetail />
        </Route>
      ),
      "/location/1234"
    );

    const error = getByTestId("error");

    expect(error).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Redirect to / if no data return", () => {
    const mockData = { message: "Not found" };
    mockUseLocationDetail.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const { container } = renderWithRouter(
      () => (
        <Route path="/location/:id">
          <LocationDetail />
        </Route>
      ),
      "/location/1234"
    );

    expect(container.innerHTML).toEqual(expect.stringContaining(""));
  });

  it("Displays data correctly", () => {
    const mockData = {
        name: "mockName",
        id: 1234,
        latitude: 1234,
        longitude: 1234,
      };
    mockUseLocationDetail.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const { getByText, getByTestId, asFragment } = renderWithRouter(
      () => (
        <Route path="/location/:id">
          <LocationDetail />
        </Route>
      ),
      "/location/1234"
    );

    const location = getByText("mockName");
    const map = getByTestId("map");

    expect(location).toBeInTheDocument();
    expect(map).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
