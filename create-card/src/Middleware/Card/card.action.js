export const INCREMENT = "INCREMENT";

export const AddCard = (data) => {
  return {
    type: INCREMENT,
    payload: data,
  };
};
