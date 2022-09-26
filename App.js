import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {useState} from "react";

const DATA = [3, 6, 67, 4, 2, 6, 7, 3, 57568, 3, 67, 7887, 3949, 43, 7, 324, 56, 76, 543,
    5345, 7675, 76887, 3432, 3423, 65467, 786, 76, 76, 4, 2323, 56, 7, 3, 5, 6, 344, 57, 7]

const STUDENTS = [
    {id: 1, name: 'Huy Nguyen1'},
    {id: 2, name: 'Huy Nguyen2'},
    {id: 3, name: 'Huy Nguyen3'},
    {id: 4, name: 'Huy Nguyen4'},
    {id: 5, name: 'Huy Nguyen5'},
];
export default function App() {

    const [duLieu, setDuLieu] = useState(STUDENTS);
    const [selectedID, setSelectedID] = useState(null);

    return (<View style={styles.container}>
        <Button title={'ADD'} onPress={() => {
            var id_ = Math.random();
            var name_ = "QQQ " + id_;
            var student = {id : id_,name: name_}
            duLieu.push(student);
            setSelectedID(id_) // update vi tri theo ID cua item
        }}/>
        <FlatList style={{flex: 1, width: '100%'}} data={duLieu}
                  extraData={selectedID}
                  renderItem={({item, index}) => {
                      return <View style={{
                          backgroundColor: 'black',
                          padding: 8, margin: 8, borderRadius: 10
                      }}>
                          <Text style={{color: 'yellow'}}>{item.id}</Text>
                          <Text style={{color: 'yellow', marginBottom: 8}}>{item.name}</Text>
                          <Button title={'Delete'} onPress={() => {
                              var data = duLieu
                              data.splice(index, 1)
                              setDuLieu(data)
                              setSelectedID(item.id)
                          }}/>
                          <View style={{height: 8}}/>
                          <Button title={'Update'} onPress={() => {
                              item.name = "QQQQQ";
                              setSelectedID(item.id)
                          }}/>
                      </View>;
                  }}/>
    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    },
});
