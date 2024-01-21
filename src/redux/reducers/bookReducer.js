import { BOOKING_DATA_GET, BOOKING_FAILS, BOOKING_SUCCESS, CLEAR_BOOKING_MESSAGE } from "../Constance"

const initialState = {
    booking_data: [],
    success: null,
    error: null,
}

export const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case BOOKING_DATA_GET:
            let data = []
            for (let key in action.payload) {
                data.push({...action.payload[key], id: key})
            }
            return {
             ...state,
             booking_data: data,
            }
        case BOOKING_SUCCESS:
            return {
             ...state,
             success: action.payload.success,
            }
        case BOOKING_FAILS:
            return {
             ...state,
             error: action.payload.error,
            }
        case CLEAR_BOOKING_MESSAGE:
            return {
             ...state,
             error: null,
             success: null,
            }

        default:
            return state
    }
}