import {CREATE_POST} from './types'
import {showAlert} from './actions'

const forbidden = ['fuck', 'php', 'spam']
export function spamWords({dispatch}){
return function(next){
return function(action){
if(action.type === CREATE_POST){
const found = forbidden.filter(w => action.payload.title.includes(w))
if(found.length){
return dispatch(showAlert('Вы спамер мы вас не звалиб идите на х'))
}
}
next(action)
}
}
}