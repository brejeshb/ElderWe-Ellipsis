// import {View, Text} from "react-native";
// import React from "react";
// const MemoryAI =() => {
//     return (
//         <View>
//             <Text>This is my MemoryAI</Text>
//         </View>
//     )
// }

// export default MemoryAI;

import React from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { Appbar } from "react-native-paper";

export default class App extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: "Good Morning! How are you feeling today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "App",
        },
      },
    ],
    messageStep: 0,
  };

  onSend = (newMessages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, newMessages),
    }));

    const { messageStep } = this.state;

    if (messageStep === 0) {
      this.sendMessageFromApp("That is good to hear!", 1);
    } else if (messageStep === 1) {
      this.sendMessageFromApp(
        "Do remember to eat your blood pressure medication at 12pm",
        2
      );
    } 
  };

  sendMessageFromApp = (text, step) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [
        {
          _id: previousState.messages.length + 1,
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "App",
          },
        },
      ]),
      messageStep: step,
    }));
  };

  sendMessageFromUser = (text, step) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [
        {
          _id: previousState.messages.length + 1,
          text: text,
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "User",
          },
        },
      ]),
      messageStep: step,
    }));
  };

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#00C497",
          },
          left: {
            backgroundColor: "#007AFF",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#fff",
          },
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="MEMORYAI!" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} />
        </Appbar.Header>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={this.renderBubble}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
