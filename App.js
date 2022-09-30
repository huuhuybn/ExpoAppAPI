import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {useState} from "react";

const DATA = [3, 4, 5, 6, 43, 3, 5, 6, 566, 54, 432, 534, 6, 43, 34, 534, 67, 78, 865
    , 56, 4, 2, 5, 7, 3
    , 74, 9, 4, 3, 3, 7, 8]

const STUDENTS = [
    {id: 0, name: 'Huy Nguyen 1'},
    {id: 1, name: 'Huy Nguyen 2'},
    {id: 2, name: 'Huy Nguyen 3'},
    {id: 3, name: 'Huy Nguyen 4'},
    {id: 4, name: 'Huy Nguyen 5'},
    {id: 5, name: 'Huy Nguyen 6'}
]

export default function App() {

    const [duLieu, setDuLieu] = useState([]);
    const [selectedID, setSelectedID] = useState(null);

    return <View style={styles.container}>

        <Button title={'LOAD DATA'} onPress={() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
                .then(response => response.json())
                .then(result => setDuLieu(result))
                .catch(error => console.log('error', error));
        }
        }/>

        <FlatList extraData={selectedID} style={{flex: 1}} data={duLieu}
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => {

                      const color_ = item.id === selectedID ? 'green' : 'white';

                      return (<View style={{
                          backgroundColor: 'black', margin: 8
                          , borderRadius: 5
                      }}>
                          <Text style={{color: color_, padding: 8}}>
                              {item.address.street} : {item.id}</Text>
                          <Text style={{color: color_, padding: 8}}>
                              {item.phone} : {item.id}</Text>
                          <Button title={'UPDATE'} onPress={() => {
                              item.name = "QQQQQ";
                              setSelectedID(item.id)
                              // alert(duLieu.length + " : " + item.name)
                          }}/>
                          <View style={{height: 8}}/>
                          <Button title={'DELETE'} onPress={() => {
                              var data = duLieu;
                              data.splice(index, 1);
                              setDuLieu(data)
                              setSelectedID(item)
                              //alert(duLieu.length + " : " + item.id)
                          }}/>
                      </View>)
                  }}/>
    </View>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    },
});
