import React from 'react';
import { TouchableOpacity } from 'react-native';


function Button({ children, onPress, styles }) {
  return <TouchableOpacity style={styles} onPress={onPress}>
    {children}
  </TouchableOpacity>
}

export default Button;
