import { ADD, DELETE, UPDATE } from "./todoActions";

export const addItem = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: DELETE,
    payload: payload,
  };
};

export const updateItem = (payload) => {
  return {
    type: UPDATE,
    payload: payload,
  };
};
