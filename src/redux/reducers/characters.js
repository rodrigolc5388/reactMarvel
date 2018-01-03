import * as types from '../types/characters'

const initialState = {
    isFetching: false,
    list: [],
    myList: [],
    character: null,
    total: 0,
    offset: 0
}

export default function reducer( state = initialState, action = {}){

    switch (action.type){

        case types.CHARACTERS_UPDATE_LIST:
            return{
                ...state,
                list: action.list,
                total: action.total
            };
        
        case types.CHARACTERS_UPDATE_CHARACTER:
            return{
                ...state,
                character: action.character
            };

        case types.CHARACTERS_SET_FETCHING:
        return{
            ...state,
            isFetching: action.value
        };

        case types.CHARACTERS_UPDATE_MYLIST:
        return{
            ...state,
            myList: action.list
        };

        default:
            return state;
    }
}