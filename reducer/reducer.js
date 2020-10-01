import {actionTypes} from '../actions';

const initialState = {
    gallery: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GALLERY_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case actionTypes.GALLERY_LOADED:
            return {
                ...state,
                loading: false,
                gallery: action.payload
            }
        default:
            return state
    }  
}

export default reducer;