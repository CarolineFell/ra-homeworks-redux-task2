import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterService } from '../../actions/actionCreators';
import './ServiceFilter.css';

function ServiceFilter() {
  const item = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const {value} = event.target;
    dispatch(filterService(value));
  };

  return (
    <div className='filter'>
      <p className="text">Фильтрация по списку</p>
      <input className="input" name='value' onChange={handleChange} 
      value={item.value} placeholder="Введите любое значение"/>
    </div>
  );
}

export default ServiceFilter;