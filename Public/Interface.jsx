import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { TailwindProvider, useTailwind } from 'nativewind';

const Interface = () => {
  const tailwind = useTailwind();

  const handleCall = () => {
    Linking.openURL(`tel:1234567890`);
  };

  const handleShare = () => {
    // Share the pizzeria details
    // You can customize the message and other options
    Linking.openURL('sms:?body=Check out Pizzeria Moretti Toronto!');
  };

  return (
    <TailwindProvider>
      <View className="flex-1 bg-gray-100 p-4">
        <View className="bg-white rounded-lg shadow p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="h-40 w-full rounded-lg"
          />
          <Text className="text-xl font-bold mt-2">Pizzeria Moretti Toronto</Text>
          <Text className="text-gray-500">123 Pizza Street, Toronto</Text>
          <Text className="text-gray-500">Open: 9am - 11pm</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-yellow-400">★★★★☆</Text>
            <Text className="text-gray-500 ml-2">4.5</Text>
          </View>
          <View className="flex-row justify-around mt-4">
            <TouchableOpacity onPress={handleCall} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Call</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Interface;
