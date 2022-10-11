import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Screen1(){
    const navigation = useNavigation();
    const hanldPress= () =>{
        navigation.navigate('Screen2')
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.title}>
                    <Text style={{fontSize:30,}}>WELCOME TO BICYCLE</Text>
                    <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',marginTop:20, textAlign:'center',}}>A premium online store for{'\n'} sporter and their stylish choice</Text>
                </View>
                <View style={styles.containerImg}>
                    <Image source={require('../assets/xe1.png')} style={{marginLeft:20,marginTop:20,}}/>
                    <View style={{alignItems:'flex-end'}}>
                        <Image source={require('../assets/xe2.png')} style={{marginTop:20,marginRight:20,}}/>
                    </View>
                </View>
                <View style={{marginTop:60,alignItems:'center'}}>
                    <TouchableOpacity onPress={hanldPress} style={styles.button}>
                        <Text style={{fontSize:26,color:'white'}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    title:{
        marginTop:50,
        alignItems:'center',
    },
    containerImg:{
        marginTop:20,
        height:450,
        width:"100%",
    },
    button:{
        paddingLeft:130,
        paddingRight:130,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#DD0000'
    }
  });
  
export default Screen1;