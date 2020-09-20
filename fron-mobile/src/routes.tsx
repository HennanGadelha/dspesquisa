import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import createRecord from './pages/CreateRecord';

const Stack = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator headerMode="none"
                screenOptions={{cardStyle: {
                    backgroundColor:'#0b1f34'
                }}}
            >

                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CreateRecord" component={createRecord}/>
            </Stack.Navigator>


        </NavigationContainer>
    )

}

export default Routes;