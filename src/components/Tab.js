import React, { useState } from 'react';
import {TabWrapper,TabItem,TabInput,TabButton} from '../components/styledComponents/Index';

const Tab = () => {
  const [tabs, setTabs] = useState(['Tab 1', 'Tab 2']);
  const [activeTab, setActiveTab] = useState(0);
  const [newTabValue, setNewTabValue] = useState('');

  const addTab = () => {
    if (newTabValue) {
      setTabs([...tabs, newTabValue]);
      setNewTabValue('');
    }
  };

  const deleteTab = (index) => {
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    setTabs(newTabs);

    if (activeTab === index) {
      setActiveTab(0);
    }
  };

  return (
    <>
      <TabWrapper>
        {tabs.map((tab, index) => (
          <TabItem key={index} active={index === activeTab} onClick={() => setActiveTab(index)}>
            {tab}
            <TabButton onClick={() => deleteTab(index)}>x</TabButton>
          </TabItem>
        ))}
        <TabInput value={newTabValue} onChange={(e) => setNewTabValue(e.target.value)} />
        <TabButton onClick={addTab}>Add Tab</TabButton>
      </TabWrapper>
      <div>{tabs[activeTab]}</div>
    </>
  );
};

export default Tab;
