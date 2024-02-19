import React, {useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import ToDoCard from './components/ToDoCard';

function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [mydata, setValue] = useState('');
  function UpdateCounter() {
    setCounter(counter + 1);
    const deger = {
      id: counter,
      title: mydata,
      isDeleted: false,
    };
    setList([...list, deger]);
    console.log(deger);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header setCounter={counter} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={item => <ToDoCard setTodo={item} />}
      />
      <InputBar setUpdate={UpdateCounter} text={mydata} settext={setValue} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
export default App;
