import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTab } from './tabSlice';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { ButtonGroup, Tab } from '../../components/styledComponents/TabList';
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
const TabList = () => {
    const dispatch = useDispatch();
    const tabs = useSelector(store => store.tabs);
    const handleRemoveTab = (id) => {
        let tab = tabs;
        if (tab.length === 2) {
            alert("Cannot delete default tabs");
            return
        }
        dispatch(deleteTab({
            id: id
        }));
    }
    const renderCard = () => <ButtonGroup>
        {tabs.map((tab) => (
            <Tab key={tab.id}>
                {tab.name}
                <AiFillDelete style={{ marginLeft: '7px' }} onClick={() => handleRemoveTab(tab.id)} />
                <Link to={`edit-tab/${tab.id}`}>
                    <FiEdit2 style={{ marginLeft: '7px' }} />
                </Link>
            </Tab>
        ))}
    </ButtonGroup>
    return (
        <div>
            <Link to='/add-tab'>
                <Button onClick={undefined} >Add Tab</Button>
            </Link>
            {tabs.length ? renderCard() : <p>No Tabs</p>}
        </div>
    )
}
export default TabList;