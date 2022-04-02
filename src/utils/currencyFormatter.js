const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency:"USD"
});

export default currencyFormatter;