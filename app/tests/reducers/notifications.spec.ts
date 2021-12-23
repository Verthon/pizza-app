import notificationSlice, {
  show,
  set,
  hide,
  initialState,
} from "../../src/reducers/notifications"

describe("notificationsSlice", () => {
  it("should return default state", () => {
    expect(notificationSlice.reducer(undefined, {type: ""})).toEqual(
      initialState
    )
  })

  it("should add new error type notification", () => {
    expect(
      notificationSlice.reducer(
        initialState,
        show({message: "Something went wrong", type: "error"})
      )
    ).toEqual({
      ...initialState,
      message: "Something went wrong",
      type: "error",
      active: true,
    })
  })

  it("should hide the current notification", () => {
    const stateWithActiveNotification = {
      ...initialState,
      message: "Something went wrong",
      type: "error",
      active: true,
    }
    expect(
      notificationSlice.reducer(
        initialState,
        show({message: "Something went wrong", type: "error"})
      )
    ).toEqual(stateWithActiveNotification)

    expect(
      notificationSlice.reducer(
        {
          ...initialState,
          message: "Something went wrong",
          type: "error",
          active: true,
        },
        hide()
      )
    ).toEqual(initialState)
  })

  it("should always return intial state for hide action", () => {
    expect(
      notificationSlice.reducer(
        {
          ...initialState,
          message: "Something went wrong",
          type: "error",
          active: true,
        },
        hide()
      )
    ).toEqual(initialState)
  })

  it("should set the current notification", () => {
    expect(
      notificationSlice.reducer(
        {
          ...initialState,
          message: "Something went wrong",
          type: "error",
          active: true,
        },
        set({type: "info", message: "The email will be sent"})
      )
    ).toEqual({
      ...initialState,
      active: false,
      type: "info",
      message: "The email will be sent",
    })
  })
})
