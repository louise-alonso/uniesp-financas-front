import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const { state, navigation, descriptors } = props;
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
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { title } = descriptors[route.key].options || {};
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{
                borderRadius: 4,
                backgroundColor: focused ? '#3B3DBF' : '#F0F4FF',
                marginBottom: 8,
                minHeight: 48,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 16,
                elevation: 1
              }}
            >
              <Text style={{
                color: focused ? '#FFF' : '#171717',
                fontWeight: 'bold',
                fontSize: 16
              }}>
                {title || route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
} 