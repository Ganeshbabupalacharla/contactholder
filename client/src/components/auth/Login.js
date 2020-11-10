import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/Auth/authContext';
import AlertContext from '../../context/Alert/alertContext';

export const Login = (props) => {
  const authContext=useContext(AuthContext);
  const alertContext=useContext(AlertContext);
  const {setAlert}=alertContext;
  const {Login,error,clearErrors,isAuthenticated}=authContext;
  const [user,setUser]=useState({
    email:'',
    password:''
  })
  useEffect(()=>{
    if(isAuthenticated){
      props.history.push('/');
    }
    if(error==='Invalid credentials'){
      setAlert(error,'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error,isAuthenticated,props.history]);
  const { email,password}=user;
  const onChange=e=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const onSubmit=e=>{
    e.preventDefault();
    if(email==='' || password===''){
      setAlert('please fill in all fields','danger');
    }else{
      Login({
        email,password
      })
    }
  }
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={email} required onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor="password">password</label>
          <input type="password" name="password" value={password} required onChange={onChange}/>
        </div>

        <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </form>
    </div>
  )
}

export default Login;