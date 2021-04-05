import { formatPrice } from "../../src/utils/numbers"

describe("number utils", () => {
  describe("formatPrice", () => {
    it("should return the price based on input in cents", () => {
      expect(formatPrice(1000)).toEqual("$10.00");
      expect(formatPrice(0)).toEqual("$0.00");
      expect(formatPrice(10)).toEqual("$0.10");
      expect(formatPrice(100)).toEqual("$1.00");
    })
  })
})