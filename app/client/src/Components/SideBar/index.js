import React from "react";
import axios from "axios";
import api from "../../Components/api-endpoints/api";
import { Redirect, Link } from "react-router-dom";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    if (collapsed) {
      document.getElementById("logoo").style.visibility = "hidden";
      document.getElementById("title1").style.visibility = "hidden";
      document.getElementById("title2").style.visibility = "hidden";
      document.getElementById("title3").style.visibility = "hidden";
    } else {
      document.getElementById("logoo").style.visibility = "visible";
      document.getElementById("title1").style.visibility = "visible";
      document.getElementById("title2").style.visibility = "visible";
      document.getElementById("title3").style.visibility = "visible";
    }
    console.log(collapsed);
    this.setState({ collapsed });
  };

  openAllTalents = () =>{
    return <Redirect to="/allTalents" />
  }

  render() {
    return (
      <Sider
        className="sideBar"
        style={{ height: "100%" }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">
          <img id="logoo" src={require("../../Images/fuel-logo.png")} />
        </div>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <p id="title1">PROFILES</p>
          <Menu.Item key="1" onClick={this.openAllTalents()} >
            <Icon type="sketch" />
            <span>All Talents</span>
          </Menu.Item>
          <p id="title2">TRACKING</p>
          <Menu.Item key="2">
            <Icon type="unordered-list" />
            <span>Lists</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="bar-chart" />
            <span>Campaigns (CMPs)</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="mobile" />
            <span>Social Posts</span>
          </Menu.Item>
          <p id="title3">SETTINGS</p>
          <Menu.Item key="5">
            <Icon type="setting" />
            <span>Segmentations</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
