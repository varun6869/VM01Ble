import React, {
  useState,
  useEffect,
} from 'react'; // hooks
  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    NativeModules,
    NativeEventEmitter,
    //Button,
    Platform,
    PermissionsAndroid,
    FlatList,
    TouchableHighlight,
  } from 'react-native'; // comnponents
  
  import { 
    Button,
    useTheme,
  } from 'react-native-paper' //Ui Components
  import { Buffer } from 'buffer'; // Buffer
  import BleManager from 'react-native-ble-manager'; // Bluetoo th manager
  import Orientation from 'react-native-orientation'; // orentation
  import styles  from 'E:/dev/sai_kt/VM_01/src/styles/Page1.style.js'; // styles path

  const BleManagerModule = NativeModules.BleManager;
  const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
  var Final_ecg;
  
  
  export default function page1({navigation}) {
  
    const [isScanning, setIsScanning] = useState(false);
    const [connected,setConnected] = useState('None')
    const [received, setReceived] = useState('None')
    const [currentOrientation, setCurrentOrientation] = useState('');
    const [ecgReceived ,setEcgReceived] = useState('None')
  
    const peripherals = new Map();
    const [list, setList] = useState([]);
    const [devID,setDevID] = useState("")
    const [spo2,setSpo2] = useState([])
    const [temp,setTemp] = useState([])
    const [time,setTime] = useState([])
    const [hr,setHr] = useState([])
  
    const [ecg1,setEcg1] = useState([])
    const [ecg2,setEcg2] = useState([])
    const [ecg3,setEcg3] = useState([])
    const [ecg4,setEcg4] = useState([])
    const [ecg5,setEcg5] = useState([])
    const [ecg6,setEcg6] = useState([])
    const [ecg7,setEcg7] = useState([])
    const [ecg8,setEcg8] = useState([])
    const [ecg9,setEcg9] = useState([])
    const [ecg10,setEcg10] = useState([])
    const [ecg11,setEcg11] = useState([])
    const [ecg12,setEcg12] = useState([])
    const [ecg13,setEcg13] = useState([])
    const [ecg14,setEcg14] = useState([])
    const [ecg15,setEcg15] = useState([])
    const [ecg16,setEcg16] = useState([])
    const [ecg17,setEcg17] = useState([])
    const [ecg18,setEcg18] = useState([])
    const [ecg19,setEcg19] = useState([])
    const [ecg20,setEcg20] = useState([])
    const [ecg21,setEcg21] = useState([])
    const [ecg22,setEcg22] = useState([])
    const [ecg23,setEcg23] = useState([])
    const [ecg24,setEcg24] = useState([])
    const [ecg25,setEcg25] = useState([])
    const [ecg26,setEcg26] = useState([])
    const [ecg27,setEcg27] = useState([])
    const [ecg28,setEcg28] = useState([])
    const [ecg29,setEcg29] = useState([])
    const [ecg30,setEcg30] = useState([])
    const [ecg31,setEcg31] = useState([])
    const [ecg32,setEcg32] = useState([])
    const [ecg33,setEcg33] = useState([])
    const [ecg34,setEcg34] = useState([])
    const [ecg35,setEcg35] = useState([])
    const [ecg36,setEcg36] = useState([])
    const [ecg37,setEcg37] = useState([])
    const [ecg38,setEcg38] = useState([])
    const [ecg39,setEcg39] = useState([])
    const [ecg40,setEcg40] = useState([])
    const [ecg41,setEcg41] = useState([])
    const [ecg42,setEcg42] = useState([])
    const [ecg43,setEcg43] = useState([])
    const [ecg44,setEcg44] = useState([])
    const [ecg45,setEcg45] = useState([])
    const [ecg46,setEcg46] = useState([])
    const [ecg47,setEcg47] = useState([])
    const [ecg48,setEcg48] = useState([])
    const [ecg49,setEcg49] = useState([])
    const [ecg50,setEcg50] = useState([])
    const [ecg51,setEcg51] = useState([])
    const [ecg52,setEcg52] = useState([])
    const [ecg53,setEcg53] = useState([])
    const [ecg54,setEcg54] = useState([])
    const [ecg55,setEcg55] = useState([])
    const [ecg56,setEcg56] = useState([])
    const [ecg57,setEcg57] = useState([])
    const [ecg58,setEcg58] = useState([])
    const [ecg59,setEcg59] = useState([])
    const [ecg60,setEcg60] = useState([])
    const [ecg61,setEcg61] = useState([])
    const [ecg62,setEcg62] = useState([])
    const [ecg63,setEcg63] = useState([])
    const [ecg64,setEcg64] = useState([])
    const [ecg65,setEcg65] = useState([])
    const [ecg66,setEcg66] = useState([])
    const [ecg67,setEcg67] = useState([])
    const [ecg68,setEcg68] = useState([])
    const [ecg69,setEcg69] = useState([])
    const [ecg70,setEcg70] = useState([])
    const [ecg71,setEcg71] = useState([])
    const [ecg72,setEcg72] = useState([])
    const [ecg73,setEcg73] = useState([])
    const [ecg74,setEcg74] = useState([])
    const [ecg75,setEcg75] = useState([])
    const [ecg76,setEcg76] = useState([])
    const [ecg77,setEcg77] = useState([])
    const [ecg78,setEcg78] = useState([])
    const [ecg79,setEcg79] = useState([])
    const [ecg80,setEcg80] = useState([])
    const [ecg81,setEcg81] = useState([])
    const [ecg82,setEcg82] = useState([])
    const [ecg83,setEcg83] = useState([])
    const [ecg84,setEcg84] = useState([])
    const [ecg85,setEcg85] = useState([])
    const [ecg86,setEcg86] = useState([])
    const [ecg87,setEcg87] = useState([])
    const [ecg88,setEcg88] = useState([])
    const [ecg89,setEcg89] = useState([])
    const [ecg90,setEcg90] = useState([])
    const [ecg91,setEcg91] = useState([])
    const [ecg92,setEcg92] = useState([])
    const [ecg93,setEcg93] = useState([])
    const [ecg94,setEcg94] = useState([])
    const [ecg95,setEcg95] = useState([])
    const [ecg96,setEcg96] = useState([])
    const [ecg97,setEcg97] = useState([])
    const [ecg98,setEcg98] = useState([])
    const [ecg99,setEcg99] = useState([])
    const [ecg100,setEcg100] = useState([])
  
    const [ecg101,setEcg101] = useState([])
    const [ecg102,setEcg102] = useState([])
    const [ecg103,setEcg103] = useState([])
    const [ecg104,setEcg104] = useState([])
    const [ecg105,setEcg105] = useState([])
    const [ecg106,setEcg106] = useState([])
    const [ecg107,setEcg107] = useState([])
    const [ecg108,setEcg108] = useState([])
    const [ecg109,setEcg109] = useState([])
    const [ecg110,setEcg110] = useState([])
    const [ecg111,setEcg111] = useState([])
    const [ecg112,setEcg112] = useState([])
    const [ecg113,setEcg113] = useState([])
    const [ecg114,setEcg114] = useState([])
    const [ecg115,setEcg115] = useState([])
    const [ecg116,setEcg116] = useState([])
    const [ecg117,setEcg117] = useState([])
    const [ecg118,setEcg118] = useState([])
    const [ecg119,setEcg119] = useState([])
    const [ecg120,setEcg120] = useState([])
    const [ecg121,setEcg121] = useState([])
    const [ecg122,setEcg122] = useState([])
    const [ecg123,setEcg123] = useState([])
    const [ecg124,setEcg124] = useState([])
    const [ecg125,setEcg125] = useState([])
    const [ecg126,setEcg126] = useState([])
    const [ecg127,setEcg127] = useState([])
    const [ecg128,setEcg128] = useState([])
    const [ecg129,setEcg129] = useState([])
    const [ecg130,setEcg130] = useState([])
    const [ecg131,setEcg131] = useState([])
    const [ecg132,setEcg132] = useState([])
    const [ecg133,setEcg133] = useState([])
    const [ecg134,setEcg134] = useState([])
    const [ecg135,setEcg135] = useState([])
    const [ecg136,setEcg136] = useState([])
    const [ecg137,setEcg137] = useState([])
    const [ecg138,setEcg138] = useState([])
    const [ecg139,setEcg139] = useState([])
    const [ecg140,setEcg140] = useState([])
    const [ecg141,setEcg141] = useState([])
    const [ecg142,setEcg142] = useState([])
    const [ecg143,setEcg143] = useState([])
    const [ecg144,setEcg144] = useState([])
    const [ecg145,setEcg145] = useState([])
    const [ecg146,setEcg146] = useState([])
    const [ecg147,setEcg147] = useState([])
    const [ecg148,setEcg148] = useState([])
    const [ecg149,setEcg149] = useState([])
    const [ecg150,setEcg150] = useState([])
    const [ecg151,setEcg151] = useState([])
    const [ecg152,setEcg152] = useState([])
    const [ecg153,setEcg153] = useState([])
    const [ecg154,setEcg154] = useState([])
    const [ecg155,setEcg155] = useState([])
    const [ecg156,setEcg156] = useState([])
    const [ecg157,setEcg157] = useState([])
    const [ecg158,setEcg158] = useState([])
    const [ecg159,setEcg159] = useState([])
    const [ecg160,setEcg160] = useState([])
    const [ecg161,setEcg161] = useState([])
    const [ecg162,setEcg162] = useState([])
    const [ecg163,setEcg163] = useState([])
    const [ecg164,setEcg164] = useState([])
    const [ecg165,setEcg165] = useState([])
    const [ecg166,setEcg166] = useState([])
    const [ecg167,setEcg167] = useState([])
    const [ecg168,setEcg168] = useState([])
    const [ecg169,setEcg169] = useState([])
    const [ecg170,setEcg170] = useState([])
    const [ecg171,setEcg171] = useState([])
    const [ecg172,setEcg172] = useState([])
    const [ecg173,setEcg173] = useState([])
    const [ecg174,setEcg174] = useState([])
    const [ecg175,setEcg175] = useState([])
    const [ecg176,setEcg176] = useState([])
    const [ecg177,setEcg177] = useState([])
    const [ecg178,setEcg178] = useState([])
    const [ecg179,setEcg179] = useState([])
    const [ecg180,setEcg180] = useState([])
    const [ecg181,setEcg181] = useState([])
    const [ecg182,setEcg182] = useState([])
    const [ecg183,setEcg183] = useState([])
    const [ecg184,setEcg184] = useState([])
    const [ecg185,setEcg185] = useState([])
    const [ecg186,setEcg186] = useState([])
    const [ecg187,setEcg187] = useState([])
    const [ecg188,setEcg188] = useState([])
    const [ecg189,setEcg189] = useState([])
    const [ecg190,setEcg190] = useState([])
    const [ecg191,setEcg191] = useState([])
    const [ecg192,setEcg192] = useState([])
    const [ecg193,setEcg193] = useState([])
    const [ecg194,setEcg194] = useState([])
    const [ecg195,setEcg195] = useState([])
    const [ecg196,setEcg196] = useState([])
    const [ecg197,setEcg197] = useState([])
    const [ecg198,setEcg198] = useState([])
    const [ecg199,setEcg199] = useState([])
    const [ecg200,setEcg200] = useState([])
    const [ecg201,setEcg201] = useState([])
    const [ecg202,setEcg202] = useState([])
    const [ecg203,setEcg203] = useState([])
    const [ecg204,setEcg204] = useState([])
  
  

    const startScan = () => {
      if (!isScanning) {
            reset()
  
        BleManager.scan([], 3, true).then((results) => {
          console.log('Scanning...');
          setIsScanning(true);
        }).catch(err => {
          console.error(err);
        });
      }    
    }
  
    const handleStopScan = () => {
      console.log('Scan is stopped');
      setIsScanning(false);
    }
  
    const handleDisconnectedPeripheral = (data) => {
      let peripheral = peripherals.get(data.peripheral);
      if (peripheral) {
        peripheral.connected = false;
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
      }
      console.log('Disconnected from ' + data.peripheral);
    }
  
    const handleUpdateValueForCharacteristic = (data) => {
      //console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  
      //console.log(data.value.slice(11,14))
      //console.log(data.value)
      //setOutput(data.value)
      
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==48){
        //console.log(data.value)
  
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a = buf.toString()
        //console.log(a)
        const json = JSON.stringify(a);
        console.log("seq",json.slice(18,21))
        console.log("deviceId",json.slice(42,59))
        setDevID(json.slice(42,59))
  
        if(json.slice(84,85) == 0){
           setTime(json.slice(84,85))
           console.log("timeStamp_data1",json.slice(84,85))
        }else{
          console.log("timeStamp_data2",json.slice(84,94))
          var myDate = new Date(json.slice(84,94)*1000);
          console.log(myDate.toLocaleString())
          setTime(myDate.toLocaleString())
        }
      }
      
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==49){
        console.log(data.value)
        const buf1 = Buffer.from(data.value);
        //console.log(buf)
        var b = buf1.toString()
        //console.log(s)
        const json = JSON.stringify(b);
        console.log("temperature",json.slice(86,91))
        var temp1 = json.slice(86,91)
        setTemp(json.slice(86,91))
        
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==50){
        console.log(data.value)
        const buf2 = Buffer.from(data.value);
        //console.log(buf)
        var c = buf2.toString()
        //console.log(s)
        const json = JSON.stringify(c);
        console.log("spo2",json.slice(79,81))
        setSpo2(json.slice(79,82))
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==51){
        console.log(data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var s = buf.toString()
        //console.log(s)
        const json = JSON.stringify(s);
        console.log("heart rate",json.slice(84,86))
        setHr(json.slice(84,86))
      }
      setReceived("recevied")
        if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==52){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a1 = buf.toString()
        //console.log(a1)
        const json = JSON.stringify(a1);
        /*
        console.log("seq4",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        */
        const ecg1 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ECG1",ecg1)
        setEcg1(ecg1);
  
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==53){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a2 = buf.toString()
        //console.log(a2)
        const json = JSON.stringify(a2);
        /*
        
        console.log("seq5",json.slice(18,21))
        console.log("ecg6",json.slice(79,83))
        console.log("ecg7",json.slice(89,93))
        console.log("ecg8",json.slice(99,103))
        console.log("ecg9",json.slice(109,113))
        console.log("ecg10",json.slice(119,123))
        */
        const ecg2 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ECG2",ecg2)
        setEcg2(ecg2);
  
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==54){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a3 = buf.toString()
        //console.log(a3)
         const json = JSON.stringify(a3);
        /*
       
        console.log("seq6",json.slice(18,21))
        console.log("ecg11",json.slice(79,83))
        console.log("ecg12",json.slice(89,93))
        console.log("ecg13",json.slice(99,103))
        console.log("ecg14",json.slice(109,113))
        console.log("ecg15",json.slice(119,123))
        */
        const ecg3 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg3",ecg3)
        setEcg3(ecg3);
  
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==55){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a4 = buf.toString()
        //console.log(a4)
        const json = JSON.stringify(a4);
        /*
        
        console.log("seq7",json.slice(18,21))
        console.log("ecg16",json.slice(79,83))
        console.log("ecg17",json.slice(89,93))
        console.log("ecg18",json.slice(99,103))
        console.log("ecg19",json.slice(109,113))
        console.log("ecg20",json.slice(119,123))
        */
        const ecg4 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg4",ecg4)
        setEcg4(ecg4);
  
      }
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==56){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a5 = buf.toString()
        console.log(a5)
        const json = JSON.stringify(a5);
        /*
        console.log("seq8",json.slice(18,21))
        console.log("ecg21",json.slice(79,83))
        console.log("ecg22",json.slice(89,93))
        console.log("ecg23",json.slice(99,103))
        console.log("ecg24",json.slice(109,113))
        console.log("ecg25",json.slice(119,123))    
        */
        const ecg5 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg5",ecg5)
        setEcg5(ecg5);  
      }   
      if(data.value[11] ==48 && data.value[12] ==48 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a6 = buf.toString()
        console.log(a6)
        const json = JSON.stringify(a6);
        /*
        console.log("seq9",json.slice(18,21))
        console.log("ecg26",json.slice(79,83))
        console.log("ecg27",json.slice(89,93))
        console.log("ecg28",json.slice(99,103))
        console.log("ecg29",json.slice(109,113))
        console.log("ecg30",json.slice(119,123))
        */
        const ecg6 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg6",ecg6)
        setEcg6(ecg6);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a7 = buf.toString()
        console.log(a7)
        const json = JSON.stringify(a7);
        console.log("seq10",json.slice(18,21))
        console.log("ecg31",json.slice(79,83))
        console.log("ecg32",json.slice(89,93))
        console.log("ecg33",json.slice(99,103))
        console.log("ecg34",json.slice(109,113))
        console.log("ecg35",json.slice(119,123))      
        const ecg7 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg7",ecg7)
        setEcg7(ecg7);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a8 = buf.toString()
        console.log(a8)
        const json = JSON.stringify(a8);
        console.log("seq11",json.slice(18,21))
        console.log("ecg36",json.slice(79,83))
        console.log("ecg37",json.slice(89,93))
        console.log("ecg38",json.slice(99,103))
        console.log("ecg39",json.slice(109,113))
        console.log("ecg40",json.slice(119,123))
        const ecg8 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg8",ecg8)
        setEcg8(ecg8);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a9 = buf.toString()
        console.log(a9)
        const json = JSON.stringify(a9);
        console.log("seq12",json.slice(18,21))
        console.log("ecg41",json.slice(79,83))
        console.log("ecg42",json.slice(89,93))
        console.log("ecg43",json.slice(99,103))
        console.log("ecg44",json.slice(109,113))
        console.log("ecg45",json.slice(119,123))
        const ecg9 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg9",ecg9)
        setEcg9(ecg9);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a10 = buf.toString()
        console.log(a10)
        const json = JSON.stringify(a10);
        console.log("seq13",json.slice(18,21))
        console.log("ecg46",json.slice(79,83))
        console.log("ecg47",json.slice(89,93))
        console.log("ecg48",json.slice(99,103))
        console.log("ecg49",json.slice(109,113))
        console.log("ecg50",json.slice(119,123))
        const ecg10 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg10",ecg10)
        setEcg10(ecg10);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a11 = buf.toString()
        console.log(a11)
        const json = JSON.stringify(a11);
        console.log("seq11",json.slice(18,21))
        console.log("ecg51",json.slice(79,83))
        console.log("ecg52",json.slice(89,93))
        console.log("ecg53",json.slice(99,103))
        console.log("ecg54",json.slice(109,113))
        console.log("ecg55",json.slice(119,123))
        const ecg11 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg11",ecg11)
        setEcg11(ecg11);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a12 = buf.toString()
        console.log(a12)
        const json = JSON.stringify(a12);
        console.log("seq12",json.slice(18,21))
        console.log("ecg56",json.slice(79,83))
        console.log("ecg57",json.slice(89,93))
        console.log("ecg58",json.slice(99,103))
        console.log("ecg59",json.slice(109,113))
        console.log("ecg60",json.slice(119,123))
        const ecg12 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg12",ecg12)
        setEcg12(ecg12);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a13 = buf.toString()
        console.log(a13)
        const json = JSON.stringify(a13);
        console.log("seq13",json.slice(18,21))
        console.log("ecg61",json.slice(79,83))
        console.log("ecg62",json.slice(89,93))
        console.log("ecg63",json.slice(99,103))
        console.log("ecg64",json.slice(109,113))
        console.log("ecg65",json.slice(119,123))
        const ecg13 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg13",ecg13)
        setEcg13(ecg13);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a14 = buf.toString()
        console.log(a14)
        const json = JSON.stringify(a14);
        console.log("seq14",json.slice(18,21))
        console.log("ecg66",json.slice(79,83))
        console.log("ecg67",json.slice(89,93))
        console.log("ecg68",json.slice(99,103))
        console.log("ecg69",json.slice(109,113))
        console.log("ecg70",json.slice(119,123))
        const ecg14 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg14",ecg14)
        setEcg14(ecg14);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a15 = buf.toString()
        console.log(a15)
        const json = JSON.stringify(a15);
        console.log("seq15",json.slice(18,21))
        console.log("ecg71",json.slice(79,83))
        console.log("ecg72",json.slice(89,93))
        console.log("ecg73",json.slice(99,103))
        console.log("ecg74",json.slice(109,113))
        console.log("ecg75",json.slice(119,123))
        const ecg15 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg15",ecg15)
        setEcg15(ecg15);
      }
      if(data.value[11] ==48 && data.value[12] ==49 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a16 = buf.toString()
        console.log(a16)
        const json = JSON.stringify(a16);
        console.log("seq16",json.slice(18,21))
        console.log("ecg76",json.slice(79,83))
        console.log("ecg77",json.slice(89,93))
        console.log("ecg78",json.slice(99,103))
        console.log("ecg79",json.slice(109,113))
        console.log("ecg80",json.slice(119,123))
        const ecg16 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg16",ecg16)
        setEcg16(ecg16);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a17 = buf.toString()
        console.log(a17)
        const json = JSON.stringify(a17);
        console.log("seq17",json.slice(18,21))
        console.log("ecg81",json.slice(79,83))
        console.log("ecg82",json.slice(89,93))
        console.log("ecg83",json.slice(99,103))
        console.log("ecg84",json.slice(109,113))
        console.log("ecg85",json.slice(119,123))
        const ecg17 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg17",ecg17)
        setEcg17(ecg17);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a18 = buf.toString()
        console.log(a18)
        const json = JSON.stringify(a18);
        console.log("seq18",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg18 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg18",ecg18)
        setEcg18(ecg18);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a19 = buf.toString()
        console.log(a19)
        const json = JSON.stringify(a19);
        console.log("seq19",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg19 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg19",ecg19)
        setEcg19(ecg19);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==51){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a20 = buf.toString()
        console.log(a20)
        const json = JSON.stringify(a20);
        console.log("seq20",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg20 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg20",ecg20)
        setEcg20(ecg20);      
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a21 = buf.toString()
        console.log(a21)
        const json = JSON.stringify(a21);
        console.log("seq21",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg21 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg3",ecg21)
        setEcg21(ecg21);
      }
     if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a22 = buf.toString()
        console.log(a22)
        const json = JSON.stringify(a22);
        console.log("seq22",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg22 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg22",ecg22)
        setEcg22(ecg22);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a23 = buf.toString()
        console.log(a23)
        const json = JSON.stringify(a23);
        console.log("seq23",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg23 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg23",ecg23)
        setEcg23(ecg23);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a24 = buf.toString()
        console.log(a24)
        const json = JSON.stringify(a24);
        console.log("seq24",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg24 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg24",ecg24)
        setEcg24(ecg24);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a25 = buf.toString()
        console.log(a25)
        const json = JSON.stringify(a25);
        console.log("seq25",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg25 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg25",ecg25)
        setEcg25(ecg25);
      }
      if(data.value[11] ==48 && data.value[12] ==50 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a26 = buf.toString()
        console.log(a26)
        const json = JSON.stringify(a26);
        console.log("seq26",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg26 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg26",ecg26)
        setEcg26(ecg26);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a27 = buf.toString()
        console.log(a27)
        const json = JSON.stringify(a27);
        console.log("seq27",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg27 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg27",ecg27)
        setEcg27(ecg27);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a28 = buf.toString()
        console.log(a28)
        const json = JSON.stringify(a28);
        console.log("seq28",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg28 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg28",ecg28)
        setEcg28(ecg28);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a29 = buf.toString()
        console.log(a29)
        const json = JSON.stringify(a29);
        console.log("seq29",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg29 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg29",ecg29)
        setEcg29(ecg29);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a30 = buf.toString()
        console.log(a30)
        const json = JSON.stringify(a30);
        console.log("seq30",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg30 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg30",ecg30)
        setEcg30(ecg30);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a31 = buf.toString()
        console.log(a31)
        const json = JSON.stringify(a31);
        console.log("seq31",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg31 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg31",ecg31)
        setEcg31(ecg31);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a32 = buf.toString()
        console.log(a32)
        const json = JSON.stringify(a32);
        console.log("seq32",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg32 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg32",ecg32)
        setEcg32(ecg32);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a33 = buf.toString()
        console.log(a33)
        const json = JSON.stringify(a33);
        console.log("seq33",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg33 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg33",ecg33)
        setEcg33(ecg33);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a34 = buf.toString()
        console.log(a34)
        const json = JSON.stringify(a34);
        console.log("seq34",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg34 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg34",ecg34)
        setEcg34(ecg34);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a35 = buf.toString()
        console.log(a35)
        const json = JSON.stringify(a35);
        console.log("seq35",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg35 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg35",ecg35)
        setEcg35(ecg35);
      }
      if(data.value[11] ==48 && data.value[12] ==51 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a36 = buf.toString()
        console.log(a36)
        const json = JSON.stringify(a36);
        console.log("seq35",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg36 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg36",ecg36)
        setEcg36(ecg36);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a37 = buf.toString()
        console.log(a37)
        const json = JSON.stringify(a37);
        console.log("seq36",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg37 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg37",ecg37)
        setEcg37(ecg37);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a38 = buf.toString()
        console.log(a38)
        const json = JSON.stringify(a38);
        console.log("seq37",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg38 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg38",ecg38)
        setEcg38(ecg38);
      }
  
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a39 = buf.toString()
        console.log(a39)
        const json = JSON.stringify(a39);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg39 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg39",ecg39)
        setEcg39(ecg39);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a40 = buf.toString()
        console.log(a40)
        const json = JSON.stringify(a40);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg40 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg40",ecg40)
        setEcg40(ecg40);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a41 = buf.toString()
        console.log(a41)
        const json = JSON.stringify(a41);
        console.log("seq40",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg41 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg41",ecg41)
        setEcg41(ecg41);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a42 = buf.toString()
        console.log(a42)
        const json = JSON.stringify(a42);
        console.log("seq41",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg42 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg42",ecg42)
        setEcg42(ecg42);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a43 = buf.toString()
        console.log(a43)
        const json = JSON.stringify(a43);
        console.log("seq42",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg43 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg43",ecg43)
        setEcg43(ecg43);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a44 = buf.toString()
        console.log(a44)
        const json = JSON.stringify(a44);
        console.log("seq43",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg44 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg44",ecg44)
        setEcg44(ecg44);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a45 = buf.toString()
        console.log(a45)
        const json = JSON.stringify(a45);
        console.log("seq44",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg45 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg45",ecg45)
        setEcg45(ecg45);
      }
      if(data.value[11] ==48 && data.value[12] ==52 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a46 = buf.toString()
        console.log(a46)
        const json = JSON.stringify(a46);
        console.log("seq45",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg46 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg46",ecg46)
        setEcg46(ecg46);
      }
      if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a47 = buf.toString()
        console.log(a47)
        const json = JSON.stringify(a47);
        console.log("seq46",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg47 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg47",ecg47)
        setEcg47(ecg47);
      }
      if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a48 = buf.toString()
        console.log(a48)
        const json = JSON.stringify(a48);
        console.log("seq47",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg48 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg48",ecg48)
        setEcg48(ecg48);
      }
      if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a49 = buf.toString()
        console.log(a49)
        const json = JSON.stringify(a49);
        console.log("seq48",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg49 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg49",ecg49)
        setEcg49(ecg49);
      }
      if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a49_a = buf.toString()
        console.log(a49_a)
        const json = JSON.stringify(a49_a);
        console.log("seq49",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg50 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg50",ecg50)
        setEcg50(ecg50);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a50 = buf.toString()
        console.log(a50)
        const json = JSON.stringify(a50);
        console.log("seq50",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg51 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg51",ecg51)
        setEcg51(ecg51);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a51 = buf.toString()
        console.log(a51)
        const json = JSON.stringify(a51);
        console.log("seq51",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg52 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg52",ecg52)
        setEcg52(ecg52);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a52 = buf.toString()
        console.log(a52)
        const json = JSON.stringify(a52);
        console.log("seq52",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg53 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg53",ecg53)
        setEcg53(ecg53);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a53 = buf.toString()
        console.log(a53)
        const json = JSON.stringify(a53);
        console.log("seq53",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg54 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg54",ecg54)
        setEcg54(ecg54);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a54 = buf.toString()
        console.log(a54)
        const json = JSON.stringify(a54);
        console.log("seq54",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg55 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg55",ecg55)
        setEcg55(ecg55);
      }
          if(data.value[11] ==48 && data.value[12] ==53 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a55 = buf.toString()
        console.log(a55)
        const json = JSON.stringify(a55);
        console.log("seq55",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg56 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg56",ecg56)
        setEcg56(ecg56);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a56 = buf.toString()
        console.log(a56)
        const json = JSON.stringify(a56);
        console.log("seq56",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg57 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg57",ecg57)
        setEcg57(ecg57);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a57 = buf.toString()
        console.log(a57)
        const json = JSON.stringify(a57);
        console.log("seq57",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg58 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg58",ecg58)
        setEcg58(ecg58);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a58 = buf.toString()
        console.log(a58)
        const json = JSON.stringify(a58);
        console.log("seq58",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg59 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg59",ecg59)
        setEcg59(ecg59);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a59 = buf.toString()
        console.log(a59)
        const json = JSON.stringify(a59);
        console.log("seq59",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg60 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg60",ecg60)
        setEcg60(ecg60);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a60 = buf.toString()
        console.log(a60)
        const json = JSON.stringify(a60);
        console.log("seq60",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg61 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg61",ecg61)
        setEcg61(ecg61);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a61 = buf.toString()
        console.log(a61)
        const json = JSON.stringify(a61);
        console.log("seq61",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg62 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg62",ecg62)
        setEcg62(ecg62);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a62 = buf.toString()
        console.log(a62)
        const json = JSON.stringify(a62);
        console.log("seq62",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
                    const ecg63 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg63",ecg63)
        setEcg63(ecg63);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a63 = buf.toString()
        console.log(a63)
        const json = JSON.stringify(a63);
        console.log("seq63",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg64 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg64",ecg64)
        setEcg64(ecg64);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a64 = buf.toString()
        console.log(a64)
        const json = JSON.stringify(a64);
        console.log("seq64",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg65 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg65",ecg65)
        setEcg65(ecg65);
      }
          if(data.value[11] ==48 && data.value[12] ==54 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a65 = buf.toString()
        console.log(a65)
        const json = JSON.stringify(a65);
        console.log("seq65",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg66 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg66",ecg66)
        setEcg66(ecg66);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a66 = buf.toString()
        console.log(a66)
        const json = JSON.stringify(a66);
        console.log("seq66",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg67 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg67",ecg67)
        setEcg67(ecg67);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a67 = buf.toString()
        console.log(a67)
        const json = JSON.stringify(a67);
        console.log("seq67",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg68 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg68",ecg68)
        setEcg68(ecg68);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a68 = buf.toString()
        console.log(a68)
        const json = JSON.stringify(a68);
        console.log("seq68",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg69 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg69",ecg69)
        setEcg69(ecg69);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a69 = buf.toString()
        console.log(a69)
        const json = JSON.stringify(a69);
        console.log("seq69",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg70 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg70",ecg70)
        setEcg70(ecg70);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a70 = buf.toString()
        console.log(a70)
        const json = JSON.stringify(a70);
        console.log("seq70",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
                    const ecg71 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg71",ecg71)
        setEcg71(ecg71);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a71 = buf.toString()
        console.log(a71)
        const json = JSON.stringify(a71);
        console.log("seq71",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg72 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg72",ecg72)
        setEcg72(ecg72);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a72 = buf.toString()
        console.log(a72)
        const json = JSON.stringify(a72);
        console.log("seq72",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg73 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg73",ecg73)
        setEcg73(ecg73);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a73 = buf.toString()
        console.log(a73)
        const json = JSON.stringify(a73);
        console.log("seq73",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg74 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg74",ecg74)
        setEcg74(ecg74);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a74 = buf.toString()
        console.log(a74)
        const json = JSON.stringify(a74);
        console.log("seq74",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg75 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg75",ecg75)
        setEcg75(ecg75);
      }
          if(data.value[11] ==48 && data.value[12] ==55 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a75 = buf.toString()
        console.log(a75)
        const json = JSON.stringify(a75);
        console.log("seq75",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg76 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg76",ecg76)
        setEcg76(ecg76);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a76 = buf.toString()
        console.log(a76)
        const json = JSON.stringify(a76);
        console.log("seq76",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg77 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg77",ecg77)
        setEcg77(ecg77);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a77 = buf.toString()
        console.log(a77)
        const json = JSON.stringify(a77);
        console.log("seq77",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg78 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg78",ecg78)
        setEcg78(ecg78);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a78 = buf.toString()
        console.log(a78)
        const json = JSON.stringify(a78);
        console.log("seq78",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg79 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg79",ecg79)
        setEcg79(ecg79);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a79 = buf.toString()
        console.log(a79)
        const json = JSON.stringify(a79);
        console.log("seq79",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg80 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg80",ecg80)
        setEcg80(ecg80);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a80 = buf.toString()
        console.log(a80)
        const json = JSON.stringify(a80);
        console.log("seq80",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg81 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg81",ecg81)
        setEcg81(ecg81);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a81 = buf.toString()
        console.log(a81)
        const json = JSON.stringify(a81);
        console.log("seq81",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg82 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg82",ecg82)
        setEcg82(ecg82);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a82= buf.toString()
        console.log(a82)
        const json = JSON.stringify(a82);
        console.log("seq82",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg83 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg83",ecg83)
        setEcg83(ecg83);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a83 = buf.toString()
        console.log(a83)
        const json = JSON.stringify(a83);
        console.log("seq83",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg84 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg84",ecg84)
        setEcg84(ecg84);
      }
          if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a84 = buf.toString()
        console.log(a84)
        const json = JSON.stringify(a84);
        console.log("seq84",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg85 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg85",ecg85)
        setEcg85(ecg85);
      }
        if(data.value[11] ==48 && data.value[12] ==56 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a85 = buf.toString()
        console.log(a85)
        const json = JSON.stringify(a85);
        console.log("seq85",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg86 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg86",ecg86)
        setEcg86(ecg86);
      }
          if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a86 = buf.toString()
        console.log(a86)
        const json = JSON.stringify(a86);
        console.log("seq86",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg87 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg87",ecg87)
        setEcg87(ecg87);
      }
          if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a87= buf.toString()
        console.log(a87)
        const json = JSON.stringify(a87);
        console.log("seq87",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg88 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg88",ecg88)
        setEcg88(ecg88);
      }
          if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a88 = buf.toString()
        console.log(a)
        const json = JSON.stringify(a88);
        console.log("seq88",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg89 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg89",ecg89)
        setEcg89(ecg89);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==51){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a89 = buf.toString()
        console.log(a89)
        const json = JSON.stringify(a89);
        console.log("seq89",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg90 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg90",ecg90)
        setEcg90(ecg90);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==52){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a90 = buf.toString()
        console.log(a90)
        const json = JSON.stringify(a90);
        console.log("seq90",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg91 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg91",ecg91)
        setEcg91(ecg91);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==53){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a91 = buf.toString()
        console.log(a91)
        const json = JSON.stringify(a91);
        console.log("seq91",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg92 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg92",ecg92)
        setEcg92(ecg92);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==54){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a92 = buf.toString()
        console.log(a92)
        const json = JSON.stringify(a92);
        console.log("seq92",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg93 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg93",ecg93)
        setEcg93(ecg93);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a93 = buf.toString()
        console.log(a93)
        const json = JSON.stringify(a93);
        console.log("seq93",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg94 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg94",ecg94)
        setEcg94(ecg94);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a94 = buf.toString()
        console.log(a94)
        const json = JSON.stringify(a94);
        console.log("seq94",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg95 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg95",ecg95)
        setEcg95(ecg95);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a95 = buf.toString()
        console.log(a95)
        const json = JSON.stringify(a95);
        console.log("seq95",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg96 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg96",ecg96)
        setEcgReceived("recevied")
        setEcg96(ecg96);
      }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a96 = buf.toString()
        console.log(a96)
        const json = JSON.stringify(a96);
        console.log("seq96",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg97 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg97",ecg97)
        setEcgReceived("recevied")
        setEcg97(ecg97);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a97 = buf.toString()
        console.log(a97)
        const json = JSON.stringify(a97);
        console.log("seq97",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg98 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg98",ecg98)
        setEcgReceived("recevied")
        setEcg98(ecg98);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a98 = buf.toString()
        console.log(a98)
        const json = JSON.stringify(a98);
        console.log("seq98",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg99 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg99",ecg99)
        setEcgReceived("recevied")
        setEcg99(ecg99);
      }
      if(data.value[11] ==48 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a99 = buf.toString()
        console.log(a99)
        const json = JSON.stringify(a99);
        console.log("seq98",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg100 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg100",ecg100)
        setEcgReceived("recevied")
        setEcg100(ecg100);
      }
      ////////////////////////////////////////////////////////////////////////////////////////////
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==48){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a101 = buf.toString()
        //console.log(a2)
        const json = JSON.stringify(a101);
        /*
        
        console.log("seq5",json.slice(18,21))
        console.log("ecg6",json.slice(79,83))
        console.log("ecg7",json.slice(89,93))
        console.log("ecg8",json.slice(99,103))
        console.log("ecg9",json.slice(109,113))
        console.log("ecg10",json.slice(119,123))
        */
        const ecg101 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg101",ecg101)
        setEcg101(ecg101);
  
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==49){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a102 = buf.toString()
        //console.log(a2)
        const json = JSON.stringify(a102);
        /*
        
        console.log("seq5",json.slice(18,21))
        console.log("ecg6",json.slice(79,83))
        console.log("ecg7",json.slice(89,93))
        console.log("ecg8",json.slice(99,103))
        console.log("ecg9",json.slice(109,113))
        console.log("ecg10",json.slice(119,123))
        */
        const ecg102 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ECG102",ecg102)
        setEcg102(ecg102);
  
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==50){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a103 = buf.toString()
        //console.log(a3)
         const json = JSON.stringify(a103);
        /*
       
        console.log("seq6",json.slice(18,21))
        console.log("ecg11",json.slice(79,83))
        console.log("ecg12",json.slice(89,93))
        console.log("ecg13",json.slice(99,103))
        console.log("ecg14",json.slice(109,113))
        console.log("ecg15",json.slice(119,123))
        */
        const ecg103 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg103",ecg103)
        setEcg103(ecg103);
  
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==51){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a104 = buf.toString()
        //console.log(a4)
        const json = JSON.stringify(a104);
        /*
        
        console.log("seq7",json.slice(18,21))
        console.log("ecg16",json.slice(79,83))
        console.log("ecg17",json.slice(89,93))
        console.log("ecg18",json.slice(99,103))
        console.log("ecg19",json.slice(109,113))
        console.log("ecg20",json.slice(119,123))
        */
        const ecg104 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg104",ecg104)
        setEcg104(ecg104);
  
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==52){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a105 = buf.toString()
        console.log(a105)
        const json = JSON.stringify(a105);
        /*
        console.log("seq8",json.slice(18,21))
        console.log("ecg21",json.slice(79,83))
        console.log("ecg22",json.slice(89,93))
        console.log("ecg23",json.slice(99,103))
        console.log("ecg24",json.slice(109,113))
        console.log("ecg25",json.slice(119,123))    
        */
        const ecg105 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg105",ecg105)
        setEcg105(ecg105);  
      }   
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a106 = buf.toString()
        console.log(a106)
        const json = JSON.stringify(a106);
        /*
        console.log("seq9",json.slice(18,21))
        console.log("ecg26",json.slice(79,83))
        console.log("ecg27",json.slice(89,93))
        console.log("ecg28",json.slice(99,103))
        console.log("ecg29",json.slice(109,113))
        console.log("ecg30",json.slice(119,123))
        */
        const ecg106 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg106",ecg106)
        setEcg106(ecg106);
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a107 = buf.toString()
        console.log(a107)
        const json = JSON.stringify(a107);
        console.log("seq",json.slice(18,21))
        console.log("ecg31",json.slice(79,83))
        console.log("ecg32",json.slice(89,93))
        console.log("ecg33",json.slice(99,103))
        console.log("ecg34",json.slice(109,113))
        console.log("ecg35",json.slice(119,123))      
        const ecg107 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg107",ecg107)
        setEcg107(ecg107);
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a108 = buf.toString()
        console.log(a108)
        const json = JSON.stringify(a108);
        console.log("seq",json.slice(18,21))
        console.log("ecg36",json.slice(79,83))
        console.log("ecg37",json.slice(89,93))
        console.log("ecg38",json.slice(99,103))
        console.log("ecg39",json.slice(109,113))
        console.log("ecg40",json.slice(119,123))
        const ecg108 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg108",ecg108)
        setEcg108(ecg108);
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a109 = buf.toString()
        console.log(a109)
        const json = JSON.stringify(a109);
        console.log("seq12",json.slice(18,21))
        console.log("ecg41",json.slice(79,83))
        console.log("ecg42",json.slice(89,93))
        console.log("ecg43",json.slice(99,103))
        console.log("ecg44",json.slice(109,113))
        console.log("ecg45",json.slice(119,123))
        const ecg109 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg109",ecg109)
        setEcg109(ecg109);
      }
      if(data.value[11] ==49 && data.value[12] ==48 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a110 = buf.toString()
        console.log(a110)
        const json = JSON.stringify(a110);
        console.log("seq",json.slice(18,21))
        console.log("ecg46",json.slice(79,83))
        console.log("ecg47",json.slice(89,93))
        console.log("ecg48",json.slice(99,103))
        console.log("ecg49",json.slice(109,113))
        console.log("ecg50",json.slice(119,123))
        const ecg110 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg110",ecg10)
        setEcg110(ecg110);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a111 = buf.toString()
        console.log(a11)
        const json = JSON.stringify(a111);
        console.log("seq111",json.slice(18,21))
        console.log("ecg51",json.slice(79,83))
        console.log("ecg52",json.slice(89,93))
        console.log("ecg53",json.slice(99,103))
        console.log("ecg54",json.slice(109,113))
        console.log("ecg55",json.slice(119,123))
        const ecg111 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg111",ecg11)
        setEcg111(ecg111);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a112 = buf.toString()
        console.log(a112)
        const json = JSON.stringify(a112);
        console.log("seq112",json.slice(18,21))
        console.log("ecg56",json.slice(79,83))
        console.log("ecg57",json.slice(89,93))
        console.log("ecg58",json.slice(99,103))
        console.log("ecg59",json.slice(109,113))
        console.log("ecg60",json.slice(119,123))
        const ecg112 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg112",ecg112)
        setEcg112(ecg112);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a113 = buf.toString()
        console.log(a113)
        const json = JSON.stringify(a113);
        console.log("seq113",json.slice(18,21))
        console.log("ecg61",json.slice(79,83))
        console.log("ecg62",json.slice(89,93))
        console.log("ecg63",json.slice(99,103))
        console.log("ecg64",json.slice(109,113))
        console.log("ecg65",json.slice(119,123))
        const ecg113 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg113",ecg113)
        setEcg113(ecg113);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a114 = buf.toString()
        console.log(a114)
        const json = JSON.stringify(a114);
        console.log("seq14",json.slice(18,21))
        console.log("ecg66",json.slice(79,83))
        console.log("ecg67",json.slice(89,93))
        console.log("ecg68",json.slice(99,103))
        console.log("ecg69",json.slice(109,113))
        console.log("ecg70",json.slice(119,123))
        const ecg114 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg114",ecg114)
        setEcg114(ecg114);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a115 = buf.toString()
        console.log(a115)
        const json = JSON.stringify(a115);
        console.log("seq115",json.slice(18,21))
        console.log("ecg71",json.slice(79,83))
        console.log("ecg72",json.slice(89,93))
        console.log("ecg73",json.slice(99,103))
        console.log("ecg74",json.slice(109,113))
        console.log("ecg75",json.slice(119,123))
        const ecg115 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg115",ecg115)
        setEcg115(ecg115);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a116 = buf.toString()
        console.log(a16)
        const json = JSON.stringify(a116);
        console.log("seq16",json.slice(18,21))
        console.log("ecg76",json.slice(79,83))
        console.log("ecg77",json.slice(89,93))
        console.log("ecg78",json.slice(99,103))
        console.log("ecg79",json.slice(109,113))
        console.log("ecg80",json.slice(119,123))
        const ecg116 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg116",ecg116)
        setEcg116(ecg116);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a117 = buf.toString()
        console.log(a117)
        const json = JSON.stringify(a117);
        console.log("seq17",json.slice(18,21))
        console.log("ecg81",json.slice(79,83))
        console.log("ecg82",json.slice(89,93))
        console.log("ecg83",json.slice(99,103))
        console.log("ecg84",json.slice(109,113))
        console.log("ecg85",json.slice(119,123))
        const ecg117 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg117",ecg17)
        setEcg117(ecg117);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a118 = buf.toString()
        console.log(a118)
        const json = JSON.stringify(a118);
        console.log("seq118",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg118 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg118",ecg118)
        setEcg118(ecg118);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a119 = buf.toString()
        console.log(a119)
        const json = JSON.stringify(a119);
        console.log("seq19",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg119 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg119",ecg119)
        setEcg119(ecg119);
      }
      if(data.value[11] ==49 && data.value[12] ==49 && data.value[13] ==57){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a120 = buf.toString()
        console.log(a120)
        const json = JSON.stringify(a120);
        console.log("seq120",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg120 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg120",ecg120)
        setEcg120(ecg120);      
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a121 = buf.toString()
        console.log(a121)
        const json = JSON.stringify(a121);
        console.log("seq121",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg121 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg121",ecg121)
        setEcg121(ecg121);
      }
     if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a122 = buf.toString()
        console.log(a122)
        const json = JSON.stringify(a122);
        console.log("seq122",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg122 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg122",ecg122)
        setEcg122(ecg122);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a123 = buf.toString()
        console.log(a123)
        const json = JSON.stringify(a123);
        console.log("seq123",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg123 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg123",ecg123)
        setEcg123(ecg123);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a124 = buf.toString()
        console.log(a124)
        const json = JSON.stringify(a124);
        console.log("seq124",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg124 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg124",ecg124)
        setEcg124(ecg124);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a125 = buf.toString()
        console.log(a125)
        const json = JSON.stringify(a125);
        console.log("seq125",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg125 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg125",ecg125)
        setEcg125(ecg125);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a126 = buf.toString()
        console.log(a126)
        const json = JSON.stringify(a126);
        console.log("seq126",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg126 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg126",ecg126)
        setEcg126(ecg126);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a127 = buf.toString()
        console.log(a127)
        const json = JSON.stringify(a127);
        console.log("seq127",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg127 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg127",ecg127)
        setEcg127(ecg127);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a128 = buf.toString()
        console.log(a128)
        const json = JSON.stringify(a128);
        console.log("seq128",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg128 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg128",ecg128)
        setEcg128(ecg128);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a129 = buf.toString()
        console.log(a129)
        const json = JSON.stringify(a129);
        console.log("seq29",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg129 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg129",ecg129)
        setEcg129(ecg129);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a130 = buf.toString()
        console.log(a130)
        const json = JSON.stringify(a130);
        console.log("seq30",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg130 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg130",ecg130)
        setEcg130(ecg130);
      }
      if(data.value[11] ==49 && data.value[12] ==50 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a131 = buf.toString()
        console.log(a131)
        const json = JSON.stringify(a131);
        console.log("seq131",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg131 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg131",ecg131)
        setEcg131(ecg131);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a132 = buf.toString()
        console.log(a132)
        const json = JSON.stringify(a132);
        console.log("seq132",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg132 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg132",ecg132)
        setEcg132(ecg132);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a133 = buf.toString()
        console.log(a133)
        const json = JSON.stringify(a133);
        console.log("seq133",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg133 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg133",ecg133)
        setEcg133(ecg133);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a134 = buf.toString()
        console.log(a134)
        const json = JSON.stringify(a134);
        console.log("seq34",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg134 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg134",ecg134)
        setEcg134(ecg134);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a135 = buf.toString()
        console.log(a135)
        const json = JSON.stringify(a135);
        console.log("seq135",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg135 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg135",ecg135)
        setEcg135(ecg135);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a136 = buf.toString()
        console.log(a136)
        const json = JSON.stringify(a136);
        console.log("seq136",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg136 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg136",ecg136)
        setEcg136(ecg136);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a137 = buf.toString()
        console.log(a137)
        const json = JSON.stringify(a137);
        console.log("seq137",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg137 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg137",ecg137)
        setEcg137(ecg137);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a138 = buf.toString()
        console.log(a138)
        const json = JSON.stringify(a138);
        console.log("seq138",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg138 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg38",ecg138)
        setEcg138(ecg138);
      }
  
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a139 = buf.toString()
        console.log(a139)
        const json = JSON.stringify(a139);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg139 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg139",ecg139)
        setEcg39(ecg139);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a140 = buf.toString()
        console.log(a140)
        const json = JSON.stringify(a140);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg140 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg140",ecg140)
        setEcg140(ecg140);
      }
      if(data.value[11] ==49 && data.value[12] ==51 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a141 = buf.toString()
        console.log(a141)
        const json = JSON.stringify(a141);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg141 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg141",ecg141)
        setEcg141(ecg141);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a142 = buf.toString()
        console.log(a142)
        const json = JSON.stringify(a142);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg142 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg142",ecg142)
        setEcg142(ecg142);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a143 = buf.toString()
        console.log(a143)
        const json = JSON.stringify(a143);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg143 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg143",ecg143)
        setEcg143(ecg143);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a144 = buf.toString()
        console.log(a144)
        const json = JSON.stringify(a144);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg144 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg144",ecg144)
        setEcg144(ecg144);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a145 = buf.toString()
        console.log(a145)
        const json = JSON.stringify(a145);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg145 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg145",ecg145)
        setEcg145(ecg145);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a146 = buf.toString()
        console.log(a146)
        const json = JSON.stringify(a146);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg146 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg146",ecg146)
        setEcg146(ecg146);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a147 = buf.toString()
        console.log(a147)
        const json = JSON.stringify(a147);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg147 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg147",ecg147)
        setEcg147(ecg147);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a148 = buf.toString()
        console.log(a148)
        const json = JSON.stringify(a148);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg148 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg148",ecg148)
        setEcg148(ecg148);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a149 = buf.toString()
        console.log(a149)
        const json = JSON.stringify(a149);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg149 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg149",ecg149)
        setEcg149(ecg149);
      }
      if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a150 = buf.toString()
        console.log(a150)
        const json = JSON.stringify(a150);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg150 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg150",ecg150)
        setEcg150(ecg150);
      }
          if(data.value[11] ==49 && data.value[12] ==52 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a151 = buf.toString()
        console.log(a151)
        const json = JSON.stringify(a151);
        console.log("seq151",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg151 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg151",ecg151)
        setEcg151(ecg151);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a152 = buf.toString()
        console.log(a152)
        const json = JSON.stringify(a152);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg152 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg152",ecg152)
        setEcg152(ecg152);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a153 = buf.toString()
        console.log(a153)
        const json = JSON.stringify(a153);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg153 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg153",ecg153)
        setEcg153(ecg153);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a154 = buf.toString()
        console.log(a154)
        const json = JSON.stringify(a154);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg154 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg154",ecg154)
        setEcg154(ecg154);
      }
        if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a155 = buf.toString()
        console.log(a155)
        const json = JSON.stringify(a155);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg155 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg155",ecg155)
        setEcg155(ecg155);
      }
        if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a156 = buf.toString()
        console.log(a156)
        const json = JSON.stringify(a156);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg156 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg156",ecg156)
        setEcg156(ecg156);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a157 = buf.toString()
        console.log(a157)
        const json = JSON.stringify(a157);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg157 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg157",ecg157)
        setEcg157(ecg157);
      }
        if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a158 = buf.toString()
        console.log(a158)
        const json = JSON.stringify(a158);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg158 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg158",ecg158)
        setEcg158(ecg158);
      }
        if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a159 = buf.toString()
        console.log(a159)
        const json = JSON.stringify(a159);
        console.log("seq58",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg159 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg59",ecg159)
        setEcg159(ecg159);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a160 = buf.toString()
        console.log(a160)
        const json = JSON.stringify(a160);
        console.log("seq59",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
              const ecg160 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg160",ecg160)
        setEcg60(ecg160);
      }
          if(data.value[11] ==49 && data.value[12] ==53 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a161 = buf.toString()
        console.log(a161)
        const json = JSON.stringify(a161);
        console.log("seq60",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg161 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg161",ecg161)
        setEcg161(ecg161);
      }
        if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a162 = buf.toString()
        console.log(a162)
        const json = JSON.stringify(a162);
        console.log("seq61",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg162 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg162",ecg162)
        setEcg162(ecg162);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a163 = buf.toString()
        console.log(a163)
        const json = JSON.stringify(a163);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
                    const ecg163 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg163",ecg163)
        setEcg163(ecg163);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a164 = buf.toString()
        console.log(a164)
        const json = JSON.stringify(a164);
        console.log("seq63",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg164 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg164",ecg164)
        setEcg164(ecg164);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a165 = buf.toString()
        console.log(a165)
        const json = JSON.stringify(a165);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg165 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg165",ecg165)
        setEcg165(ecg165);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a166 = buf.toString()
        console.log(a166)
        const json = JSON.stringify(a166);
        console.log("seq65",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg166 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg166",ecg166)
        setEcg166(ecg166);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a167 = buf.toString()
        console.log(a167)
        const json = JSON.stringify(a167);
        console.log("seq66",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg167 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg167",ecg167)
        setEcg167(ecg167);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a168 = buf.toString()
        console.log(a168)
        const json = JSON.stringify(a168);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg168 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg168",ecg168)
        setEcg168(ecg168);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a169 = buf.toString()
        console.log(a169)
        const json = JSON.stringify(a169);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg169 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg169",ecg169)
        setEcg169(ecg169);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a170 = buf.toString()
        console.log(a170)
        const json = JSON.stringify(a170);
        console.log("seq69",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg170 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg170",ecg170)
        setEcg170(ecg170);
      }
          if(data.value[11] ==49 && data.value[12] ==54 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a171 = buf.toString()
        console.log(a171)
        const json = JSON.stringify(a171);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
                    const ecg171 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg171",ecg171)
        setEcg171(ecg171);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a172 = buf.toString()
        console.log(a172)
        const json = JSON.stringify(a172);
        console.log("seq71",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg172 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg72",ecg172)
        setEcg172(ecg172);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a173 = buf.toString()
        console.log(a173)
        const json = JSON.stringify(a173);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg173 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg173",ecg173)
        setEcg173(ecg173);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a174 = buf.toString()
        console.log(a174)
        const json = JSON.stringify(a174);
        console.log("seq73",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg174 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg174",ecg174)
        setEcg174(ecg174);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a175 = buf.toString()
        console.log(a175)
        const json = JSON.stringify(a175);
        console.log("seq74",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg175 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg175",ecg175)
        setEcg175(ecg175);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a176 = buf.toString()
        console.log(a176)
        const json = JSON.stringify(a176);
        console.log("seq75",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg176 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg176",ecg176)
        setEcg176(ecg176);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a177 = buf.toString()
        console.log(a177)
        const json = JSON.stringify(a177);
        console.log("seq76",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg177 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg177",ecg177)
        setEcg177(ecg177);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a178 = buf.toString()
        console.log(a178)
        const json = JSON.stringify(a178);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg178 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg178",ecg178)
        setEcg178(ecg178);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a179 = buf.toString()
        console.log(a179)
        const json = JSON.stringify(a179);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg179 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg179",ecg179)
        setEcg179(ecg179);
      }
        if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a180 = buf.toString()
        console.log(a180)
        const json = JSON.stringify(a180);
        console.log("seq79",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg180 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg180",ecg180)
        setEcg180(ecg180);
      }
          if(data.value[11] ==49 && data.value[12] ==55 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a181 = buf.toString()
        console.log(a181)
        const json = JSON.stringify(a181);
        console.log("seq80",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg181 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg181",ecg181)
        setEcg181(ecg181);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a182 = buf.toString()
        console.log(a182)
        const json = JSON.stringify(a182);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg182 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg182",ecg182)
        setEcg182(ecg182);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a183= buf.toString()
        console.log(a183)
        const json = JSON.stringify(a183);
        console.log("seq82",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg183 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg183",ecg183)
        setEcg183(ecg183);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a184 = buf.toString()
        console.log(a184)
        const json = JSON.stringify(a184);
        console.log("seq83",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg184 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg184",ecg184)
        setEcg184(ecg184);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a185 = buf.toString()
        console.log(a185)
        const json = JSON.stringify(a185);
        console.log("seq84",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg185 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg185",ecg185)
        setEcg185(ecg185);
      }
        if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a186 = buf.toString()
        console.log(a186)
        const json = JSON.stringify(a186);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg186 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg186",ecg186)
        setEcg186(ecg186);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a187 = buf.toString()
        console.log(a187)
        const json = JSON.stringify(a187);
        console.log("seq86",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg187 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg187",ecg187)
        setEcg187(ecg187);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a188= buf.toString()
        console.log(a188)
        const json = JSON.stringify(a188);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg188 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg188",ecg188)
        setEcg188(ecg188);
      }
          if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a189 = buf.toString()
        console.log(a189)
        const json = JSON.stringify(a189);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg189 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg189",ecg189)
        setEcg189(ecg189);
      }
      if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==56){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a190 = buf.toString()
        console.log(a190)
        const json = JSON.stringify(a190);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg190 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg190",ecg190)
        setEcg190(ecg190);
      }
      if(data.value[11] ==49 && data.value[12] ==56 && data.value[13] ==57){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a191 = buf.toString()
        console.log(a191)
        const json = JSON.stringify(a191);
        console.log("seq90",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg191 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg91",ecg191)
        setEcg191(ecg191);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==48){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a192 = buf.toString()
        console.log(a192)
        const json = JSON.stringify(a192);
        console.log("seq91",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg192 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg192",ecg192)
        setEcg192(ecg192);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==49){
        //console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        //console.log(buf)
        var a193 = buf.toString()
        console.log(a193)
        const json = JSON.stringify(a193);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg193 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg193",ecg193)
        setEcg193(ecg193);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a194 = buf.toString()
        console.log(a194)
        const json = JSON.stringify(a194);
        console.log("seq93",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg194 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg194",ecg194)
        setEcg194(ecg194);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==51){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a195 = buf.toString()
        console.log(a195)
        const json = JSON.stringify(a195);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg195 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg195",ecg195)
        setEcg195(ecg195);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==52){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a196 = buf.toString()
        console.log(a196)
        const json = JSON.stringify(a196);
        console.log("seq95",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg196 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg196",ecg196)
        setEcgReceived("recevied")
        setEcg196(ecg196);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==53){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a197 = buf.toString()
        console.log(a197)
        const json = JSON.stringify(a197);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg197 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg197",ecg197)
        setEcgReceived("recevied")
        setEcg197(ecg197);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==54){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a198 = buf.toString()
        console.log(a198)
        const json = JSON.stringify(a198);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg198 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg198",ecg198)
        setEcgReceived("recevied")
        setEcg198(ecg198);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==55){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a199 = buf.toString()
        console.log(a199)
        const json = JSON.stringify(a199);
        console.log("seq95",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg199= json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg199",ecg199)
        setEcgReceived("recevied")
        setEcg199(ecg199);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==56){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a200 = buf.toString()
        console.log(a200)
        const json = JSON.stringify(a200);
        console.log("seq95",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg200 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg200",ecg200)
        setEcgReceived("recevied")
        setEcg200(ecg200);
      }
      if(data.value[11] ==49 && data.value[12] ==57 && data.value[13] ==57){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a201 = buf.toString()
        console.log(a201)
        const json = JSON.stringify(a201);
        console.log("seq95",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg201 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg",ecg201)
        setEcg201(ecg201);
      }
      if(data.value[11] ==50 && data.value[12] ==48 && data.value[13] ==48){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a202 = buf.toString()
        console.log(a202)
        const json = JSON.stringify(a202);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg202 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg202",ecg202)
        setEcgReceived("recevied")
        setEcg202(ecg202);
      }
      if(data.value[11] ==50 && data.value[12] ==48 && data.value[13] ==49){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a203 = buf.toString()
        console.log(a203)
        const json = JSON.stringify(a203);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg203 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg",ecg203)
        setEcgReceived("recevied")
        setEcg203(ecg203);
      }
      if(data.value[11] ==50 && data.value[12] ==48 && data.value[13] ==50){
        console.log("ecg",data.value)
        const buf = Buffer.from(data.value);
        console.log(buf)
        var a204 = buf.toString()
        console.log(a204)
        const json = JSON.stringify(a204);
        console.log("seq",json.slice(18,21))
        console.log("ecg1",json.slice(79,83))
        console.log("ecg2",json.slice(89,93))
        console.log("ecg3",json.slice(99,103))
        console.log("ecg4",json.slice(109,113))
        console.log("ecg5",json.slice(119,123))
        const ecg204 = json.slice(79,83) + ',' + json.slice(89,93) + ',' + json.slice(99,103) + ',' + json.slice(109,113) + "," + json.slice(119,123);
        console.log("ecg204",ecg204)
        setEcgReceived("recevied")
        setEcg204(ecg204);
      }
      else{
        console.log("hi freinds")
      }
  
      /*
            <View style={styles.output}>
             <Text style={styles.output}> 
                Device Id    :   {devID}
              </Text>
              <Text style={styles.output}> 
                timeStamp    :   {time}
              </Text>
              <Text style={styles.output}> 
                SPo2         :    {spo2} %
              </Text>
              <Text style={styles.output}> 
                Temperature  : {temp}  °F
              </Text>
  
            </View>  
      */
    }
    const final = () => {
      /* ECG 
      var Final_ecg = ecg1+"," +ecg2 +"," +ecg3+"," +ecg4+"," +ecg5+"," + ecg6+"," + ecg7+"," + ecg8+"," + ecg9+"," + ecg10+","
       + ecg11+"," + ecg12+"," + ecg13+"," + ecg14+"," + ecg15+"," + ecg16+"," + ecg17+"," + ecg18+"," + ecg19+"," + ecg20+"," 
       + ecg21+"," + ecg22+"," + ecg23+"," + ecg24+"," + ecg25+"," + ecg26+"," + ecg27+"," + ecg28+"," + ecg29+"," + ecg30+"," 
       + ecg31+"," + ecg32+"," + ecg33+"," + ecg34+"," + ecg35+"," + ecg36+"," + ecg37+"," + ecg38+"," + ecg39+"," + ecg40+"," 
       + ecg41+"," + ecg42+"," + ecg43+"," + ecg44+"," + ecg45+"," + ecg46+"," + ecg47+"," + ecg48+"," + ecg49+"," + ecg50+"," 
       + ecg51+"," + ecg52+"," + ecg53+"," + ecg54+"," + ecg55+"," +  ecg56+"," + ecg57+"," + ecg58+"," + ecg59+"," + ecg60+"," 
       + ecg61+"," + ecg62+"," + ecg63+"," + ecg64+"," + ecg65+"," + ecg66+"," + ecg67+"," + ecg68+"," + ecg69+"," + ecg70+","
        ecg71+"," + ecg72+"," + ecg73+"," + ecg74+"," + ecg75+"," + ecg76+"," + ecg77+"," + ecg78+"," + ecg79+"," + ecg80+",";
  
      var Final_ecg_2= ecg81+"," + ecg82+"," + ecg83+"," + ecg84+"," + ecg85+"," + ecg86+"," + ecg87+"," + ecg88+"," + ecg89+"," 
       + ecg90+","+ ecg91+"," + ecg92+"," + ecg93+"," + ecg94+"," + ecg95+"," + ecg96+"," + ecg97+"," + ecg98+"," + ecg99+"," + ecg100 +","
       + ecg101+"," +ecg102 +"," +ecg103+"," +ecg104+"," +ecg105+"," + ecg106+"," + ecg107+"," + ecg108+"," + ecg109+"," + ecg110+","
       + ecg111+"," + ecg112+"," + ecg113+"," + ecg114+"," + ecg115+"," + ecg116+"," + ecg117+"," + ecg118+"," + ecg119+"," + ecg120+"," 
       + ecg121+"," + ecg122+"," + ecg123+"," + ecg124+"," + ecg125+"," + ecg126+"," + ecg127+"," + ecg128+"," + ecg129+"," + ecg130+"," 
       + ecg131+"," + ecg132+"," + ecg133+"," + ecg134+"," + ecg135+"," + ecg136+"," + ecg137+"," + ecg138+"," + ecg139+"," + ecg140+"," 
       + ecg141+"," + ecg142+"," + ecg143+"," + ecg144+"," + ecg145+"," + ecg146+"," + ecg147+"," + ecg148+"," + ecg149+"," + ecg150+"," 
       + ecg151+"," + ecg152+"," + ecg153+"," + ecg154+"," + ecg155+"," +  ecg156+"," + ecg157+"," + ecg158+"," + ecg159+"," + ecg160+"," 
       + ecg161+"," + ecg162+"," + ecg163+"," + ecg164+"," + ecg165+"," + ecg166+"," + ecg167+"," + ecg168+"," + ecg169+"," 
  
       var Final_ecg_3= ecg170+","+ecg171+"," + ecg172+"," + ecg173+"," + ecg174+"," + ecg175+"," + ecg176+"," + ecg177+"," + ecg178+"," + ecg179+"," + ecg180+"," +
         ecg181+"," + ecg182+"," + ecg183+"," + ecg184+"," + ecg185+"," + ecg186+"," + ecg187+"," + ecg188+"," + ecg189+"," + ecg190+"," 
         + ecg191+"," + ecg192+"," + ecg193+"," + ecg194+"," + ecg195+"," + ecg196+"," + ecg197+"," + ecg198+"," + ecg199+"," + ecg200+","+ ecg201+","+ ecg202+","+ ecg203+","+ ecg204+",";
       console.log("Final_ecg",Final_ecg);
       console.log("Final_ecg_2",Final_ecg_2);
       console.log("Final_ecg_3",Final_ecg_3);
       var myFinalData= "["+ Final_ecg+Final_ecg_2+Final_ecg_3+"]"
       console.log("data",myFinalData)
       console.log("myFinalData",typeof(myFinalData));
  /*
      var myobj = JSON.parse(Final_ecg);
      console.log("my object:",myobj)
      console.log("typeof my obj",typeof(myobj))
      */
      console.log(devID)
      console.log(time)
      console.log(spo2)
      console.log(temp)
      navigation.navigate('page2', {
  
          Device_Id: {devID},
          TimeStamp: {time},
          Spo2: {spo2},
          Temperature: {temp},
          Heart_rate: {hr},
          Ecg: {myFinalData},
          otherParam: 'anything you want here',
       });
    }
  
  const fun1 = () => {
     //setDevID('1')
     console.log("devID:",devID)
     console.log("Final_ecg:",Final_ecg);
      console.log("time:",time)
      console.log("spo2:",spo2)
      console.log("temp1:",temp)
      navigation.navigate('AddItem', {
  
        Device_Id: {devID},
        TimeStamp: {time},
        Spo2: {spo2},
        Temperature: {temp},
        Heart_rate: {hr},
        Ecg: {Final_ecg},
        otherParam: 'anything you want here',
     });
      
    }
  
    const retrieveConnected = () => {
      BleManager.getConnectedPeripherals([]).then((results) => {
        if (results.length == 0) {
          console.log('No connected peripherals')
        }
        console.log("results",results);
        for (var i = 0; i < results.length; i++) {
          var peripheral = results[i];
          peripheral.connected = true;
          peripherals.set(peripheral.id, peripheral);
          setList(Array.from(peripherals.values()));
        }
      });
    }
  
    const handleDiscoverPeripheral = (peripheral) => {
      console.log('Got ble peripheral', peripheral);
      if (!peripheral.name) {
        peripheral.name = 'NO NAME';
      }
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    const mtu = (peripheral) => {
      console.log('mtu Got ble peripheral', peripheral);
      BleManager.requestMTU(peripheral.id, 517)
        .then((mtu) => {
          // Success code
          console.log("MTU size changed to " + mtu + " bytes");
        })
        .catch((error) => {
          // Failure code
          console.log(error);
        });
      }
  
    const testPeripheral = (peripheral) => {
  
      if (peripheral){
        if (peripheral.connected){
          BleManager.disconnect(peripheral.id);
        }else{
          BleManager.connect(peripheral.id).then(() => {
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              setList(Array.from(peripherals.values()));
            }
            console.log('Connected to ' + peripheral.id);
  
            setTimeout(() => {
  
              /* Test read current RSSI value */
              BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
                console.log('Retrieved peripheral services', peripheralData);
  
                BleManager.readRSSI(peripheral.id).then((rssi) => {
                  console.log('Retrieved actual RSSI value', rssi);
                  let p = peripherals.get(peripheral.id);
                  if (p) {
                    p.rssi = rssi;
                    peripherals.set(peripheral.id, p);
                    setList(Array.from(peripherals.values()));
                  }                
                });                                          
              });
              
              
              BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
                console.log("peripheralInfo",peripheralInfo);
                console.log("peripheralInfo",peripheralInfo.name);
                setConnected(peripheralInfo.name);
                var service = '59462f12-9543-9999-12c8-58b459a2712d';
                var bakeCharacteristic = '5c3a659e-897e-45e1-b016-007107c96df7';
                var crustCharacteristic = '00002902-0000-1000-8000-00805f9b34fb';
  
  
                setTimeout(() => {
                    BleManager.requestMTU(peripheral.id, 517)
                        .then((mtu) => {
                          // Success code
                          console.log("MTU size changed to " + mtu + " bytes");
                    
  
                      BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                        console.log('NOTIFY');
                    setTimeout(() => {
                      BleManager.read(peripheral.id, service, bakeCharacteristic).then(() => {
                        console.log('read ');
                      });
                    }, 500);
                    })
                  }).catch((error) => {
                    console.log('Notification error', error);
                  });
                }, 200);
              });
  
              
  
            }, 900);
          }).catch((error) => {
            console.log('Connection error', error);
          });
        }
      }
  
    }
  
    const fun2 = () => {
     //setDevID('1')
     console.log("devID:",devID)
     console.log("Final_ecg:",Final_ecg);
      console.log("time:",time)
      console.log("spo2:",spo2)
      console.log("temp1:",temp)
      //Orientation.lockToLandscape()
      navigation.navigate('ecg', {
  
        Device_Id: {devID},
        TimeStamp: {time},
        Spo2: {spo2},
        Temperature: {temp},
        Heart_rate: {hr},
        Ecg: {e},
        otherParam: 'anything you want here',
     });
  
      
    }
    const orientationChange = (orientation) => {
      setCurrentOrientation(
        'Current Device Orientation: ' + orientation
      );
    };
    const reset = () => {
      setConnected(null);
      setReceived(null);
      setEcgReceived(null);
    };
  
  
    const getCurrentOrientation = () => {
      Orientation.getOrientation((err, orientation) => {
        alert('Orientation: ' + orientation);
      });
    };
    useEffect(() => {
      console.log("device_id_state",devID)
      console.log("ecg_state",Final_ecg)
      console.log("time_state",time)
      console.log("spo2_state:",spo2)
      console.log("temp_state",temp)
  
      BleManager.start({showAlert: false});
  
      bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
      bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan );
      bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral );
      bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic );
  
      if (Platform.OS === 'android' && Platform.Version >= 23) {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
            if (result) {
              console.log("Permission is OK");
            } else {
              PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                if (result) {
                  console.log("User accept");
                } else {
                  console.log("User refuse");
                }
              });
            }
        });
      }  
      
      return (() => {
        console.log('unmount');
        bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
        bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan );
        bleManagerEmitter.removeListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral );
        bleManagerEmitter.removeListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic );
      })
    }, []);
  
    const renderItem = (item) => {
      const color = item.connected ? 'green' : '#dedede';
      return (
        <ScrollView>
        <TouchableHighlight onPress={() => testPeripheral(item) }>
          <View style={[styles.row, {backgroundColor: color}]}>
            <Text style={{fontSize: 15, textAlign: 'center', color: '#14153e', padding: 10, fontWeight:"bold"}}>{item.name}</Text>
            <Text style={{fontSize: 10, textAlign: 'center', color: '#77767c', padding: 2}}>RSSI: {item.rssi}</Text>
            <Text style={{fontSize: 8, textAlign: 'center', color: '#77767c', padding: 2, paddingBottom: 20}}>{item.id}</Text>
          </View>
        </TouchableHighlight>
        </ScrollView>
      );
    }
  
    return (
      <>
        <SafeAreaView>
          <StatusBar
            animated={true}
            backgroundColor="#303d97"
            barStyle="default"
            showHideTransition="fade"
            hidden={false} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
    
              <View style={{ width: "80%", margin: 10,marginTop:40,marginLeft:35, backgroundColor: "#7dc305",padding: 0,borderRadius: 10,}}>
                <Button
                  mode="outlined"
                  color="#ffffff"
                  onPress={() => startScan()}
                  style={styles.button}
                >
                  {'Scan Bluetooth (' + (isScanning ? 'on' : 'off') + ')'}
                </Button>   
              </View>
  
              <View style={{ width: "80%", margin: 10,marginTop:10,marginLeft:35,backgroundColor: "#ffffff", padding: 0,borderRadius: 10,}}>
                <Button
                  mode="outlined"
                  color="#121212"
                  onPress={() => retrieveConnected()}
                  style={styles.button}
                >
                  Connected Devices
                </Button>
              </View>
              <View style={styles.parameter} >
                  <View style={{height:"100%", width: "80%",marginLeft:35, backgroundColor: "#303d97",padding: 4,borderRadius: 10,marginTop:10}}>
                      <View style={styles.para_style_1}>
                          <Text style={styles.parameter_1}> Connected            :</Text>
                          <Text style={styles.parameter_2}>{connected} </Text>
                      </View>    
                      <View style={styles.para_style_1}>
                          <Text style={styles.parameter_1}> Data recevied      :</Text>
                          <Text style={styles.parameter_2}>{received} </Text>
                      </View>     
                        <View style={styles.para_style_1}>
                          <Text style={styles.parameter_1}> Ecg recevied         :</Text>
                          <Text style={styles.parameter_2}>{received} </Text>
                        </View>  
                     <View style={styles.parameter_3}>
                  </View>
                    <Button
                      mode="outlined"
                      color="#ffffff"
                      onPress={() => final()}
                      //style={styles.button}
                      style={{ width: "85%", margin:10,marginTop:1,marginLeft:"1%",padding: 4, backgroundColor:"#ee6744",borderRadius:10} }
                    >
                     Select Vitals
                    </Button>
                </View>
              </View>
              <View style={{margin: 15,marginTop:"20%"}}>
                  <Text style={styles.device}>LIST OF DEVICES</Text>
              </View>
  
              {(list.length == 0) &&
                <View style={{flex:1,backgroundColor:"#f5f5f5"}}>
                  <Text style={{textAlign: 'center',color:"#121212"}}>No peripherals</Text>
                </View>
              }
            
            </View>  
   
          </ScrollView>
  
          <FlatList
              data={list}
              renderItem={({ item }) => renderItem(item) }
              keyExtractor={item => item.id}
            />              
        </SafeAreaView>
      </>
    );
  };
  
