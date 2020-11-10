import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/Contact/ContactContext';

export const ContactItem = ({contact}) => {
  const contactContext=useContext(ContactContext);
  const {_id,name,type,email,phone}=contact;
  const {deleteContact,setCurrent, clearCurrent}=contactContext;
  const onDelete=()=>{
    deleteContact(_id);
    clearCurrent();
  };

  
  return (
    <div className='card bg-light'>
      <h3 className="text-primary text-left">
        {name}{' '} <span style={{float:'right'}}className={'badge '+ (type ==='professional'?'badge-success':'badge-primary')}>
          {type.charAt(0).toUpperCase()+ type.slice(1)}</span>
      </h3>
      <ul>
        {email &&(<li>
          <i className="fas fa-envelope">{email}</i>
        </li>)}
        {phone &&(<li>
          <i className="fas fa-phone">{phone}</i>
        </li>)}
      </ul>

      <p>
        <button onClick={()=>setCurrent(contact)} className="btn btn-dark">Edit</button>
        <button onClick={onDelete} className='btn btn-danger'>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes={
  contact: PropTypes.object.isRequired
}
export default ContactItem;