import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      switch (sort) {
        case "price-lowest":
          tempProducts.sort((a, b) => {
            a.price - b.price;
          });
          break;
        case "price-highest":
          tempProducts.sort((a, b) => {
            b.price - a.price;
          });
          break;
        case "name-a":
          tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "name-z":
          tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempArray = [...all_products];

      if (text) {
        return (tempArray = tempArray.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        ));
      }
      if (category !== "all") {
        return (tempArray = tempArray.filter(
          (product) => product.category === category
        ));
      }
      if (company !== "all") {
        return (tempArray = tempArray.filter(
          (product) => product.company === company
        ));
      }
      if (color !== "all") {
        return (tempArray = tempArray.filter((product) =>
          product.colors.find((c) => c === color)
        ));
      }
      if (price) {
        return (tempArray = tempArray.filter(
          (product) => product.price <= price
        ));
      }
      if (shipping) {
        return (tempArray = tempArray.filter(
          (product) => product.shipping === true
        ));
      }

      return { ...state, filtered_products: tempProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`No matching ${action.type} - action type`);
  }
};

export default filter_reducer;
