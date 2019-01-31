import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import contactSagas from './contacts/saga';
import invoicesSagas from './invoice/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import ecommerceSaga from './ecommerce/saga';
import cardsSagas from './card/saga';
import chatSagas from './chat/sagas';
import youtubeSearchSagas from './youtubeSearch/sagas';
import devSagas from '../customApp/redux/sagas';
import articles from './articles/sagas';
import investors from './investors/sagas';

import overview from './overview/saga';
import community from './community/saga';
import strokesGained from './StrokesGained/saga';
import putting from './Putting/saga';
import trends from './Trends/saga';
import setting from './settingTwo/saga';
import profile from './Profile/saga';
import friends from './Friends/saga';
import rounds from './Rounds/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    ecommerceSaga(),
    cardsSagas(),
    invoicesSagas(),
    chatSagas(),
    youtubeSearchSagas(),
    devSagas(),
    articles(),
    investors(),
    overview(),
    community(),
    strokesGained(),
    putting(),
    trends(),
    setting(),
    profile(),
    friends(),
    rounds()

  ]);
}
