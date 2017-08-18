import { takeEvery } from 'redux-saga/effects';
import { types as postsTypes } from './posts/duck';
import * as postsSagas from './posts/saga';

export default function* rootSaga() {
  yield [
    takeEvery(postsTypes.GET_POSTS_REQUEST, postsSagas.fetchPosts)
  ];
}
