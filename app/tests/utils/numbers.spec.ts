import { formatPrice, calculatePizzaPrice } from "../../src/utils/numbers"

describe("number utils", () => {
  describe("formatPrice", () => {
    it("should return the price based on input in cents", () => {
      expect(formatPrice(1000)).toEqual("$10.00");
      expect(formatPrice(0)).toEqual("$0.00");
      expect(formatPrice(10)).toEqual("$0.10");
      expect(formatPrice(100)).toEqual("$1.00");
    })
  })
  describe("calculatePizzaPrice", () => {
    it("should return the correct evaluation", () => {
      expect(calculatePizzaPrice(100, "S")).toEqual(75);
      expect(calculatePizzaPrice(100, "M")).toEqual(100);
      expect(calculatePizzaPrice(100, "L")).toEqual(150);
    })
    it("should return the correct evaluation for 0", () => {
      expect(calculatePizzaPrice(0, "S")).toEqual(0);
      expect(calculatePizzaPrice(0, "M")).toEqual(0);
      expect(calculatePizzaPrice(0, "L")).toEqual(0);
    })
  })
})