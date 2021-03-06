const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...INITIAL_STATE,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
