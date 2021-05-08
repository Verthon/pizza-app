export const formatPrice = (cents: number) => {
  const options = {
    style: "currency",
    currency: "USD",
  }
  return (cents / 100).toLocaleString("en-US", options)
}

const sizes = {
  S: 0.75,
  M: 1,
  L: 1.5,
}

export const calculatePizzaPrice = (cents: number, size: string) => {
  return cents * sizes[size];
}