import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'mynotification.db'});  // name of the database

const CampaignScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [visible, setVisible] = useState(false);
  
  db.executeSql('SELECT * FROM registration', [], (resultSet) => {
    const rows = resultSet.rows;
    for (let i = 0; i < rows.length; i++) {
      const row = rows.item(i);
      // handle the row data here
      console.log("row: ",row);
    }
  }, (error) => {
    // handle the error here
  });


  /*function fetchData() {
    fetch('https://example.com/api/data')
      .then((response) => response.json())
      .then((json) => {
        // handle the JSON response here
        console.log(json);
      })
      .catch((error) => {
        // handle the error here
        console.error(error);
      });
  }*/
   
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  async function requestContactsPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message:
            'This app needs access to your contacts to show them on the screen.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Contacts permission granted');
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.warn(err.message);
    }
  }

  async function showData(item) {
    console.log(item);
    setSelectedItem(item);
    setVisible(true);
  }

  const handleGetContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        throw err;
      }
      console.log(contacts); // This will log all the contacts in your console
    });
  };
  

  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainCardView}>
                <TouchableOpacity onPress={() => showData(item)}>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#5f38f9',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        color: '#A30000',
                        textTransform: 'capitalize',
                      }}>
                      {item.id}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <Modal visible={visible}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#5f38f9',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {selectedItem.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#5f38f9',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {selectedItem.id}
          </Text>
          <TouchableOpacity onPress={handleGetContacts}>
            <Text>Refer People</Text>
          </TouchableOpacity>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default CampaignScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexGrow: 1,
  },

  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    display: 'flex',
  },
});
