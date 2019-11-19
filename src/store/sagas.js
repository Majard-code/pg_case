import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import apis from '../apis/apis';
import { FETCH_INSTRUMENTS, fetchInstrumentsSuccess, fetchInstrumentsFailed, setNoReady, setPage } from './reducers/instruments';


function* mamaSaga() {
  yield takeEvery(FETCH_INSTRUMENTS, fetchInstruments);
}

function* fetchInstruments(dataIn) {
  const sortStr = dataIn.payload.sort ? `&sort=${dataIn.payload.sort}` : '';
  const sortDirectionStr = dataIn.payload.sortDirection ? `&sort_direction=${dataIn.payload.sortDirection}` : '';
  try {
    yield put(setNoReady());
    const data = yield call(() => axios.get(`${apis.instruments}?instrument_type_code=cms&page=${dataIn.payload.page}${sortStr}${sortDirectionStr}`).then(res => res.data));
    yield put(fetchInstrumentsSuccess(data));
    yield put(setPage(dataIn.payload.page));
  } catch (err) {
    yield put(fetchInstrumentsFailed(err));
  }
}

export default mamaSaga;