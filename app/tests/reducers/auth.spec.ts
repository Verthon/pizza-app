import authSlice, { login, logout, setAuthLoading, initialState } from "../../src/reducers/auth"

describe("authSlice", () => {
  it("should return default state", () => {
    expect(authSlice.reducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should return updated state after login", () => {
    expect(
      authSlice.reducer(
        initialState,
        login({
          uid: "12",
          email: "test@test.pl",
          name: "Mariusz",
          avatar: "https://image.pl",
        })
      )
    ).toEqual({
      ...initialState,
      synced: true,
      user: {
        avatar: "https://image.pl",
        email: "test@test.pl",
        name: "Mariusz",
        uid: "12",
      },
    })
  })

  it("should return updated state after logout", () => {
    const loggedState = {
      ...initialState,
      synced: true,
      user: {
        avatar: "https://image.pl",
        email: "test@test.pl",
        name: "Mariusz",
        uid: "12",
      },
    }
    expect(authSlice.reducer(loggedState, logout())).toEqual(initialState)
  })

  it("should set the loading status", () => {
    expect(authSlice.reducer(initialState, setAuthLoading({ loading: true }))).toEqual({
      ...initialState,
      loading: true,
    })
    expect(authSlice.reducer(initialState, setAuthLoading({ loading: false }))).toEqual({
      ...initialState,
      loading: false,
    })
  })
})
