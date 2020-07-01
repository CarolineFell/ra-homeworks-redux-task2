import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelService } from '../../actions/actionCreators';
import './ServiceAdd.css';

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  }, [dispatch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
  }, [dispatch, item.id, item.name, item.price]);

  const handleCancel = useCallback((event) => {
    event.preventDefault();
    dispatch(cancelService());
  }, [dispatch]);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input className="input" name="name" onChange={handleChange} value={item.name} placeholder="Заменить двигатель" />
      <input className="input short" name="price" onChange={handleChange} value={item.price} placeholder="2500" />
      <button className="button save" type="submit">Save</button>
      <button className="button cancel" onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default ServiceAdd;