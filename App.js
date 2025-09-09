import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#ffffff' , fontSize: 20}}>
        FATHER: JOHN KENNETH PEÑA
      </Text>
      <Text style={{ color: '#ffffff' , fontSize: 20}}>
        MOTHER: RENIER LOPE
      </Text>
      <Text style={{ color: '#ffffff' , fontSize: 20}}>
        CHILD: MARCUS VELASCO
      </Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/5d/e9/c7/5de9c7b11304cc410b11143e35524cce.jpg"
        }}
        style={{ width: 300, height: 300 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});