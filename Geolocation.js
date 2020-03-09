import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
import {parseCoordToArray} from "./SendSMSMessage";
  import { Form } from "formik";
var currentLongitude, currentLatitude;
export async function findCoordinates() {
  console.log("in find coordinates");
  navigator.geolocation.getCurrentPosition(
    position => {
        currentLongitude = (position.coords.longitude);
        currentLatitude = (position.coords.latitude);
      //console.log(currentLatitude);
       AsyncStorage.setItem("currentLatitude",JSON.stringify(currentLatitude));
       AsyncStorage.setItem("currentLongitude",JSON.stringify(currentLongitude));
      
      this.setState({currentLongitude:
      currentLongitude});
      this.setState({currentLatitude:
        currentLatitude});
        AsyncStorage.setItem("pos",JSON.stringify(position));
      },

        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      console.log("PRINTING COORDATES & POSITION");
      //console.log(position);
      console.log(currentLatitude);
    }   

    export async function getCoordinates() {

      console.log("IN getcoord function : sendSMS");
      try {
        var a=await findCoordinates();
        console.log("soso");
        //var posi=await AsyncStorage.getItem("pos");
        //console.log(posi);
        var lon = await AsyncStorage.getItem("currentLongitude");
        console.log(lon);
        var lat =  await AsyncStorage.getItem("currentLatitude");
        let cord=[];
        cord.push(lat);
        cord.push(lon);
        console.log(lat);
        return cord;
      } catch (error) {
        // Error saving data
      }
    }
      /*
      const location = JSON.stringify(position);
      AsyncStorage.setItem("location", JSON.stringify(location));
      // this.setState({ location });
      console.log(
        `This is what was saved ${AsyncStorage.getItem("location")}`
      );
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}*/

// export default findCoordinates;
