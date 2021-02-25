import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rX4LSmKoeF72EmzNjy9b1DAk2mfgOEYcIZfYZDEvCERgcFUrCiKNIwE6YHmJgVxWvlthHEaFhPRXzRuhGEmn5FZVjCX25w_Pb0VE4Epc-jSC_obB1H754hUQK7o2YHYx",
  },
});
