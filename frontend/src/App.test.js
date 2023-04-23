import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

test("Delete component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const current = screen.getAllByText(/Accept/i);
  if (current.length < 1) {
    const linkElement = screen.getAllByText(/Delete/i);
    expect(linkElement.length).toBeGreaterThan(0);
  } else {
    return;
  }
});

test("DonationPageMpesa component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.getAllByText(/Paybill/i);
  expect(linkElement.length).toBeGreaterThan(0);
});

test("App component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.getByText(/African/i);
  expect(linkElement).toBeInTheDocument();
});

test("Landing page component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.getByText(/UNICEF/i);
  expect(linkElement).toBeInTheDocument();
});

test("NavBar component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.getByText(/Admin/i);
  expect(linkElement).toBeInTheDocument();
});

test("DonationPageCreditCard component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.getByPlaceholderText(/Apartment/i);
  expect(linkElement).toBeInTheDocument();
});

test("DonationPagePalpal component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );

  const linkElement = screen.getByText(/paypal/i);
  expect(linkElement).toBeInTheDocument();
});
test("Review component renders", () => {
  render(
    // <Provider store={store}>
    <App />
    //* </Provider> */}
  );
  const linkElement = screen.queryAllByText(/Accept/i);
  expect(linkElement.length).toBeGreaterThan(0);
});


// test('NavBar component renders', () => {
//   render(
//   // <Provider store={store}>
//   <App />
//   //* </Provider> */}
//   );
//   const linkElement = screen.getByText(/Admin/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('CharityApplication component renders', () => {
//   render(
//   // <Provider store={store}>
//   <App />
//   //* </Provider> */}
//   );
//   const linkElement = screen.getByText(/credentials/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('NavBar component renders', () => {
//   render(
//   // <Provider store={store}>
//   <App />
//   //* </Provider> */}
//   );
//   const linkElement = screen.getByText(/Admin/i);
//   expect(linkElement).toBeInTheDocument();
// });
