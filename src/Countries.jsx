import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "./query";
import Country from "./Country";

const Countries = ({ inputValue }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return `Loading...`;
  if (error) return `Error: {error.message}`;

  

  return <Country inputValue={inputValue} data={data} />;
};

export default Countries;
