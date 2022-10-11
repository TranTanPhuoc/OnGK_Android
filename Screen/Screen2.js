import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
const data =[
    {id:1,name:'Red Bull One',img:require('../assets/xe5.png'),price:350,priceBF:449},
    {id:2,name:'Blue One',img:require('../assets/xe4.png'),price:840,priceBF:950},
];
function Screen2({navigation}){
    
    const renderItem= ({item}) =>{
        return(
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Screen3',{
                    imgItem: item.img,
                    nameItem: item.name,
                    priceItem: item.price,
                    priceBFItem: item.priceBF,
                });
            }} style={styles.containerCardItem}>
                    <View style={styles.CardItem}>
                        <View style={styles.Card_ContainerLeftItem}>
                        <Image source={item.img} style={{height:180,width:180,}}/>
                        </View>
                        <View style={styles.Card_ContainerRightItem}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{fontSize:22,}}>{item.name}</Text>
                                <Text style={{fontSize:18,marginTop:10,}}>Free Ship</Text>
                                <View style={{display:'flex', flexDirection:'row',marginTop:40,justifyContent:'space-between',width:"100%"}}>
                                    <Text style={{fontSize:26,}}>$ {item.price}</Text>
                                    <Text style={{fontSize:26,textDecorationLine:'line-through'}}>$ {item.priceBF}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{fontSize:28,fontWeight:'bold',marginLeft:20,}}>WELCOME BACK!</Text>
                <View style={styles.containerCard}>
                    <View style={styles.Card}>
                        <Text style={{marginLeft:20,fontSize:22,fontWeight:'bold',marginTop:5,}}>New Products</Text>
                        <View style={styles.Card_Container}>
                            <View style={styles.Card_ContainerLeft}>
                                <Text style={{fontSize:22,color:'grey',marginTop:5,}}>Get a 50% discount on your first purchase</Text>
                                <View style={{marginTop:30,width:200,alignItems:'center'}}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={{fontSize:24,color:'white'}}>Buy now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.Card_ContainerRight}>
                                <Image source={require('../assets/xe3.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerButoon}>
                <View style={styles.containerButoon_Button}>
                    <TouchableOpacity style={styles.buttonXL}>
                        <Text style={{fontSize:22,}}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonXL}>
                        <Text style={{fontSize:22,}}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonXL}>
                        <Text style={{fontSize:22,}}>We recommended</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerFlatList}>
                <View style={styles.containerFlatList_List}>
                    <FlatList data={data} renderItem={renderItem} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerCard:{
        width:"100%",
        height:200,
        marginTop:20,
    },
    Card:{
        backgroundColor:'#FFCC99',
        height:"100%",
        marginLeft:10,
        marginRight:10,
    },
    Card_Container:{
        display:'flex',
        flexDirection:"row",
        width:"100%",
        marginTop:5,
    },
    Card_ContainerLeft:{
        width:"60%",
        marginLeft:20,
    },
    button:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'red',
        borderRadius:10,
    },
    Card_ContainerRight:{
        width:"35%",
    },
    containerButoon:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    containerButoon_Button:{
        width:"100%",
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    buttonXL:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderRadius:5,
    },
    containerFlatList_List:{
        width:"100%",
        height:400,
    },
    containerFlatList:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    
    containerCardItem:{
        width:"100%",
        height:200,
        marginTop:20,
    },
    CardItem:{
        backgroundColor:'#FFCC99',
        height:"100%",
        marginLeft:10,
        marginRight:10,
        display:'flex',
        flexDirection:'row'
    },
    Card_ContainerRightItem:{
        width:"40%",
        marginLeft:50,
        marginTop:20,
    },
    Card_ContainerLeftItem:{
        width:"40%",
        marginLeft:20,
        marginTop:10,
    },
});
export default Screen2;