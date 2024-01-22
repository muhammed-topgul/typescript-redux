import {Action, ActionType} from "../action/RepositoryAction";

interface RepositoryState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const initialState: RepositoryState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepositoryState = initialState, action: Action): RepositoryState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            // @ts-ignore
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            // @ts-ignore
            return {loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default reducer;