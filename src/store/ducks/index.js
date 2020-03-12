import axios from 'axios';

const BASE_URL = "https://api.github.com/users";

export const Types = {
  START_FETCH: 'START_FETCH',
  FETCH_REPOS_SUCCESS: 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAILURE: 'FETCH_REPOS_FAILURE',
};


const INITAL_STATE = [];

const startFetch = () => {
  return {
    type: Types.START_FETCH
  }
}

const fetchReposSuccess = (repos) => {
  return {
    type: Types.FETCH_REPOS_SUCCESS,
    repos
  }
}

const fetchReposFailure = (message) => {
  return {
    type: Types.FETCH_REPOS_FAILURE,
    message
  }
}

export default function repoReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.START_FETCH:
      return {
        loading: true,
      }
    case Types.FETCH_REPOS_SUCCESS:
      return {
        loading: false,
        repos: action.repos,
        error: ''
      }
    case Types.FETCH_REPOS_FAILURE:
      return {
        loading: false,
        repos: [],
        error: 'Erro ao carregar repositorios'
      }
    default:
      return state;
  }
}

export const getRepos = ( nameUser ) => {
  return dispatch => {
    dispatch(startFetch())

    axios.get(`${BASE_URL}/${nameUser}/repos`)
      .then(res => {
        const repos = res.data;
        dispatch(fetchReposSuccess(repos))

      })
      .catch(err => {
        dispatch(fetchReposFailure(err.message));
      });
  }
}