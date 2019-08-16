

const initialState = {
    name: '',
    age: '',
    height: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    //   case FETCH_SMURF_DATA_START:
    //     return {
    //       ...state,
    //       isLoading: true,
    //       error: ""
    //     };
    //   case FETCH_SMURF_DATA_SUCCESS:
    //     return {
    //       ...state,
    //       smurfs: action.payload,
    //       isLoading: false,
    //       error: ""
    //     };
      default:
        return state;
    }
  };