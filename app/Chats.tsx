

import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Stack } from "expo-router";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchIcon from 'react-native-vector-icons/Entypo';
import { TextInput as PaperInput } from 'react-native-paper';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default class Chats extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: "Good Morning! Do you want to drink tea later at 2pm?",
        createdAt: new Date()
      }
    ]
  };
render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.blueText}>Jenny</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <SearchIcon name="magnifying-glass" size={40} style={{marginRight:40}}/> 
                <CommentIcon name="phone" size={40} /> 
                </View>

                

                
            </View>
            <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
          }))}
          user={{ _id: 1 }}
          renderInputToolbar={this.renderInputToolbar}
        />
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
      
      padding: 20,
      backgroundColor: '#fff'

  },
  header: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      width: '100%', 
  },
  inputToolbar: {
    borderTopWidth: 100,
    borderTopColor: '#ddd',
    padding: 8,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 18,
    padding: 8,
  },
  
  

    
});