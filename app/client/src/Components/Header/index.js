import React from "react";
import { Input, Icon, Button } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="main_div_header">
        <Row>
          <Col span="3" offset="20">
            <div className="add_talent_btn">
              <Button icon="plus">New Talent</Button>
            </div>
          </Col>
          <Col span="1">
            <div className="rount_btn">
              <Button shape="circle" icon="dash" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
