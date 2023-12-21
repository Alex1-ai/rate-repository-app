import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from "../appTheme";

const styles = StyleSheet.create({
    container:{
        padding: 15,
        display: 'flex',
        backgroundColor:'white',
        height: 199,
        
    },
    fristSection:{
        flexDirection: 'row'

    },
    imageStyle:{
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    descriptionSectionStyle :{
        paddingLeft: 13,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    ratingStyle:{
        marginLeft: 30,
        flexDirection:'row',
        justifyContent: 'center'
    },
    ratingItem:{
        flexDirection:'column',
        marginRight: 10,
        padding : 10
    },
    ratingTitle:{

        fontWeight:theme.fontWeights.bold

    },
    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },

    languageStyle:{
        backgroundColor: theme.colors.primaryColor,
        padding: 5,
        borderRadius: 4,
        marginBottom: 5
        
    },
    descStyle:{
        paddingBottom: 10,
        
        
    }


})

const RepositoryItem = ({repository}) => {
    const formatCount = (count) => {
        if (count >= 1000) {
          return `${(count / 1000).toFixed(1)}k`;
        }
        return count;
      };
    // console.log(repository.forksCount)
  return (
    <View style={styles.container}>
        <View style={styles.fristSection}>
            <Image style={styles.imageStyle} source={{uri:repository.ownerAvatarUrl}}  />
            <View style={styles.descriptionSectionStyle}>
                <Text style={styles.titleStyle}> {repository.fullName} </Text>
                <Text style={styles.descStyle}> {repository.description} </Text>
                <Text style={styles.languageStyle}> {repository.language} </Text>
            </View>
        </View>
        <View style={styles.ratingStyle}>
            <View style={styles.ratingItem}>
                <Text style={styles.ratingTitle}> {formatCount(repository.stargazersCount)} </Text>
                <Text>Stars</Text>
            </View>
            <View style={styles.ratingItem}>
                <Text style={styles.ratingTitle}> {formatCount(repository.forksCount)} </Text>
                <Text>Folk</Text>
            </View>
            <View style={styles.ratingItem}>
                <Text style={styles.ratingTitle}> {repository.reviewCount} </Text>
                <Text>Review</Text>
            </View>
            <View style={styles.ratingItem}>
                <Text style={styles.ratingTitle}> {repository.ratingAverage} </Text>
                <Text>Rating</Text>
            </View>
            
        </View>



    </View>
  )
}

export default RepositoryItem