

import {configureStore} from '@reduxjs/toolkit'
import cardreducer from './slices/cardslice'

const store = configureStore ({
  reducer:{
 cart : cardreducer 

    }
})

export default store;