import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseName, chooseAddress, choosePhoneNo, chooseEmail } from "../../store/user";
import Button from "../common/Button";

const Step5 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const address = useSelector((state) => state.userReducer.address);
  const phoneNo = useSelector((state) => state.userReducer.phoneNo);
  const email = useSelector((state) => state.userReducer.email);

  const [Name, setName] = useState(name);
  const [Address, setAddress] = useState(address);
  const [Phone, setPhone] = useState(phoneNo);
  const [Email, setEmail] = useState(email);

  const onSubmit = () => {
    dispatch(chooseName(Name));
    dispatch(chooseAddress(Address));
    dispatch(choosePhoneNo(Phone));
    dispatch(chooseEmail(Email));
    history.push("./result"); // NOTE: navigate to User.js component first then after filling user details go to result route from there
  };

  return (
    <form onSubmit={onSubmit}>
      
      <div className="mb-3 col">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="Address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="Address"
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
          value={Address}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="PhoneNo" className="form-label"> Phone No</label>
        <input
          type="phoneno"
          className="form-control"
          id="PhoneNo"
          maxLength={10}
          minLength={10}
          placeholder="Enter your phone no."
          onChange={(e) => setPhone(e.target.value)}
          value={Phone}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
      </div>


      <br></br>
      <Button onSubmit={onSubmit}>Next</Button> 
    </form>
  );
};

export default Step5;