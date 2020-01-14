import React from "react"
import axios from "axios";
import { connect } from "react-redux";
import api from "../../Components/api-endpoints/api"
import {Redirect} from "react-router-dom"
import auth from "../../Auth";
import {Row, Col, Form, Input, Checkbox, Button, Alert} from "antd"
import 'antd/dist/antd.css';
import './style.css'
import {login} from "../../Store/Actions/TalentAction"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            errors:'',
            username: '',
            password: '',
            data:[
               {
                   name:'hasan',
                   phone:'2222',
                   bio:'sasa',
                   email: [
                       "ss","99"
                   ],
                   photo: 'ss',
                   talent_type: 'ss',
                   vetted:0,
                   tier:2,
                   persona:'ss',
                   alerts:[
                       {
                           alert_name:'sa',
                           date:'22'
                       },
                       {
                        alert_name:'sad',
                        date:'232'
                    }
                   ],
                   badges:[1,2],
                   categories:["aaaa","bbbb"],
                   notes:["aaaaa","bbbbb","bbbbb"],
                   tags:["aaaaaaa","bbbbbbb"],
                   fuel_profile:null,
                   fuel_store:'asa',
                   instagram:'ku',
                   youtube:'sa',
                   twitter:'sha',
                   facebook:'naha',
                   linkedin:'aks',
                   twitch:'nana',
                   behance:'asa',
                   other:'kak',
                   photo1:'sja',
                   photo2:'sjsa',
                   photo3:'sja',
                   photo4:'sjaja',
                   photo5:'sjaa',
                   photo6:'sna',
               }
            ]
        }
    }

    login = () => {
        this.props.login(this.state.username, this.state.password)
        .then(res=>{
            if(this.props.user){
                this.setState({
                    errors: ''
                })
                auth.login(() => {
                    this.props.history.push("/allTalents");
                  });
            }
            else {
                this.setState({
                    errors: 'Wrong Username or Password'
                })
            }
        })
    }

    getUsername = (e) => {
    this.setState({
        username: e.target.value
    })
    }

    getPassword = (e) => {
        this.setState({
            password: e.target.value
        })
        }
    closeAlert = () => {
        this.setState({
            errors:''
        })
    }

    render(){
        return(
          <Row>
              <Col lg={12}>
              <div className="loginForm" >
                <Form>
                <div>
                        <img src={require("../../Images/fuel_login_logo.png")} />
                        <br/> <br/>
                    </div>
                    <div className="fieldDecoator">
                        <p>Username</p>
                       <Input onChange={this.getUsername} />
                    </div>
                    <div className="fieldDecoator">
                        <p>Password</p>
                        <Input onChange={this.getPassword} />
                    </div>
                    <div className="fieldDecoator">
                        <Checkbox/> <span className="rm"> Remember Me</span>
                        <br/><br/><br/>
                    </div>
                    {this.state.errors==""?"":<Alert onClose={e=>this.closeAlert()} closable message={this.state.errors} type="error" />}
                    <div className="fieldDecoator">
                       <center><Button onClick={this.login} >Sign In</Button></center>
                    </div>
                    <div className="fieldDecoator">
                       <center><span>Forgot Your Password? </span> <span className="ca">Contact Admin</span></center>
                    </div>
                </Form>
              </div>
              </Col>
              <Col lg={12}>
               <div className="loginRight" ></div>
              </Col>
          </Row>
        );
    }
}

const mapStatToProps = state => ({
    user: state.user.auth
    
})
export default connect(mapStatToProps, { login })(Login);