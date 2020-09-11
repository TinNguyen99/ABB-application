import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import S5 from './S5';
import S6 from './S6';
import S7 from './S7';
import S8 from './S8';
import S9 from './S9';
import S10 from './S10';
import S11 from './S11';
import S12 from './S12';
import S13 from './S13';

const AppNavigator = createStackNavigator({
  S11: {
    screen: S1,
    navigationOptions: {
      header: null,
    },
  },

  S22: {
    screen: S2,
    navigationOptions: {
    headerTitle: "Login"
    },
  },

  S33: {
    screen: S3,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S44: {
    screen: S4,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S55: {
    screen: S5,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S66: {
    screen: S6,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S77: {
    screen: S7,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S88: {
    screen: S8,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S99: {
    screen: S9,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S1010: {
    screen: S10,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S1111: {
    screen: S11,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S1212: {
    screen: S12,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  S1313: {
    screen: S13,
    navigationOptions: {
    headerTitle: "ABB"
    },
  },

  
});


export default createAppContainer(AppNavigator);

