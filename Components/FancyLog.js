import React, {useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollPicker} from 'react-native-value-picker';
import { SECONDS } from './Data/Minutes';
import { MINUTES } from './Data/Minutes';
import {MOCK_DATA} from './Data/Minutes';

function FancyLog() {
  const [pickedValue, setPickedValue] = useState(7);
  const [secondsValue, setSecondsValue] = useState(7);
  const refRBSheet = useRef();
  

  return(
    <View style={styles.container}>
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
            <Text>Minutes:</Text>
            <ScrollPicker
              style={styles.scroller}   
              currentValue={pickedValue}   
              extraData={pickedValue} 
              list={MINUTES}
              onItemPress={setPickedValue}
            />
            <Text style={styles.label}>Seconds:</Text>
            <ScrollPicker         
            style={styles.scroller}   
              currentValue={secondsValue}             
              extraData={secondsValue}             
              list={SECONDS}
              onItemPress={setSecondsValue}
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
    width: 65,
    justifyContent: "center",
    alignItems: 'center',
  },
  scroller: {
    width: 20,
  },
  label: {
    paddingLeft: 5,
    fontWeight: "bold",
  }
});

export default FancyLog;