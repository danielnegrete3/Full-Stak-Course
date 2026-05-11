import { Image, StyleSheet, View } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { NumberFormater } from "../helpers"

const styles = StyleSheet.create({
    container:{
        padding:10,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        backgroundColor:theme.colors.contrast,
        borderRadius:'7%',
        marginHorizontal:'2%'
    },
    subContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    userpartContainer:{
        width:'75%'
    },
    imageContainer:{
        justifyContent:'start',
        alignItems:'center',
        marginRight:'5%',
        width:'20%',
        height:100,
    },
    dataContainer:{
        display:'flex',
        flexDirection:'row',
        gap:40,
        padding:5,
        margin:'auto',
    },
    dataItem:{
        display:'flex',
        flexDirection:'column',
        fontSize:theme.fontSizes.subheading,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:60,
        width:60,
        borderRadius:15
    },
    name:{
        fontSize:theme.fontSizes.heading
    },
    description:{
        color:theme.colors.textSecondary,    
    },
    badges:{
        color:theme.colors.contrast,
        backgroundColor:theme.colors.primary,
        borderRadius:6,
        padding:5,
        alignSelf: 'flex-start',
        textAlign:'center',
    }
})

export const RepositoryItem = ({item})=>{
    const data = {
        Forks:item.forksCount,
        Stars:item.stargazersCount,
        Rating:item.ratingAverage,
        Review:item.reviewCount,
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{uri:item.ownerAvatarUrl}} style={styles.image}/>
                </View>
                <View style={styles.userpartContainer}>
                    <Text fontWeight='bold' style={styles.name}>{item.fullName}</Text>
                    <Text style={styles.description} >{item.description}</Text>
                    <Text style={styles.badges} fontWeight='bold'>{item.language}</Text>
                </View>
            </View>
            <View style={styles.dataContainer}>
                {
                    Object.entries(data).map(([name,number])=>
                        <View key={`data-${item.fullName}-${name}`} style={styles.dataItem}>
                            <Text fontWeight='bold'>
                                {NumberFormater(number)}
                            </Text>
                            <Text>
                                {name}
                            </Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}