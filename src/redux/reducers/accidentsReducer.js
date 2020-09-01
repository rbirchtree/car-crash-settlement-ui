const initialState = {
  pubData: [], // ! should be objects need to change later
  privData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PUB_ACCIDENTS_DATA": {
      return { ...state, pubData: action.payload };
    }
    case "SET_PRIV_ACCIDENTS_DATA": {
      return { ...state, privData: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
