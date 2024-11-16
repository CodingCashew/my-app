import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Module: { moduleName: string };
};

type ModuleScreenRouteProp = RouteProp<RootStackParamList, 'Module'>;
type ModuleScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Module'>;

type Props = {
  route: ModuleScreenRouteProp;
  navigation: ModuleScreenNavigationProp;
};

const ModuleScreen: React.FC<Props> = ({ route }) => {
  const { moduleName } = route.params || { moduleName: 'Default Module' };

  return (
    <View style={styles.container}>
      <Text>{moduleName} Screen</Text>
      {/* Add more dynamic content based on moduleName */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModuleScreen;