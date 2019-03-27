const initTest = {
  key: "shiny"
};
export const test = (state = initTest, action) => {
  switch (action.type) {
    case "test":
      return { ...state, key: action.key };
    default:
      return state;
  }
};

export const test1 = (state = initTest, action) => {
    switch (action.type) {
      case "test1":
        return { ...state, key: action.key };
      default:
        return state;
    }
  };
  