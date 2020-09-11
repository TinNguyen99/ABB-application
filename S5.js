import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList
} from 'react-native';
import {S77, S66} from './ScreenName';
import axios from 'axios';

// chi tiet farm - chon avi
export default class  S5 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // info user
      username: this.props.navigation.state.params.username,

      // info farm
      idfarm: this.props.navigation.state.params.idfarm,
      farmname: this.props.navigation.state.params.farmname,
      farmaddress: this.props.navigation.state.params.farmaddress,
      farm_createdate: this.props.navigation.state.params.farm_createdate,
      idavi: this.props.navigation.state.params.idavi,
      idmale: this.props.navigation.state.params.idmale,
      idfemale: this.props.navigation.state.params.idfemale,
      idcross: this.props.navigation.state.params.idcross,   

      //main
      dataavi: [],   
      idavi: '',
      aviavyname: '',
      avi_createdate: '',
      idcross: '',
      idmale: '',
      idfemale: '',
    };
  }

  componentDidMount(){
    const url = `http://192.168.5.106/webmedia/API/getavi.php?
    id=${this.state.idfarm}`;
    this._interval = setInterval(() => {
      console.log(this.state.idfarm+"DDDDDDDDDDDDDDDDDD");
      axios.get(url)
      .then(response => {
        let i = 0;
        let aa = [];
        while(response.data[i] != undefined){
          aa.push(response.data[i]);
          ++i;
        }
        this.setState({
          dataavi: aa
        });
    
      })
      .catch(error => {
        console.log(error);
      })
    }, 2000);
    
    
  }

  gotoavi = (index) => {
      var db = {
        username: this.state.username,
        idavi: this.state.dataavi[index][0].idavi,
        aviavyname: this.state.dataavi[index][0].aviavyname,
        avi_createdate: this.state.dataavi[index][0].avi_createdate,
        idcross: this.state.dataavi[index][0].idcross,
        idavi: this.state.dataavi[index][0].idavi,
        idmale: this.state.dataavi[index][0].idmale,
        idfemale: this.state.dataavi[index][0].idfemale,
        idfarm: this.state.idfarm,     
      }
      console.log(index);
      const { navigation } = this.props;
      navigation.navigate(S77, db);
  }

  creatAvi = () => {
    var db = {
      
      idfarm: this.state.idfarm   
    }
    console.log();
    const { navigation } = this.props;
    navigation.navigate(S66, db);
  }
 
    
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.formheader}>
            <View style={styles.header}>
              <Image style={styles.iconback} source={require('./image/ar.png')}></Image>
              <Text style={styles.txtheader}>{this.state.farmname}</Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.txt}>Farm ID :</Text>
              <Text style={styles.txt}>{this.state.idfarm}</Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.txt}>Date Created :</Text>
              <Text style={styles.txt}>{this.state.farm_createdate}</Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.txt}>Address Farm :</Text>
              <Text style={styles.txt}>{this.state.farmaddress}</Text>
            </View>
          </View>


          <Text style={styles.txtavi}>AVIARY</Text>

         

          <FlatList 
          data={this.state.dataavi}
          renderItem={({item, index}) => (
            
              <View style={styles.sp}>
                  <TouchableOpacity 
                    onPress={() => this.gotoavi(index)}
                    >
                      <Text style={styles.item}>
                        {item[0].aviavyname}
                      </Text>
                      <Text style={styles.item2}>
                        {item[0].idavi}
                      </Text>
                  </TouchableOpacity>
              
              </View>
            
          )}
        />

 
          
        <TouchableOpacity 
                    style={styles.addcross}
                    onPress={() => this.creatAvi()}
                    >
                      <Text style={styles.txtadd}>Add New Aviary</Text>
            <Image source={require('./image/capture.png')}></Image>
                  </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(32, 53, 70)',
    backgroundColor: 'rgb(250, 250, 250)',
    flexDirection: 'column',
  },

  formheader: {
    height: 200,
    backgroundColor: "#fbd6c0",
  },

  sp: {
    alignSelf: 'center',
    marginTop: 25,
    borderTopWidth: 2,
    borderTopColor: "#44af33",
    justifyContent: 'center',
    height: 75,
    width: 370,
    flex: 1

  },
  item: {
    color: '#dc3131',
    fontWeight: "500",
    fontSize: 19,
    marginStart: 35,
    marginTop: 3,

  },
  item2: {
    color: '#dc3131',
    fontWeight: "500",
    fontSize: 15,
    marginStart: 55,
    marginTop: 5,

  },

  header: {
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 7,
  },

  txt: {
    fontSize: 17,
    fontWeight: "bold",
    marginStart: 35
  },

  txtavi: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: 'center',
    marginTop: 17,
    color: '#ff6000'
  },

  chooseavi: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 350,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#f34242"
  },
//
  iconback: {
    width: 30,
    height: 30,
    marginStart: 20,
    alignSelf: 'stretch',
    marginTop: 9
  },

  txtheader: {
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 120,
    marginTop: 7,
    color: '#ff6000'
  },

  formcross: {
    marginStart: 5,
    height: 80,
    width: 390,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },

  rowcross: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },

  txtcross: {
    fontSize: 23,
    fontWeight: "bold",
    marginEnd: 200,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginStart: 40
  },

  icon: {
    width: 30,
    height: 30,
    marginEnd: 17,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginStart: 40,
  },

  addcross: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 350,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30
  },

  txtadd: {
    fontSize: 20,
    fontWeight: "bold",
    marginEnd: 40,
    alignSelf: 'center'
  },

  imgbottom: {
    scaleX: 1.40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  logo: {
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },


})
