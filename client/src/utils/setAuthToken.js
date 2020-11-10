import axios from 'axios';

const setAuthToken=token=>{
  if(token){
    axios.defaults.headers.common['x-auth-token']=token;
  }
  else{
    delete axios.deafults.headers.common['x-auth-token'];
  }
}
export default setAuthToken;