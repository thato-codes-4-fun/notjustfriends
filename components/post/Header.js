import { StyleSheet, Text, View, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function Header({name, image, createdAt}) {
    return (
        <View style={styles.headerContainer}>
        <View style={styles.leftHeader}>
        <Image
            style={styles.image}
            source={{
              uri: image,

            }}
          />
          <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.createdAt}>{createdAt}</Text>
          </View>
        </View>
        <View style={styles.rightHeader}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      marginTop: 50,
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    image: {
      height: 40,
      width :40,
      borderRadius: 25,
      marginRight: 20,
    },
    rightHeader: {
      marginLeft: 'auto'
    },
    leftHeader: {
      flexDirection: 'row'
    },
    name: {
      fontWeight: '500'
    },
    createdAt: {
      color: 'gray'
    }
  });
  