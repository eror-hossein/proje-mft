import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';  

function Dashboard() { 
 const [open, setOpen] = useState(false);
const showDrawer = () => {
  setOpen(true);
};
const onClose = () => {
  setOpen(false);
};
  return (  
    <div className="dashboard-container">  
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <h2>داشبورد ادمین</h2>  
      <Link to="/add-admin">  
        <button>اضافه کردن ادمین</button>  
      </Link>  
      <Link to="/add-product">  
        <button>اضافه کردن محصول</button>  
      </Link>  
      <Link to="/view-users">  
        <button>مشاهده کاربران</button>  
      </Link> 
      </Drawer> 
    </div>  
    
  );  
  
}   

export default Dashboard;  
