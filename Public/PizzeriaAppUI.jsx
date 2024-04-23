import AppUI from './AppUi';

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TailwindProvider, useTailwind } from 'nativewind';

const PizzeriaAppUI = () => {
  const tailwind = useTailwind();

  return (
    <TailwindProvider>
      <View className="flex-1 bg-gray-100 p-4">
        <View className="bg-white rounded-lg shadow p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="h-40 w-full rounded-lg"
          />
          <Text className="text-xl font-bold mt-2">Pizzeria Moretti Toronto</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-yellow-400">★★★★☆</Text>
            <Text className="text-gray-500 ml-2">4.5</Text>
          </View>
          <View className="flex-row justify-around mt-4">
            <TouchableOpacity className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Call</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex-1 bg-gray-100 p-4">
        <View className="bg-white rounded-lg shadow p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="h-40 w-full rounded-lg"
          />
          <Text className="text-xl font-bold mt-2">Pizzeria Moretti Toronto</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-yellow-400">★★★★☆</Text>
            <Text className="text-gray-500 ml-2">4.5</Text>
          </View>
          <View className="flex-row justify-around mt-4">
            <TouchableOpacity className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Call</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View className="flex-1 bg-gray-100 p-4">
        <View className="bg-white rounded-lg shadow p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="h-40 w-full rounded-lg"
          />
          <Text className="text-xl font-bold mt-2">Pizzeria Moretti Toronto</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-yellow-400">★★★★☆</Text>
            <Text className="text-gray-500 ml-2">4.5</Text>
          </View>
          <View className="flex-row justify-around mt-4">
            <TouchableOpacity className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Call</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              <Text className="text-white">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TailwindProvider>
    
  );
};

export default PizzeriaAppUI;
