import PizzeriaAppUI from './PizzeriaAppUI.jsx';
import Interface from './Interface.jsx';
import AppUI from './AppUi.jsx';

import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { TailwindProvider, useTailwind } from 'nativewind';

const Application = () => {
  const tailwind = useTailwind();

  return (
    <TailwindProvider>
      <ScrollView className="bg-gray-100">
        <View className="p-4">
          <Text className="text-xl font-bold text-gray-800">Locations</Text>
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-600">Sort by:</Text>
            <Text className="text-blue-500">Distance</Text>
            <Text className="text-blue-500">Rating</Text>
          </View>
          <View className="mt-4">
            <LocationCard />
            {/* Repeat <LocationCard /> for multiple locations */}
          </View>
        </View>
      </ScrollView>
    </TailwindProvider>
  );
};

const LocationCard = () => {
  const tailwind = useTailwind();

  return (
    <View className="bg-white p-4 rounded-lg shadow-md mb-4">
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        className="h-40 w-full rounded-lg"
      />
      <Text className="text-lg font-semibold mt-2">Location Name</Text>
      <Text className="text-gray-700">Description of the location...</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default Application;
