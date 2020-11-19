import { UPDATE_QUESTION, UPDATE_CHOICE, GET_QUESTION_FAILURE, GET_QUESTION_SUCCESS, GET_QUESTION_EMPTY } from '../actions/quizActions';

const initialState = {
    sessionID: 0,
    question: {
        id: 0,
        question_text: "",
        sessionID: 0
    },
    choices: [
        {
            id: 1,
            choice_text: "",
            isCorrect: false,
            sessionID: 0
        },
        {
            id: 2,
            choice_text: "",
            isCorrect: false,
            sessionID: 0
        },
        {
            id: 3,
            choice_text: "",
            isCorrect: false,
            sessionID: 0
        },
        {
            id: 4,
            choice_text: "",
            isCorrect: false,
            sessionID: 0
        }
    ]
}

export const quizReducer = ( state=initialState, action ) => {
    switch(action.type){
        case GET_QUESTION_EMPTY:
            return {
                ...state,
                question: action.payload
            }
        case GET_QUESTION_SUCCESS:
            return {
                ...state,
                question: action.payload
            }
        case UPDATE_QUESTION:
            return {
                ...state, 
                question: action.payload
            }
        case UPDATE_CHOICE:       
            return {
                ...state,
                choices: state.choices.map(
                    (choice) => choice.id === action.payload.id ? {...choice, choice_text: action.payload.choice_text}
                                            : choice
                )
            }
        default: 
            return state;
    }
}