import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  // const action = {
  //     type: 'FETCH_ALL',
  //     payload: []
  // }
  // return action;
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost)
    console.log(data)
    dispatch({ type: "UPDATE_POST", payload: data })
  } catch (err) {
    console.log(err.message)
  }
}