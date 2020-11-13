import React ,{Fragment,useContext} from 'react';
import AuthContext from '../../context/Auth/authContext';
import ContactContext from '../../context/Contact/ContactContext';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 const Navbar = ({title,icon}) => {
   const authContext=useContext(AuthContext);
   const contactContext=useContext(ContactContext);
   const {clearContacts}=contactContext;

   const {isAuthenticated,Logout,user}=authContext;
   const onLogout=()=>{
     Logout();
     clearContacts();
   }
   const authLinks=(
     <Fragment>
       <li>Hello {user&& user.name}</li>
       <li>
         <a onClick={onLogout} href="#!">
           <i className="fas fa-sign-out-alt"><span className="hide-sm">Logout</span></i>
         </a>
       </li>
     </Fragment>
   );
   const guestLinks=(
    <Fragment>
      <li>
          <Link to='/Register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}/> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}      
        
      </ul>
    </div>
  )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps={
  title:'Contact Holder',
  icon:'fas fa-id-card-alt'
}

export default Navbar
