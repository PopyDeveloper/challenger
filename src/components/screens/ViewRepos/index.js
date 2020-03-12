import React from 'react'
import { WebView } from 'react-native-webview';


const ViewRepos = ({route}) => {
  const { uri } = route.params;
  return <WebView source={{ uri }} />

}

export default ViewRepos
