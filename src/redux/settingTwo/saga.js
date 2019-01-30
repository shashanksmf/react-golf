import { put, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* getDataSetting() {
  //console.log("fecth recollection called");
  yield delay(4000);
  yield put({
    type: "RECOLLECTION_RECIEVED",
    payload: {
      "data_recollection": [
        {
            number:"01",
            men:"setting redux European Tour",
            mens:"PGA Tour Champions",
            women:"",
            womens:"Legends Tour",

        },
        {
            number:"02",
            men:"setting redux Challenge Tour",
            mens:"European Senior Tour",
            women:"LPGA Tour",
            womens:"",

        },
    ],
    
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeEvery("GET_SETTING", getDataSetting),
  ]);
}