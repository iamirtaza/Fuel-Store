import React from "react";
import { Input, Icon, Popover, Button } from 'antd';
import { Row, Col } from 'antd';
import auth from "../../Auth"
import "./style.css";
import "antd/dist/antd.css";



class SearchBar extends React.Component {
  


  logout = () => {
    auth.logout(() => {
      this.props.history.push("/");
    })
  }

  render() {

    let title = <div className="popover_title">
                  <Row>
                    <Col span={6} offset={2}>
                      <img className="profile_icon2" src={require("../../Images/profile_pic.png")}/>
                    </Col>
                    <Col span={12}>
                      <p className="popover_name">Zain Mukhtar</p>
                      <p className="popover_email">zyn1438@gmail.com</p>
                    </Col>
                    <Col span={4}></Col>
                  </Row>  
                </div>
    let content = <div className="logout_btn">
                    <Button onClick={e=>this.logOut} >
                      Logout
                    </Button>
                  </div>
    return (
     <div className="search_bar_Div">

        <Row className="search_row">
            <Col span={4}></Col>

            <Col span={12}>
            <Input className="search_input" placeholder="Search" prefix={<Icon type="search"/>} />
            </Col>

            <Col span={6}></Col>

            <Col span={1}>
                <img className="notification_icon" src={require("../../Images/notification.png")}/>
            </Col>

            <Col span={1}>
                <Popover placement="topRight" title={title} content={content} trigger="click">
                    <img className="profile_icon" src={require("../../Images/profile_pic.png")}/>
                </Popover>
          
             
             </Col>
        </Row>

       


     </div>
     
      
    );
  }
}

export default SearchBar;
