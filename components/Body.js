import { StyleSheet,  SafeAreaView , View, Image, Text} from 'react-native';
import user from '../assets/data/user.json'

export default function BodyPost() {
    let post = user.posts[0]
    return (
        <View style={styles.bodyContainer}>
            <Text style={styles.description}>{post.description}</Text>
            {
            post.image
            && 
            <Image
            style={styles.image}
            source={{
                uri: post.image,
            }}
            />
            }
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
    bodyContainer: {
      marginTop: 20,
    },
    description: {
      lineHeight: 20,
      padding: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 1
    }
  });
  