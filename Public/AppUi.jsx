import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TailwindProvider, useTailwind } from 'nativewind';

const AppUI = () => {
  const tailwind = useTailwind();

  return (
    <TailwindProvider>
      <View className={tailwind('flex-1 items-center justify-center bg-gray-100')}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className={tailwind('w-32 h-32 rounded-full')}
        />
        <Text className={tailwind('text-xl font-bold mt-4')}>
          Your App Title
        </Text>
        <TouchableOpacity
          className={tailwind('mt-4 px-6 py-2 bg-blue-500 rounded-full')}
          onPress={() => console.log('Button pressed')}
        >
          <Text className={tailwind('text-white font-bold')}>
            Press Me
          </Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};

export default AppUI;
