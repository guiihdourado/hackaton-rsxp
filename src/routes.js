import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '~/pages/SignUp';
import CompaniesList from '~/pages/CompaniesList';

const Routes = createAppContainer(createSwitchNavigator({ CompaniesList, SignUp }));

export default Routes;
