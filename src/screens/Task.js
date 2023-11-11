import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {List} from 'react-native-paper';

const Task = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: task,
          description,
          imageSource: require('C:\\\\Users\\\\Terry\\\\WebstormProjects\\\\ScavengerHunt\\\\assets\\\\dog.png'),
        },
      ]);
      setTask('');
      setDescription('');
    }
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(t => t.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter a description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.taskItemContainer}>
            <List.Item
              title={item.text}
              description={item.description}
              style={styles.taskItem}
              right={() => (
                <TouchableOpacity
                  onPress={() => deleteTask(item.id)}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              )}
            />
            <Image source={item.imageSource} style={styles.taskImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputBox: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
  taskItemContainer: {
    marginVertical: 4,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
  },
  taskItem: {
    padding: 12,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 16,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskImage: {
    width: 250,
    height: 250,
    margin: 10,
    display: 'flex',
  },
});

export default Task;
