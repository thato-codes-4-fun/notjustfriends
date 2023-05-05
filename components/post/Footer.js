import { StyleSheet , View,  Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Footer({numberOfLikes, numberOfShares}){
    return (
    <View style={styles.rowContainer}>
        <View style={styles.statsRow}>
            <View style={styles.likeContainer}>
                <Entypo name="thumbs-up" size={18} color="white" />
            </View>
            <Text style={styles.likes}> Elon and {numberOfLikes} Others</Text>
            <Text style={styles.shares}>{numberOfShares} Shares</Text>
        </View>
        <View style={styles.buttonsRow}>
            <View style={styles.iconDescription}>
                <FontAwesome5 name="thumbs-up" size={24} color="gray" />
                <Text>Like</Text>
            </View>
            <View style={styles.iconDescription}>
                <FontAwesome5 name="comment-alt" size={24} color="gray" />
                <Text>Comment</Text>
            </View>
            <View style={styles.iconDescription}>
                <FontAwesome5 name="share" size={24} color="gray" />
                <Text>Share</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 10,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
    },
    shares: {
        marginLeft: 'auto', 
    },
    likes: {
        marginLeft: 5
    },
    buttonsRow: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconDescription: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    likeContainer: {
        padding: 5,
        backgroundColor: 'blue',
        borderRadius: 20
    }

  });
  