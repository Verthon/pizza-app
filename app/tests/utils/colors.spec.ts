import { ROUTES } from "../../src/constants/routes"
import { theme } from "../../src/theme/theme"
import { getIconColor } from "../../src/utils/colors"

let windowSpy: jest.SpyInstance

beforeEach(() => {
  windowSpy = jest.spyOn(window, "window", "get")
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe("getIconColor", () => {
  it("should return default color if current route doesnt match", () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: ROUTES.home,
      },
    }))

    expect(getIconColor(ROUTES.menu)).toEqual(theme.colors.iconColor)
  })
  it("should return default color if current route doesnt match", () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: ROUTES.home,
      },
    }))

    expect(getIconColor(ROUTES.home)).toEqual(theme.colors.dark)
  })
})
