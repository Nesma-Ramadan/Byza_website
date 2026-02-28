import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  name: string;
  email: string;
  password: string;
};

type AuthState = {
  registerUser: AuthUser | null;
  loggedInUser: AuthUser | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  registerUser: null,
  loggedInUser: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userRegister(state, action: PayloadAction<AuthUser>) {
      state.registerUser = action.payload;
    },
    userLogIn(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      const { email, password } = action.payload;
      if (
        state.registerUser &&
        state.registerUser.email === email &&
        state.registerUser.password === password
      ) {
        state.loggedInUser = state.registerUser;
        state.isLoggedIn = true;
      } else {
        state.loggedInUser = null;
        state.isLoggedIn = false;
      }
    },
    setLoggedInUser(state, action: PayloadAction<AuthUser>) {
      state.loggedInUser = action.payload;
      state.isLoggedIn = true;
    },
    userLogOut(state) {
      state.loggedInUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReduser = authSlice.reducer;
export const { userRegister, userLogIn, setLoggedInUser, userLogOut } =
  authSlice.actions;