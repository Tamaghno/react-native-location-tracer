import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import AnimatedMarkers from './App';
import User from './User';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React from 'react';
import ContentDrawer from './ContentDrawer'; 

// const MainRoute=createStackNavigator({
//     home:Home,
//     user:User
// })
const MainRoute=createDrawerNavigator({
    map:AnimatedMarkers,
    user:User
},
{
    contentComponent:({navigation})=><ContentDrawer navigation={navigation}/>
}
)



export default createAppContainer(MainRoute);