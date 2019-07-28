import React from 'react';
import { TouchableOpacity } from 'react-native';


function Button({ children, onPress, styles }) {
  return <TouchableOpacity style={styles}>
    {children}
  </TouchableOpacity>
}

export default Button;
