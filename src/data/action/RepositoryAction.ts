export enum ActionType {
    SEARCH_REPOSITORIES = "search_repositories",
    SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
    SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

interface SearchAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload?: []
}

interface SearchErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload?: string
}

export type Action = SearchAction | SearchSuccessAction | SearchErrorAction;
