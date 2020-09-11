import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList
} from 'react-native';
import axios from 'axios';
import { getActiveChildNavigationOptions } from 'react-navigation';

import {S55, S44} from './ScreenName';


class FlatItem extends Component{
  render(){
    let i = this.props.index;
    console.log(i);
    return(
     
      <View style={styles.sp}>
        <TouchableOpacity onPress={this.gotoFarm()}>
            <Text style={styles.item}>
              {this.props.item[0].idfarm}
            </Text>
            <Text style={styles.item}>
              {this.props.item[0].farmname}
            </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
};



//chon farm
export default class  S5 extends Component {
  

 

  constructor(props) {
      super(props);
      this.state = {
        // info user
        username: this.props.navigation.state.params.username,
        pass: this.props.navigation.state.params.pass,
        iduser: this.props.navigation.state.params.iduser,
        user_createdate: this.props.navigation.state.params.user_createdate,
        phone_number: this.props.navigation.state.params.phone_number,
        address: this.props.navigation.state.params.address,

        //main
        datafarm: [],   
        idfarm: '',
        farmname: '',
        farmaddress: '',
        farm_createdate: '',
        idavi: '',
        idmale: '',
        idfemale: '',
        idcross: '',     
      };

      
    }

    componentDidMount(){
      const url = `http://192.168.5.106/webmedia/API/getfarm.php?
      id=${this.state.iduser}`;
      this._interval = setInterval(() => {
        axios.get(url)
    .then(response => {
      
      let i = 0;
      let aa = [];
      while(response.data[i] != undefined){
        aa.push(response.data[i]);
        console.log(response.data[i][0]);
        ++i;
      }
      this.setState({
        datafarm: aa
      });

    })
    .catch(error => {
      console.log(error);
    })
      }, 5000);
      
    
    }


    updateitem = (x) =>{
      console.log(x);
    }

    gotoFarm = (index) =>{
      var db = {
        username: this.state.username,
        idfarm: this.state.datafarm[index][0].idfarm,
        farmname: this.state.datafarm[index][0].farmname,
        farmaddress: this.state.datafarm[index][0].farmaddress,
        farm_createdate: this.state.datafarm[index][0].farm_createdate,
        idavi: this.state.datafarm[index][0].idavi,
        idmale: this.state.datafarm[index][0].idmale,
        idfemale: this.state.datafarm[index][0].idfemale,
        idcross: this.state.datafarm[index][0].idcross,     
      }
      console.log(this.state.datafarm[index][0].farm_createdate + "neffffffffffffffff");
      const { navigation } = this.props;
      navigation.navigate(S55, db);
    };

    CreateFarm = () => {
      var db = {
        username: this.state.username,
        iduser: 'user123',
      }
      console.log(this.props.iduser + "S333333333333333333");
      const { navigation } = this.props;
      navigation.navigate(S44, db);
    }
    
  render(){
    console.log(this.props.iduser+ "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
    var gt = this.props.navigation.state.params.username;
    return(
      <View style={styles.container}>
        <Text style={styles.txth1}>Select Farm</Text>
        
        <FlatList 
          data={this.state.datafarm}
          renderItem={({item, index}) => (
            
              <View style={styles.sp}>
                  <TouchableOpacity 
                    //onPress={() => this.updateitem(index)}
                    onPress={() => this.gotoFarm(index)}
                    >
                      <Text style={styles.item}>
                        {item[0].farmname}
                      </Text>
                      <Text style={styles.item2}>
                        {item[0].idfarm}
                      </Text>
                  </TouchableOpacity>
              
              </View>
            
          )}
        />

        <TouchableOpacity 
            style={styles.sign}
            onPress={ () => this.CreateFarm()}>
              <Text style={styles.res}>Add new Farm</Text>
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

  txth1: {
    fontSize: 30,
    color: '#dc3131',
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: "900",
  },

  item: {
    color: '#dc3131',
    fontWeight: "500",
    fontSize: 17,
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

  input: {
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginStart: 25,
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    height: 55,
    width: 350,
  },

  title: {
    fontSize: 20,

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

  res: {
    marginTop: 12,
    fontSize: 23,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  sign: {
    backgroundColor: "#d34f4f",
    borderRadius: 25,
    marginStart: 25,
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
    height: 55,
    width: 350,
  },

})
