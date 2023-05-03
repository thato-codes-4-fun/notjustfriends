import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native';
import posts from '../assets/data/posts.json'
import { Entypo } from '@expo/vector-icons'; 


export default function Header() {
    let post = posts[1]
    return (
        <View style={styles.headerContainer}>
        <View style={styles.leftHeader}>
        <Image
            style={styles.image}
            source={{
              uri: post.User.image,

            }}
          />
          <View style={styles.row}>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.createdAt}>{post.createdAt}</Text>
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
  