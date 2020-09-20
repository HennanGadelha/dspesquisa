import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Header from '../../components/Header'



const createRecord = () => {
    return(
        <>
            <Header/>
            <Text style={styles.text}>Hello home</Text>

        </>
    )
}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center' 
    }
  });
  


export default createRecord;
