const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload
      };
    case "SET_COMMENT":
      return {
        ...state,
        comment: action.payload
      };
    case "CLEAR_CURRENT":
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
export default postReducer;
