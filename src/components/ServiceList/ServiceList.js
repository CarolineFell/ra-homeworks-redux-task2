import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../../actions/actionCreators';
import './ServiceList.css';

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const filterList = useSelector(state => state.serviceFilter);
  const filterText = filterList.value.toLowerCase();
  const filterItems = items.filter((item) => item.name.toLowerCase().includes(filterText));

  const handleRemove = useCallback((id) => {
    dispatch(removeService(id));
  }, [dispatch]);

  const handleEdit = useCallback((id, name, price) => {
    dispatch(editService(id, name, price));
  }, [dispatch]);

  return (
    <ul className="service-list">
      {filterItems.map((o) => (
        <li className="service-item" key={o.id}>
          {o.name} {o.price}
          <i className="button-edit edit outline grey icon" onClick={() => handleEdit(o.id, o.name, o.price)}></i>
          <i className="button-delete delete grey icon" onClick={() => handleRemove(o.id)}></i>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;