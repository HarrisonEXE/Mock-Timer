import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity,
} from 'react-native';

class StopWatch extends Component {

    state = {
        timer: null,
        minutes: '00',
        seconds: '00',
        miliseconds: '00',
        startDisabled: false,
        stopDisabled: true
    }


    constructor( props ) {
        super( props );

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }


    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                secondCount = this.state.seconds,
                minuteCount = this.state.minutes;

            if( Number(this.state.miliseconds) == 99 ) {
                secondCount = (Number(this.state.seconds) + 1).toString();
                num = '00';
            }

            if( Number(this.state.seconds) == 60 ) {
              minuteCount = (Number(this.state.minutes) + 1).toString();
              secondCount = '00';
            }

            self.setState({
                minutes: minuteCount.length == 1 ? '0' + minuteCount : minuteCount,
                seconds: secondCount.length == 1 ? '0' + secondCount : secondCount,
                miliseconds: num.length == 1 ? '0' + num : num
            });
        }, 0);
        this.setState({timer});
    }

    onButtonStart() {
      if (!this.state.startDisabled) {
        this.start();
        this.setState({startDisabled: true, stopDisabled: false});
      }
    }


    onButtonStop() {
      if (!this.state.stopDisabled) {
        clearInterval(this.state.timer);
        this.setState({startDisabled: false, stopDisabled: true});
      }
    }

    onButtonClear() {
        this.onButtonStop();
        this.setState({
            timer: null,
            minutes: '00',
            seconds: '00',
            miliseconds: '00'
        });
    }

    render() {
        return(
          <View style={styles.container}>

            <Text style={styles.normal}> 
              {this.state.minutes}:{this.state.seconds}
              <Text style={styles.mini}> .{this.state.miliseconds} </Text>
            </Text>

            <View style={styles.buttonContainer}>
              <Button 
                title="Start" 
                style={styles.buttont}
                onPress={() => this.onButtonStart()}
              />
              <Button 
                title="Stop" 
                style={styles.buttont}
                onPress={() => this.onButtonStop()}
              />
              <Button 
                title="Clear" 
                style={styles.buttont}
                onPress={() => this.onButtonClear()}
              />
            </View>

          </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      borderWidth: 1,   
      width: 250,
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    normal: {
      fontSize: 50,
      height: 50,
      margin: 10,
      paddingLeft: 10,
    },
    mini: {
      fontSize:20,
      position: 'relative',
      top: -32,
      right: -50
    },
    buttonContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
    },
    buttont: {
      elevation: 8,
      backgroundColor: "#90eefc", 
    }
});


module.exports = StopWatch;