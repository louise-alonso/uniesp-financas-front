import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 64, height: 64, marginBottom: 8 }}
          resizeMode="contain"
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 16 }}>Bem-vindo</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        <DrawerItemList
          {...props}
          itemStyle={{
            borderRadius: 6,
            backgroundColor: '#F0F4FF',
            marginBottom: 20,
            marginHorizontal: 0,
            minHeight: 48,
            justifyContent: 'center',
            elevation: 1
          }}
          labelStyle={{
            color: '#171717',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 0
          }}
          activeBackgroundColor="#3B3DBF"
          activeTintColor="#FFF"
        />
      </View>
    </DrawerContentScrollView>
  );
} 