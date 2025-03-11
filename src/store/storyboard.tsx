import React from "react";
import { Provider } from "react-redux";
import { store } from "./index";
import { loginSuccess, logout } from "./slices/authSlice";

// This component is for demonstration purposes in the storyboard
export const ReduxStateDemo = () => {
  const loginAsIndividual = () => {
    store.dispatch(
      loginSuccess({
        id: "123",
        name: "John Doe",
        email: "john@example.com",
        userType: "individual",
        initials: "JD",
      }),
    );
  };

  const loginAsNGO = () => {
    store.dispatch(
      loginSuccess({
        id: "456",
        name: "Ocean Conservation Alliance",
        email: "contact@oceanalliance.org",
        userType: "ngo",
        initials: "OC",
      }),
    );
  };

  const logoutUser = () => {
    store.dispatch(logout());
  };

  const currentState = store.getState().auth;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#0A6E74]">
        Redux Auth State
      </h2>

      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-medium mb-2">Current State:</h3>
        <pre className="text-sm bg-gray-100 p-3 rounded overflow-auto max-h-40">
          {JSON.stringify(currentState, null, 2)}
        </pre>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={loginAsIndividual}
          className="px-4 py-2 bg-[#0A6E74] text-white rounded-md hover:bg-[#0A6E74]/90"
        >
          Login as Individual
        </button>
        <button
          onClick={loginAsNGO}
          className="px-4 py-2 bg-[#FF7D5C] text-white rounded-md hover:bg-[#FF7D5C]/90"
        >
          Login as NGO
        </button>
        <button
          onClick={logoutUser}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// Wrapper component to provide Redux store to storyboard components
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
