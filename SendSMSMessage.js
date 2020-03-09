import * as SMS from 'expo-sms'
import { getCoordinates } from "./Geolocation";
import { getContacts } from "./manageContacts";

//import { getCoordinates } from "./Geolocation";

 import React, { Component } from "react";
 import { Alert, AsyncStorage } from "react-native";
function parseContactObjectToArray(contactObject) {
  console.log(`This is the contactObject ${JSON.stringify(contactObject)}`);

  let contactArray = [];
  if (contactObject.contact1) {
    contactArray.push(contactObject.contact1);
  }
  if (contactObject.contact2) {
    contactArray.push(contactObject.contact2);
  }
  if (contactObject.contact3) {
    contactArray.push(contactObject.contact3);
  }
  if (contactObject.contact4) {
    contactArray.push(contactObject.contact4);
  }
  if (contactObject.contact5) {
    contactArray.push(contactObject.contact5);
  }

  console.log(`This is the contactArray ${JSON.stringify(contactArray)}`);
  return contactArray;
}

async function sendMessage() {
  try {
    let contactObject = await getContacts();
    let coords = await getCoordinates();
    console.log(
      'Coming into the sendMessage function, coordinates:',
      coords
      );
   
    
   // let currentLatitude = parseCoordToArray(CoorObject.currentLatitude);
    //let currentLongitude = parseCoordToArray(CoorObject.currentLongitude);

    console.log(
      `Coming into the sendMessage function, contacts: ${JSON.stringify(
        contactObject
      )}`

    );
    let contacts = parseContactObjectToArray(contactObject);
    const { result } = await SMS.sendSMSAsync(
contacts,"www.google.com/maps/place/"+coords
    );
  } catch (e) {
    console.log(e);
  }
}

export default sendMessage;
