import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchIcon from 'react-native-vector-icons/Entypo';
import { TextInput as PaperInput } from 'react-native-paper';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/FontAwesome';


const MyConnex =() => {
    return (
        <ScrollView>

        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.blueText}>MY</Text>
                    <Text style={styles.grayText}>CONNEX</Text>
                </View>
                    <SearchIcon name="magnifying-glass" size={40} /> 
                </View>
                
            <View style={[styles.postContainer]} >
                <View style={[styles.circle, { width: 70, height: 70, borderRadius: 70 / 2 }]}>
                    <Image
                    source={ require('./images/elderly1.jpeg')}
                    style={styles.image}
                    />  
                </View>
                <View style={styles.nameLabel}>
                   
                <PaperInput
        
                    label="What's on your mind?"
                    placeholder="Enter your text here"
                    style={styles.input}
                    placeholderStyle={styles.placeholder}
                    />
                </View>
            </View>
            <View style={styles.line} />
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 70, height: 70, borderRadius: 70 / 2 }]}>
                            <Image
                            source={ require('./images/elderly2.avif')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:25, marginLeft:-20,}}>
                            Jenny
                        </Text>
                        <Text style={styles.nameTime}>
                            5 mins ago
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 15, fontSize:25}}>I have learnt a new word today! I am a Sigma Woman ! L O L haha</Text>
                <View style={{flexDirection: 'row', alignItems:'center', }}>
                    <LikeIcon name="hearto" size={30} style={{marginTop:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Like</Text>
                    <CommentIcon name="commenting-o" size={30} style={{marginTop:20, marginLeft:20}}></CommentIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Comment</Text>
                    <LikeIcon name="sharealt" size={30} style={{marginTop:20, marginLeft:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Share</Text>
                </View>
            </View>

            <View style={styles.line} />
            
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 70, height: 70, borderRadius: 70 / 2 }]}>
                            <Image
                            source={ require('./images/artCompany.png')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:25, marginLeft:-10,}}>
                            ArtForElderly
                        </Text>
                        <Text style={{fontSize:15,marginLeft:-70,}}>
                            20 mins ago
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 15, fontSize:25}}>Come and join us in this workshop whereby you can explore and hands on with different kind of arts!</Text>
                <Image
                            source={ require('./images/arts.jpeg')}
                            style={{resizeMode:"contain",width:"80", marginTop:-400, marginBottom:-400}}
                            />
                <View style={{flexDirection: 'row', alignItems:'center', }}>
                    <LikeIcon name="hearto" size={30} style={{marginTop:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Like</Text>
                    <CommentIcon name="commenting-o" size={30} style={{marginTop:20, marginLeft:20}}></CommentIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Comment</Text>
                    <LikeIcon name="sharealt" size={30} style={{marginTop:20, marginLeft:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Share</Text>
                </View>
            </View>

            <View style={styles.line} />
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 70, height: 70, borderRadius: 70 / 2 }]}>
                            <Image
                            source={ require('./images/cc.png')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:25, marginLeft:-10,}}>
                            Chai Chee CC
                        </Text>
                        <Text style={{fontSize:15,marginLeft:-80,}}>
                            50 mins ago
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 15, fontSize:25}}>Attention to all Seniors! Do you want to stay connected with the younger generations? Fred not! Head down to 
                                                            Chai Chee see and join us in this workshop whereby we will teach you how to correctly use the internet and stay connected! </Text>
                <Image
                            source={ require('./images/connect.jpeg')}
                            style={{resizeMode:"contain",width:"80", marginTop:-350, marginBottom:-350}}
                            />
                <View style={{flexDirection: 'row', alignItems:'center', }}>
                    <LikeIcon name="hearto" size={30} style={{marginTop:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Like</Text>
                    <CommentIcon name="commenting-o" size={30} style={{marginTop:20, marginLeft:20}}></CommentIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Comment</Text>
                    <LikeIcon name="sharealt" size={30} style={{marginTop:20, marginLeft:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Share</Text>
                </View>
            </View>

            <View style={styles.line} />
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 70, height: 70, borderRadius: 70 / 2 }]}>
                            <Image
                            source={ require('./images/senior1.avif')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:25, marginLeft:-10,}}>
                            Steven Lau
                        </Text>
                        <Text style={{fontSize:15,marginLeft:-50,}}>
                            2 hours ago
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 15, fontSize:25}}>Today I just learned how to post image haha. I love my plants. </Text>
                <Image
                            source={ require('./images/plant.jpeg')}
                            style={{resizeMode:"contain",width:"80", marginTop:-180, marginBottom:-150}}
                            />
                <View style={{flexDirection: 'row', alignItems:'center', }}>
                    <LikeIcon name="hearto" size={30} style={{marginTop:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Like</Text>
                    <CommentIcon name="commenting-o" size={30} style={{marginTop:20, marginLeft:20}}></CommentIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Comment</Text>
                    <LikeIcon name="sharealt" size={30} style={{marginTop:20, marginLeft:20}}></LikeIcon>
                    <Text style={{fontSize:25, marginTop:20, marginLeft:10}}>Share</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    blueText: {
      fontWeight: 'bold',
      color: '#3D94F8', 
      fontSize: 40, 
      letterSpacing: -1,
    },
    grayText: {
      color: '#535353', 
      fontSize: 23,
      letterSpacing: -0.5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff'

    },
    header: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: '100%', 
    },
    title :{
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    circle: {
        borderWidth: 2,
        borderColor: '#000', 
        overflow: 'hidden',  
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    postContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%', 
        marginTop: 30,
        
    },

    nameLabel: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:20,
    },
    nameText: {
        fontSize:25,
        marginLeft:-20,
        
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#fff'
        // paddingHorizontal: 10,

      },
      placeholder: {
        fontSize: 18,
      },

      line: {
        height: 5,
        width: 500, 
        margin:0,
        backgroundColor: '#000', 
        marginVertical: 10, 
        marginTop:30,
      },

      nameLabel1: {
        
        alignItems:'center',
        marginLeft:20,
    },

    nameTime: {
        fontSize:15,
        marginLeft:-10,
        
    },
  });

export default MyConnex;