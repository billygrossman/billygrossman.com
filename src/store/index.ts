import { createStore } from 'vuex';

import content from './modules/content';
import navigation from './modules/navigation';
import positions from './modules/positions';

export default createStore({
  modules: {
    content,
    navigation,
    positions,
  },
});
