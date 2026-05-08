import { Text, View } from "react-native"

export const RepositoryItem = ({item})=>{

    return(
        <View>
            <Text>Full Name{':\t'}{item.fullName}</Text>
            <Text>Description{':\t'}{item.description}</Text>
            <Text>Language{':\t'}{item.language}</Text>
            <Text>Forks Count{':\t'}{item.forksCount}</Text>
            <Text>Star Gazers Count{':\t'}{item.stargazersCount}</Text>
            <Text>Rating Average{':\t'}{item.ratingAverage}</Text>
            <Text>Review Count{':\t'}{item.reviewCount}</Text>
            <Text>Owner Avatar Url{':\t'}{item.ownerAvatarUrl}</Text>
        </View>
    )
}