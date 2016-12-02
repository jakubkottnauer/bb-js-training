const initialState = {
  email: 'example@example.com',
  password: ''
}

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT': {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }

    default:
      return state;
  }
}
