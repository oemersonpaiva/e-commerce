import {all, call} from 'redux-saga/effects';

import {fetchCollectionsStart} from './shop/sagas';
import {userSagas} from './user/UserSagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
