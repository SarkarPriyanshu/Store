export const ShowDropDown = () => {
  return {
    type: "TOGGLE_DROP_DOWN",
  };
};

export const AddItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
