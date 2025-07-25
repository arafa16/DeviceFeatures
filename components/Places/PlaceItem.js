import { Image, Text, View, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable style={({pressed})=> [styles.item, pressed && styles.pressed]} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.titlle}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { widht: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.9,
  },
  image: { 
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100
},
  info: {
    flex: 2,
    padding: 12,
  },
  titlle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700
  },
  address: {
    fontSize: 12,
    color: Colors.gray700
  },
});
