import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editTab } from './tabSlice';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { Button1 } from '../../components/styledComponents/TabList';



const EditTab = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const tabs = useSelector(store => store.tabs);
    const navigate = useNavigate();
    const existingTab = tabs.filter(tab => tab.id === params.id);
    const { name } = existingTab[0];
    const [values, setValues] = useState({
        name: name,
    })
    const handleEditUser = () => {
        setValues({ name: '' });
        dispatch(editTab({
            id: params.id,
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
                inputProps={{ type: 'text', placeholder: 'John Doe' }}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <Button1 onClick={handleEditUser}>Edit</Button1>
            <Button1 onClick={handleBackBtn}>Back</Button1>
        </div>
    )
}
export default EditTab;