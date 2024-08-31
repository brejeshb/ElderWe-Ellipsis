import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchIcon from 'react-native-vector-icons/Entypo';
import { TextInput as PaperInput } from 'react-native-paper';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Chat =() => {
    const router = useRouter();
    const handleChat = () => {
       
        router.push("../Chats");
      };
    
    return (
        
        
        <ScrollView>

        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.blueText}>MY</Text>
                    <Text style={styles.grayText}>CHAT</Text>
                </View>
                    <SearchIcon name="magnifying-glass" size={40} /> 
                </View>
                
            <View style={styles.line} />
                <TouchableOpacity onPress={handleChat}>
                    <View style={styles.postContainer}>
                        <View style={[styles.circle, { width: 90, height: 90, borderRadius: 90 / 2 }]}>
                                <Image
                                source={ require('./images/elderly2.avif')}
                                style={styles.image}
                                />  
                        </View> 
                        <View style={styles.nameLabel1}>
                            <Text style={{fontSize:30, marginLeft:0, textAlign:"left", color: '#3D94F8'}}>
                                Jenny
                            </Text>
                            <Text style={{fontSize:21}}>
                                Good Morning! Do you want {"\n"}to drink tea later at 2pm?
                            </Text>
                            <Text>8.45am</Text>
                        </View>
                    </View>
                
                
            </TouchableOpacity>

            <View style={styles.line} />
            
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 90, height: 90, borderRadius: 90 / 2 }]}>
                            <Image
                            source={ require('./images/CareWorker.png')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:30, marginLeft:0,color: '#FF8300'}}>
                            Azluv (CareWorker)
                        </Text>
                        <Text style={{fontSize:21,marginLeft:0,}}>
                            Good Morning Mam!   How     {"\n"}have you been feeling?
                        </Text>
                        <Text>7.31am</Text>
                    </View>
                </View>
                
            </View>

            <View style={styles.line} />
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 90, height: 90, borderRadius: 90 / 2 }]}>
                            <Image
                            source={ require('./images/cc.png')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:30, marginLeft:0,color: '#0BE200'}}>
                            Chai Chee CC
                        </Text>
                        <Text style={{fontSize:21,marginLeft:0,}}>
                           Attention to all Seniors! Do you{"\n"}you want to stay conne...
                        </Text>
                        <Text>Yesterday 6.21pm</Text>
                    </View>
                </View>
               

            </View>

            <View style={styles.line} />
            <View>
                <View style={styles.postContainer}>
                    <View style={[styles.circle, { width: 90, height: 90, borderRadius: 90 / 2 }]}>
                            <Image
                            source={ require('./images/senior1.avif')}
                            style={styles.image}
                            />  
                    </View> 
                    <View style={styles.nameLabel1}>
                        <Text style={{fontSize:30, marginLeft:0,color: '#3D94F8'}}>
                            Steven Lau
                        </Text>
                        <Text style={{fontSize:21,marginLeft:0,}}>
                            Hi let's be friends! I am Steven{"\n"}and I love plants.
                        </Text>
                        <Text>Yesterday 5.49pm</Text>
                    </View>
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
        backgroundColor: '#C1C1C1', 
        marginVertical: 10, 
        marginTop:30,
      },

      nameLabel1: {
        
        alignItems:'left',
        marginLeft:20,
    },

    
  });

export default Chat;