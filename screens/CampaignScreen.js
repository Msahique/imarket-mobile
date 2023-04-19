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

const CampaignScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [visible, setVisible] = useState(false);

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

  async function showData(item) {
    console.log(item);
    setSelectedItem(item);
    setVisible(true);
  }

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
