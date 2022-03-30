import React from 'react'; 
import Amplify from "aws-amplify";

import awsconfing from "./src/aws-exports";
import {withAuthenticator} from 'aws-amplify-react-native';


import ManiNavigator from './src/components/Navigator';
import {GlobalProvider} from  "./src/context/global/global.context";

Amplify.configure(awsconfing);

 function App() {
  return (
    <GlobalProvider>
        <ManiNavigator/>
    </GlobalProvider>
    
  );
}
export default withAuthenticator(App);
