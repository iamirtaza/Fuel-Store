import React from "react";
import {
  Input,
  Form,
  Select,
  Modal,
  Tabs,
  Button,
  Radio,
  Upload,
  Icon,
  FormInput,
  message,
  Row,
  Col
} from "antd";
import "./style.css";
import "antd/dist/antd.css";

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class AddNewTalent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            badge1_opacity: false,
            badge2_opacity: false,
            badge3_opacity: false,
            badge4_opacity: false,
            badge5_opacity: false,
            inputs: ['input-0'] 
          };

    }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };


  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  closeNav() {
    document.getElementsByClassName("sidebar")[0].style.width = "0px";
  }

  badge(badge_name, trueornot, e) {
    if(trueornot){
        document.getElementById(badge_name).style.opacity = "10%";
        if(e==1){
            this.setState({
                badge1_opacity: false
            })
        }if(e==2){
            this.setState({
                badge2_opacity: false
            })
        } if(e==3){
            this.setState({
                badge3_opacity: false
            })
        }if(e==4){
            this.setState({
                badge4_opacity: false
            })
        }
        if(e==5){
            this.setState({
                badge5_opacity: false
            })
        }
       
    }else{
        document.getElementById(badge_name).style.opacity = "100%";
        if(e==1){
            this.setState({
                badge1_opacity: true
            })
        }if(e==2){
            this.setState({
                badge2_opacity: true
            })
        } if(e==3){
            this.setState({
                badge3_opacity: true
            })
        }if(e==4){
            this.setState({
                badge4_opacity: true
            })
        }
        if(e==5){
            this.setState({
                badge5_opacity: true
            })
        }
    }
    
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    deleteInput(e) {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({
            inputs: prevState.inputs.filter(el => el != e )
        }));
        }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const usernameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <div id="mySidebar" className="sidebar">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={e => this.closeNav()}
        >
          ×
        </a>
        <div className="overall_div_margin">
          <p className="flyout_title">New Talent Profile</p>
          <div className="add_talent_tabs">
            <Tabs>
              <TabPane tab="General" key="1">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                  <div className="tab1">
                    <p className="personal_info_title">PERSONAL INFO</p>
                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Photo</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("profilePic", {
                            rules: [{ required: false, message: "" }]
                          })(
                            <Upload
                              name="avatar"
                              listType="picture-card"
                              className="avatar-uploader"
                              showUploadList={false}
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              beforeUpload={beforeUpload}
                              onChange={this.handleChange}
                            >
                              {imageUrl ? (
                                <img
                                  src={imageUrl}
                                  alt="avatar"
                                  style={{ width: "100%" }}
                                />
                              ) : (
                                uploadButton
                              )}
                            </Upload>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Talent Type</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("talentType", {
                            rules: [
                              {
                                required: true,
                                message: "Please select talent type!"
                              }
                            ]
                          })(
                            <div className="talent_type_radio">
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Radio.Button value="s">Seller</Radio.Button>
                                <Radio.Button value="i">
                                  Influencer
                                </Radio.Button>
                              </Radio.Group>
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Name</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter Name!"
                              }
                            ]
                          })(
                            <Input
                              placeholder="Enter name"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Phone</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("phone", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter phone number!"
                              }
                            ]
                          })(
                            <Input
                              placeholder="Enter Phone number"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Email</p>
                      </Col>
                      <Col span={10}>
                        <Form.Item>
                          {getFieldDecorator("email", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter email!"
                              }
                            ]
                          })(
                            <div style={{display:"flex"}}>
                            <div id="dynamicInput">
                             {this.state.inputs.map(input =>
                                <div style={{display:"flex"}}>
                                <Input  placeholder="Enter email" className="add_new_input" key={input} /> 
                                {/* <span className="add_new_input_btn" onClick={ () => this.deleteInput(input) }>-</span> */}
                                </div>
                                )}
                            </div>
                             </div>
                          )}
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                      {/* <span className="add_new_input_btn" onClick={ () => this.appendInput() }>+</span> */}
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Bio</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("bio", {
                            rules: [
                              {
                                required: true,
                                message: "Enter Bio!"
                              }
                            ]
                          })(<TextArea rows={7} className="bio_input" />)}
                        </Form.Item>
                      </Col>
                    </Row>

                    <p className="personal_info_title">STATUS</p>
                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Vetted</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("vetted_type", {
                            rules: [
                              {
                                required: true,
                                message: "Please select one type!"
                              }
                            ]
                          })(
                            <div className="vetted_radio">
                              <Radio.Group defaultValue="0" buttonStyle="solid">
                                <Radio.Button value="1">Yes</Radio.Button>
                                <Radio.Button value="0">No</Radio.Button>
                              </Radio.Group>
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Recommended By</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("recommended_by", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter a Name!"
                              }
                            ]
                          })(
                            <Input
                              placeholder="Recommended By"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                     
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Tier</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("tier", {
                            rules: [
                              {
                                required: true,
                                message: "Please select a tier!"
                              }
                            ]
                          })(
                              <div className="select_dropdown">
                            <select
                              defaultValue="Tier 1"
                              style={{ width: "290px" }}
                              onChange={handleChange}
                            >
                              <option value="Tier 1">Tier 1</option>
                              <option value="Tier 2">Tier 2</option>
                              <option value="Tier 3">Tier 3</option>
                              <option value="Tier 4">Tier 4</option>
                            </select></div>
                           
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Badges</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("badges", {
                            rules: [
                              {
                                required: false,
                                message: "Please select a badge!"
                              }
                            ]
                          })(
                            <div>
                              <img
                                onClick={e => this.badge("badge1", this.state.badge1_opacity,1)}
                                id="badge1"
                                style={{ opacity: "10%" }}
                                className="badge_pic"
                                src={require("../../Images/badge_1.png")}
                              />
                              <img
                                onClick={e => this.badge("badge2", this.state.badge2_opacity,2)}
                                id="badge2"
                                style={{ opacity: "10%" }}
                                className="badge_pic"
                                src={require("../../Images/badge_2.png")}
                              />
                              <img
                                onClick={e => this.badge("badge3", this.state.badge3_opacity,3)}
                                id="badge3"
                                style={{ opacity: "10%" }}
                                className="badge_pic"
                                src={require("../../Images/badge_3.png")}
                              />
                              <img
                                onClick={e => this.badge("badge4", this.state.badge4_opacity,4)}
                                id="badge4"
                                style={{ opacity: "10%" }}
                                className="badge_pic"
                                src={require("../../Images/badge_4.png")}
                              />
                              <img
                                onClick={e => this.badge("badge5", this.state.badge5_opacity,5)}
                                id="badge5"
                                style={{ opacity: "10%" }}
                                className="badge_pic"
                                src={require("../../Images/badge_5.png")}
                              />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Alerts</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("alert", {
                            rules: [
                              {
                                required: true,
                                message: "Please select an alert!"
                              }
                            ]
                          })(
                            <Select
                              defaultValue="Alert 1"
                              style={{ width: "290px" }}
                              onChange={handleChange}
                            >
                              <Option value="Tier 1">Alert 1</Option>
                              <Option value="Tier 2">Alert 2</Option>
                              <Option value="Tier 3">Alert 3</Option>
                              <Option value="Tier 4">Alert 4</Option>
                            </Select>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Notes</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("notes", {
                            rules: [
                              {
                                required: true,
                                message: "Enter Note!"
                              }
                            ]
                          })(<TextArea rows={7} className="bio_input" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                  <div className="save_btn">
                    <Button
                      className="save_btn"
                      type="primary"
                      htmlType="submit"
                      disabled={hasErrors(getFieldsError())}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </TabPane>
              <TabPane tab="Segmentation" key="2">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                  <div className="tab2">
                    <p className="personal_info_title">SEGMENTATION</p>
                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Talent ID</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("talentId", {
                            rules: [{ required: false, message: "" }]
                          })(
                            <Input
                              placeholder="Enter Talent Id"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Persona</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("persona", {
                            rules: [{ required: false, message: "" }]
                          })(
                            <Input
                              placeholder="Enter Persona"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Tags</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("tags", {
                            rules: [{ required: false, message: "" }]
                          })(
                            <Input
                              placeholder="Enter tags"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={6}>
                        <p className="each_row_title">Categories</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("categories", {
                            rules: [{ required: false, message: "" }]
                          })(
                            <Input
                              placeholder="Enter Categories"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="save_btn">
                      <Button
                        className="save_btn"
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </Form>
              </TabPane>

              <TabPane tab="Social" key="3">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                  <div className="tab3">
                    <p className="personal_info_title">Social Profile</p>


                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Fuel Profile</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("fuelLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/fuel_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Fuel Curated Store</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("fuelCuratedStoreLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/fuel_c_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Instagram</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("instagramLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/instagram_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Youtube</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("youtubeLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/youtube_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Twitter</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("twitterLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/twitter_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Facebook</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("facebookLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/facebook_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">LinkdIn</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("linkedin_tab", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/linkedin_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Blog</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("blogLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/blog_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Twitch</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("twitchLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/twitch_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Dribbble</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("dribbbleLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/dribble_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Behance</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("behanceLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/behance_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Other</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("otherLink", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                              <img id="social_tab_img" src={require("../../Images/other_tab.png")} />
                            <Input
                              placeholder="Enter a URL"
                              className="input_field_style"
                              id="social_tab_input"
                            />
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>



                  </div>
                  <div className="save_btn">
                    <Button
                      className="save_btn"
                      type="primary"
                      htmlType="submit"
                      disabled={hasErrors(getFieldsError())}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </TabPane>

              <TabPane tab="Work" key="4">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                  <div className="tab3">
                    <p className="personal_info_title">WORK</p>
                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Work</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("fuelProfile", {
                            rules: [
                              {
                                required: false
                              }
                            ]
                          })(
                            <div>
                                <div style={{display:"flex"}}>
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>

                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>

                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>
                              </div>



                              <div style={{display:"flex"}}>
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>

                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>
                              
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{ width: "100%" }}
                                  />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>
                              </div>
                              
                            </div>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="row_margin_top">
                      <Col span={6}>
                        <p className="each_row_title">Gig Link</p>
                      </Col>
                      <Col span={18}>
                        <Form.Item>
                          {getFieldDecorator("gig_link", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter a Link!"
                              }
                            ]
                          })(
                            <Input
                              placeholder="Enter a Link"
                              className="input_field_style"
                            />
                          )}
                        </Form.Item>
                      </Col>
                     
                    </Row>
                  </div>
                  <div className="save_btn">
                    <Button
                      className="save_btn"
                      type="primary"
                      htmlType="submit"
                      disabled={hasErrors(getFieldsError())}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: "addNewTalent" })(AddNewTalent);
