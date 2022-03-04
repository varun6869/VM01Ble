import React from 'react';
import {
Text,
View,
Image,
StatusBar,
TouchableOpacity
} from 'react-native';
import styles  from 'E:/dev/sai_kt/VM_01/src/styles/Page2.style.js';



export default function page2({route, navigation}) {
  const { Device_Id, TimeStamp,Spo2, Temperature,Ecg,otherParam } = route.params;
  var newEcg = Ecg.Final_ecg;

   console.log("ecg_2",Ecg.Final_ecg)
   console.log("new",newEcg)
   console.log("Device_Id_2",Device_Id.devID)
   console.log("time_2",TimeStamp.time)
   console.log("spo2_2",Spo2.spo2)
   console.log("temp_2",Temperature.temp)

    return (
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#000000"
            barStyle="default"
            showHideTransition="fade"
            hidden={false} />
          <View style={styles.firstrow}>
            <View style={styles.row1}>
              <Text style={styles.title1} >Vitals</Text>
                <Image
                  style={styles.image1}
                  source={require('E:/dev/sai_kt/VM_01/src/assets/running.png')}
                />
            </View>
            <View style={styles.row2}>
              <Text style={styles.row2Text} >Dev ID:</Text>
              <Text style={styles.row2Text_1} >{Device_Id.devID}</Text>
              <Text style={styles.row2Text} >Time stamp:</Text>
              <Text style={styles.row2Text_2} >{TimeStamp.time}</Text>
            </View>
          </View>

          <View style={styles.secondrow}>
            <Text style={styles.titleSpo2}>Spo2</Text>
            <View style={styles.row3}>
              <View style={styles.imageViewSpo2}>
                  <Image
                    style={styles.image}
                    source={require('E:/dev/sai_kt/VM_01/src/assets/o2.png')}
                  />
                </View>
              </View>
            <View style={styles.row4}>
              <Text style={styles.row4Text} >{Spo2.spo2} %</Text>
            </View>
          </View>

          <View style={styles.thirdrow}>
            <Text style={styles.titleTemp}>Temperature</Text>
            <View style={styles.row6}>
              <View style={styles.imageViewTemp}>
                <Image
                  style={styles.image}
                  source={require('E:/dev/sai_kt/VM_01/src/assets/temp.png')}
                />
              </View>
            </View>
            <View style={styles.row7}>
              <Text style={styles.row7Text} >{Temperature.temp}°C/F</Text>
            </View>
          </View>
          <View style={styles.fourthrow}>
            <Text style={styles.titleEcg}>Ecg</Text>
            <View style={styles.row8}>
              <View style={styles.imageViewEcg}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ecg', {
                    newEcg1: {newEcg},
                    otherParam: 'anything you want here',
                 })}>
                  <Image
                    style={styles.image}
                    source={require('E:/dev/sai_kt/VM_01/src/assets/heart2.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.row9}>
                <Text style={styles.row9Text} >Select ECG icon</Text>
              </View>
            </View>
          </View>

        </View>
    );  
}

