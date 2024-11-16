import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import aviationModules from "../data/aviationModules";

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={aviationModules}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigation.navigate('Module', { moduleName: item.moduleName })}
          style={styles.gridItem}
        >
          <Icon name={item.icon} size={30} color="#000" />
          <Text style={styles.gridText}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
