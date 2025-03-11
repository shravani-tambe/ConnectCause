import {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout as logoutAction,
} from "../slices/authSlice";

// Mock API functions - replace with actual API calls in production
const mockLoginApi = async (
  email: string,
  password: string,
  userType: "individual" | "ngo",
) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demo purposes, always succeed with mock data
  return {
    id: "123",
    name:
      userType === "individual" ? "John Doe" : "Ocean Conservation Alliance",
    email,
    userType,
    initials: userType === "individual" ? "JD" : "OC",
  };
};

// This function is commented out to avoid Supabase dependency during build
// In a real app, you would implement actual Supabase auth here
/*
const loginWithSupabase = async (email: string, password: string) => {
  // This is just a placeholder and not actually used in the current build
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email,
  //   password,
  // });
  // if (error) throw error;
  // return data;
};
*/

const mockSignupApi = async (userData: any) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userType = userData.organizationName ? "ngo" : "individual";
  const name =
    userType === "individual" ? userData.fullName : userData.organizationName;

  // For demo purposes, always succeed with mock data
  return {
    id: "456",
    name,
    email: userData.email,
    userType,
    initials: name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase(),
  };
};

// Login thunk
export const login =
  (email: string, password: string, userType: "individual" | "ngo") =>
  async (dispatch: any) => {
    try {
      dispatch(loginStart());
      const user = await mockLoginApi(email, password, userType);
      dispatch(loginSuccess(user));
      return user;
    } catch (error: any) {
      dispatch(loginFailure(error.message || "Login failed"));
      throw error;
    }
  };

// Signup thunk for individual users
export const signupIndividual = (userData: any) => async (dispatch: any) => {
  try {
    dispatch(signupStart());
    const user = await mockSignupApi(userData);
    dispatch(signupSuccess(user));
    return user;
  } catch (error: any) {
    dispatch(signupFailure(error.message || "Signup failed"));
    throw error;
  }
};

// Signup thunk for NGO users
export const signupNGO = (userData: any) => async (dispatch: any) => {
  try {
    dispatch(signupStart());
    const user = await mockSignupApi(userData);
    dispatch(signupSuccess(user));
    return user;
  } catch (error: any) {
    dispatch(signupFailure(error.message || "Signup failed"));
    throw error;
  }
};

// Logout thunk
export const logout = () => (dispatch: any) => {
  // Clear any auth tokens or local storage items if needed
  dispatch(logoutAction());
};
