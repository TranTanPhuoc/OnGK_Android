import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Screen3({ route}){
    const { imgItem,nameItem,priceItem,priceBFItem } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTop}>
                <Image source={imgItem}/>
            </View>
            <View style={styles.containerMid}>
                <Text style={{fontSize:32,}}>{nameItem}</Text>
                <View style={styles.containerMid_Price}>
                    <Text style={{fontSize:26,color:'grey'}}>15% OFF | {priceItem} $</Text>
                    <Text style={{fontSize:26,textDecorationLine:"line-through"}}> {priceBFItem} $</Text>
                </View>
                <Text style={{fontSize:25,marginTop:10}}>Description</Text>
                <Text style={{fontSize:22,marginTop:10,color:'grey'}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
                <View style={styles.containerBottom}>
                    <AntDesign name="hearto" size={32} color="black" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize:25,color:'white'}}>Add to Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerTop:{
        marginLeft:10,
        marginRight:10,
        height:400,
        backgroundColor:"#FFCC99",
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    containerMid:{
        marginTop:20,
        marginLeft:20,
    },
    containerMid_Price:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        width:"70%",
        justifyContent:'space-between'
    },
    containerBottom:{
        display:'flex',
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
        marginRight:20,
        alignItems:'center'
    },
    button:{
        paddingLeft:90,
        paddingRight:90,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FF4040',
        borderRadius:10,
    }
});

export default Screen3;