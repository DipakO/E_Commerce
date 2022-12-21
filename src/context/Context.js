import {
  useContext,
  useState,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { cartReducer } from "./reducer";

const Card = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((cardData) => setData(cardData));
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    data: data,
    cart: [],
  });

  //   const [productState , productDispatch] = useReducer(productReducer,{

  //   })

  return (
    <div>
      <Card.Provider value={{ state, dispatch, data }}>
        {children}
      </Card.Provider>
    </div>
  );
};

export const CardState = () => {
  return useContext(Card);
};

export default Context;
