export default (state, action) => {
  switch (action.type) {
    case "Delete-Data":
      return {
        ...state,
        userData: state.userData.filter(data => data.id !== action.payload)
      };
    case "Add-Data":
      return {
        ...state,
        userData: [action.payload, state.userData]
      };
    default:
      return state;
  }
};
