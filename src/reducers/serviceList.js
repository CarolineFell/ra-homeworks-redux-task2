import shortid from 'shortid';
import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
  {id: shortid.generate(), name: 'Замена стекла', price: 21000},
  {id: shortid.generate(), name: 'Замена дисплея', price: 25000},
  {id: shortid.generate(), name: 'Замена аккумулятора', price: 4000},
  {id: shortid.generate(), name: 'Замена микрофона', price: 2500},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: shortid.generate(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    default:
      return state;
  }
}