import {all} from 'redux-saga/effects';
import cardSaga from './card';

export default function* rootSaga() {
    yield all([cardSaga()])
}