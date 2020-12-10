import React, {useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Picker } from '@davidgovea/react-native-wheel-datepicker';
import { SECONDS } from './Data/Minutes';
import { MINUTES } from './Data/Minutes';
import {MOCK_DATA} from './Data/Minutes';

function Log() {
  const [pickedValue, setPickedValue] = useState(7);
  const [secondsValue, setSecondsValue] = useState(7);
  var minutes = useState(0);
  const refRBSheet = useRef();
  

  return(
    <View style={styles.container}>
      <Text>{minutes}</Text>
      <Button
        style={styles.button}
        title="Test Scroll Picker"
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderRadius: 12,
          },
        }}>
        <View style={styles.SheetView}>
          <View style={styles.ScrollRow}>
            <Text style={styles.label}>MIN:</Text>
            <Picker
              style={styles.scroller}
              pickerData= {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
                16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40]}
              selectedValue={3}
              onValueChange={value => { minutes = value; }}
            />
            <Text style={styles.label}>SEC:</Text>
             <Picker
              style={styles.scroller}
              pickerData= {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
                16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40]}
              selectedValue={3}
              onValueChange={value => { console.log(value); }}
            />
          </View>         
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,   
    width: '98%',
    margin: 3, 
    justifyContent: 'center',
    backgroundColor: '#92A8D1',
  },
  ScrollRow: {
    alignSelf: "center",
    flexDirection: 'row',
    width: 70,
    justifyContent: "center",
    alignItems: 'center',
  },
  scroller: {
    width: 50,
  },
  label: {
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 3,
    fontWeight: "bold",
  }
});

export default Log;