import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import MeuPerfil from '../pages/MeuPerfil';
import Registrar from '../pages/Registrar';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#FFF',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor:'#3b3dbf',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
        headerStyle: { backgroundColor: '#FFF', borderBottomWidth: 0 },
        headerTintColor: '#171717',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Minhas movimentações',
          headerStyle: { backgroundColor: '#F0F4FF', borderBottomWidth: 0 },
        }}
      />
      <AppDrawer.Screen
        name="Registrando"
        component={Registrar}
        options={{
          headerStyle: { backgroundColor: '#F0F4FF', borderBottomWidth: 0 },
        }}
      />
      <AppDrawer.Screen
        name="Meu Perfil"
        component={MeuPerfil}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;