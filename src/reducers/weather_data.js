import { GET_WEATHER } from '../actions/index'

export default function(state=[], action){
  switch(action.type){
    case GET_WEATHER:
    console.log ( [ action.payload.data, ...state ] )
      return [ action.payload.data, ...state ];
  }
  return state
}
