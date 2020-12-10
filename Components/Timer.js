import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

class StopWatch extends Component {

    state = {
        timer: null,
        minutes: '00',
        seconds: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }


    constructor( props ) {
        super( props );

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }



    componentDidMount() {
        this.start();
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

        this.start();
        this.setState({startDisabled: true, stopDisabled: false});
    }


    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({startDisabled: false, stopDisabled: true});
    }


    onButtonClear() {
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
                onPress={() => this.onButtonStart()}
              />
              <Button 
                title="Stop" 
                onPress={() => this.onButtonStop()}
              />
              <Button 
                title="Clear" 
                onPress={() => this.onButtonClear()}
              />
            </View>

          </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    normal: {
      fontSize: 60,
      textAlign: 'center',
      height: 60,
      margin: 10,
    },
    mini: {
      fontSize:20,
      position: 'relative',
      top: -32,
      right: -50
    },
    buttonContainer: {
      flexDirection: 'row',
    }
});


module.exports = StopWatch;