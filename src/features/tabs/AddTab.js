import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { addTab } from './tabSlice';
import { useSelector } from 'react-redux';
import { Button1 } from '../../components/styledComponents/TabList';
const AddTab = () => {
    const tabs = useSelector((store) => (store.tabs));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setvalues] = useState({
        name: '',
    })
    const handleAddTab = () => {
        setvalues({ name: '' });
        let tempTabs = tabs;
        if (tempTabs.length === 5) {
            alert("You can add only 5 tabs");
            navigate('/');
            return
        }
        dispatch(addTab({
            id: uuidv4(),
            name: values.name,
        }))
        navigate('/');
    }
    const handleBackBtn = () => {
        navigate('/');
    }
    return (
        <div style={{ display: 'flex', gap: '5px' }}>
            <TextField
                label="Name:"
                inputProps={{ type: 'text', placeholder: 'Tab Name' }}
                value={values.name}
                onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
            <Button1 onClick={handleAddTab}>Submit</Button1>
            <Button1 onClick={handleBackBtn}>Back</Button1>
        </div>
    )
}
export default AddTab;