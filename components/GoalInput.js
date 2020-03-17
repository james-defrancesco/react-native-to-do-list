import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('') 
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="My Goals"
                    placeholderTextColor = '#ccc'
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View styles={styles.button}>
                        <Button title="Add" onPress={addGoalHandler}/>
                    </View>
                    <View styles={styles.button}>
                        <Button title="Cancel" color='red' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10,
        marginBottom: 10,
        color: 'black'
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '40%'
      },
      button: {
          width: '40%',
          fontSize: 20
      }
})

export default GoalInput