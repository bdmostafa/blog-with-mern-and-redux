import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {
// const action = {
    //     type: 'FETCH_ALL',
    //     payload: []
    // }
    // return action;
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (err) {
        console.log(err.message)
    }
}