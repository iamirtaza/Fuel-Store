import React from "react";
import { connect } from "react-redux";
import { Button, Tabs, Menu, Dropdown, Icon, Table, Divider, Tag } from "antd";
import { Row, Col } from "antd";
import SideBar from "../../Components/SideBar";
import SearchBar from "../../Components/SearchBar";
import AddNewTalentT from "../../Components/AddNewTalent"
import { getTalentById } from "../../Store/Actions/TalentAction";
import "./style.css";
import "../../Components/AddNewTalent/style.css"
import "antd/dist/antd.css";

let isVetter = 1;
let talentType = "s";
let badgesArray = ["1", "3", "5"];

class TalentProfile extends React.Component {
 
  componentDidMount = () => {
    let id = 47;
    this.props.getTalentById(this.props.match.params.id);
    console.log(this.props.talent);
  };


  openNav = () => {
    document.getElementsByClassName("sidebar")[0].style.width = "42%";
  }

  makeItem(e) {
    console.log(e);
    return (
      <div>
        <Col span="8">
          <p className="categories_data">{e}</p>
        </Col>
      </div>
    );
  }

  showImage(e) {
    return (
      <div>
        <Col style={{ position: "relative" }} span="4">
          <img className="six_images" src={e}></img>
        </Col>
      </div>
    );
  }

  socailPosts(e, index) {
    console.log("sas", e);
    if (index == "fb" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/fb.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Facebook</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "twitter" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/twitter.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Twitter</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "fuel" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/fuel.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Fuel Profile</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "fuel_store" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/fuel_store.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Fuel Store</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "instagram" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/instagram.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Instagram</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "youtube" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/youtube.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Youtube</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "behance" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/behance.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Behance</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "other" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <p></p>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Other</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "linkedin" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/linkedin.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Linkedin</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "blog" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/blog.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Blog</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "twitch" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/twitch.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Twitch</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
    if (index == "dribble" && e != null) {
      return (
        <div style={{ height: "55px" }}>
          <Row>
            <Col span="5">
              <a href={e} target="_blank">
                <img
                  className="social_img"
                  src={require("../../Images/dribble.png")}
                ></img>
              </a>
            </Col>
            <Col span="14">
              <p className="close_margin">Dribble</p>
              <p className="followers">130,000 followers</p>
            </Col>
            <Col span="5">
              <p>--</p>
            </Col>
          </Row>
          <hr className="line_3" />
        </div>
      );
    }
  }

  campaignPost(e, index) {
    return (
      <div style={{ height: "55px" }}>
        <Row>
          <Col span="5">
            <img
              className="campaign_img"
              src={require("../../Images/campaigns_icon.png")}
            ></img>
          </Col>
          <Col span="14">
            <p className="campaign_name">Campaign Name</p>
          </Col>
          <Col span="5">
            <p className="campaign_date">12/04/19</p>
          </Col>
        </Row>
        <hr className="line_3" />
      </div>
    );
  }

  alertPost(e, index) {
    let _date;
    this.props.talent.map(item => {
      item.alert_date.map((date, i) => {
        if (index == i) {
          _date = date;
        }
      });
    });
    return (
      <div style={{ height: "55px" }}>
        <Row>
          <Col span="5">
            <img
              className="alert_img"
              src={require("../../Images/alert_icon.png")}
            ></img>
          </Col>
          <Col span="14">
            <p className="campaign_name">{e}</p>
          </Col>
          <Col span="5">
            <p className="campaign_date">{_date}</p>
          </Col>
        </Row>
        <hr className="line_3" />
      </div>
    );
  }

  vatted(e) {
    if (e == 1) {
      return (
        <div className="yes_no">
          <p id="yes_btn" className="vetted_yes">
            Yes
          </p>
          <p className="vetted_no">No</p>
        </div>
      );
    } else {
      return (
        <div className="yes_no">
          <p className="vetted_yes">Yes</p>
          <p id="yes_btn" className="vetted_no">
            No
          </p>
        </div>
      );
    }
  }

  talentType(e) {
    if (e == "s") {
      return (
        <div className="horizontal_align">
          <p
            style={{ backgroundColor: "#34bfa3", color: "#FFFFFF" }}
            className="talent_seller"
          >
            Seller
          </p>
          <p className="talent_influencer">Influencer</p>
        </div>
      );
    } else {
      return (
        <div className="horizontal_align">
          <p className="talent_seller">Seller</p>
          <p
            style={{ backgroundColor: "#34bfa3", color: "#FFFFFF" }}
            className="talent_influencer"
          >
            Influencer
          </p>
        </div>
      );
    }
  }

  makeBadge(name, e) {
    console.log(name, e);
    if (e) {
      return (
        <img
          style={{ opacity: "100%" }}
          className="badge_pic"
          src={require("../../Images/" + name)}
        />
      );
    } else {
      return (
        <img className="badge_pic" src={require("../../Images/" + name)} />
      );
    }
  }

  badges = () => {
    let badge1,
      badge2,
      badge3,
      badge4,
      badge5 = false;
    this.props.talent.map(i => {
      i.badges.map(item => {
        if (item == 1) {
          badge1 = true;
        }
        if (item == 2) {
          badge2 = true;
        }
        if (item == 3) {
          badge3 = true;
        }
        if (item == 4) {
          badge4 = true;
        }
        if (item == 5) {
          badge5 = true;
        }
      });
    });

    return (
      <div className="horizontal_align">
        {this.makeBadge("badge_1.png", badge1)}
        {this.makeBadge("badge_2.png", badge2)}
        {this.makeBadge("badge_3.png", badge3)}
        {this.makeBadge("badge_4.png", badge4)}
        {this.makeBadge("badge_5.png", badge5)}
      </div>
    );
  };

  render() {
    const { TabPane } = Tabs;
    let categories = [
      "Web engineer",
      "Designer",
      "Graphic Designer",
      "Android Developer"
    ];
    let tags = [
      "Colorful",
      "Android",
      "Retro",
      "Graceful",
      "Retro",
      "Graceful",
      "Retro",
      "Graceful"
    ];

    const onClick = ({ key }) => {};

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );

    const columns = [
      {
        title: "#",
        dataIndex: "id",
        key: "id",
        render: text => <a>{text}</a>
      },
      {
        title: "Post Date",
        dataIndex: "postDate",
        key: "postDate"
      },
      {
        title: "Campaign",
        dataIndex: "Campaign",
        key: "Campaign"
      },
      {
        title: "Chanel",
        key: "Chanel",
        dataIndex: "Chanel"
      },
      {
        title: "Post Name",
        key: "postName",
        dataIndex: "postName"
      },
      {
        title: "URL",
        key: "url",
        dataIndex: "url"
      },
      {
        title: "Actions",
        key: "actions",
        dataIndex: "actions"
      }
    ];

    const data = [
      {
        id: "1",
        postDate: "12/13/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "2",
        postDate: "12/14/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      },
      {
        id: "3",
        postDate: "12/15/19",
        Campaign: "Jingle Bells Campains",
        Chanel: "Youtube",
        postName: "Music Video Launch",
        url: "http://www.google.ecom",
        actions: ""
      }
    ];

    return (
      <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>
        <div className="let_it_scroll" style={{ width: "100vw" }}>
          <SearchBar />
          <div className="main_div">
            <Row>
              <Col span="3" offset="20">
                <div className="add_talent_btn">
                  <Button icon="plus" onClick={e=>this.openNav()}>New Talent</Button>
                </div>
              </Col>
              <Col span="1">
                <div className="rount_btn">
                  <Button shape="circle" icon="dash" />
                </div>
              </Col>
            </Row>

            <Row>
              <div className="first_box">
                <div className="first_box_context">
                  <Row>
                    <Col span="2">
                    {this.props.talent.map(item => {
                          return <img
                          className="talent_profile_pic"
                          src={item.photo}
                        />
                        })}
                    </Col>
                    <Col className="title_col" span="10">
                      <p className="profile_title_name">
                        {this.props.talent.map(item => {
                          return item.name;
                        })}
                      </p>
                      <div className="horizontal_align">
                        <p className="profile_title_email">
                          {this.props.talent.map((item, index) => {
                            if (index == 0) {
                              return item.email;
                            }
                          })}
                        </p>
                        <p className="profile_title_number">
                          {this.props.talent.map(item => {
                            return item.phone;
                          })}
                        </p>
                      </div>
                      {this.badges()}
                    </Col>
                    <Col className="text_align_right" span="7">
                      <p className="data_heading">Tier</p>
                      <p className="data_heading">Talent ID</p>
                      <p className="talent_type_txt">Talent Type</p>
                    </Col>

                    <Col className="title_col" span="4">
                      <p className="tier_data">
                        {this.props.talent.map(item => {
                          return item.tier;
                        })}
                      </p>
                      <p className="tier_data">
                        {this.props.talent.map(item => {
                          return item.talent_id;
                        })}
                      </p>
                      {this.props.talent.map(item =>
                        this.talentType(item.talent_type)
                      )}
                    </Col>
                  </Row>
                  <hr className="line" />

                  <Row className="upper_margin">
                    <Col span="12">
                      <Row>
                        <Col className="text_align_right" span="4">
                          <p className="data_heading">Persona</p>
                        </Col>
                        <Col className="left_margin" span="18">
                          <p className="tier_data">
                            {this.props.talent.map(item => {
                              return item.persona;
                            })}
                          </p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="text_align_right" span="4">
                          <p className="data_heading">Catergories</p>
                        </Col>
                        <Col className="left_margin" span="16">
                          {this.props.talent.map(item =>
                            item.categories.map(category =>
                              this.makeItem(category)
                            )
                          )}
                        </Col>
                      </Row>

                      <Row className="upper_margin">
                        <Col className="text_align_right" span="4">
                          <p className="data_heading">Tags</p>
                        </Col>
                        <Col className="left_margin" span="16">
                          {this.props.talent.map(item =>
                            item.tags.map(tag => this.makeItem(tag))
                          )}
                        </Col>
                      </Row>
                    </Col>

                    <Col span="12">
                      <Row>
                        <Col className="text_align_right" span="5">
                          <p className="data_heading">Recommended By</p>
                        </Col>
                        <Col className="left_margin_less" span="9">
                          <p className="tier_data">
                            {this.props.talent.map(item => {
                              return item.recommended_by;
                            })}
                          </p>
                        </Col>

                        <Col className="text_align_right" span="2">
                          <p className="data_heading">Vetted</p>
                        </Col>

                        <Col span="6">
                          {this.props.talent.map(item =>
                            this.vatted(item.vetted)
                          )}
                        </Col>
                      </Row>

                      <Row>
                        <Col className="text_align_right" span="5">
                          <p className="data_heading">Bio</p>
                        </Col>
                        <Col className="bio_data_show" span="19">
                          <p className="bio_data">
                            {this.props.talent.map(item => {
                              return item.bio;
                            })}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
              <Row>
                {this.props.talent.map(item => this.showImage(item.photo1))}
                {this.props.talent.map(item => this.showImage(item.photo2))}
                {this.props.talent.map(item => this.showImage(item.photo3))}
                {this.props.talent.map(item => this.showImage(item.photo4))}
                {this.props.talent.map(item => this.showImage(item.photo5))}
                {this.props.talent.map(item => this.showImage(item.photo6))}
              </Row>
            </Row>

            <div className="post_tabs">
              <Tabs>
                <TabPane tab="Overview" key="1">
                  <Row gutter={[10, 0]}>
                    <Col span="8">
                      <div className="main_tab_card">
                        <Row>
                          <Col span="12">
                            <p className="social_card_title">Social</p>
                          </Col>
                          <Col span="12">
                            <Dropdown
                              className="align_right"
                              overlay={menu}
                              trigger={["click"]}
                              placement="bottomRight"
                            >
                              <Icon type="down" />
                            </Dropdown>
                          </Col>
                        </Row>
                        <hr className="line_2" />
                        <div className="social_posts">
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.facebook, "fb")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.twitter, "twitter")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.fuel_profile, "fuel")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.fuel_store, "fuel_store")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.instagram, "instagram")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.twitch, "twitch")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.behance, "behance")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.dribble, "dribble")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.blog, "blog")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.youtube, "youtube")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.linkedin, "linkedin")
                          )}
                          {this.props.talent.map((item, index) =>
                            this.socailPosts(item.other, "other")
                          )}
                        </div>
                      </div>
                    </Col>

                    <Col span="8">
                      <div className="main_tab_card">
                        <Row>
                          <Col span="12">
                            <p className="social_card_title">
                              Campaigns (CMPs)
                            </p>
                          </Col>
                          <Col span="12">
                            <Dropdown
                              className="align_right"
                              overlay={menu}
                              trigger={["click"]}
                              placement="bottomRight"
                            >
                              <Icon type="down" />
                            </Dropdown>
                          </Col>
                        </Row>
                        <hr className="line_2" />
                        <div className="social_posts">
                          {tags.map((item, index) =>
                            this.campaignPost(item, index)
                          )}
                        </div>
                      </div>
                    </Col>

                    <Col span="8">
                      <div className="main_tab_card">
                        <Row>
                          <Col span="12">
                            <p className="social_card_title">Alerts</p>
                          </Col>
                          <Col span="12">
                            <Dropdown
                              className="align_right"
                              overlay={menu}
                              trigger={["click"]}
                              placement="bottomRight"
                            >
                              <Icon type="down" />
                            </Dropdown>
                          </Col>
                        </Row>
                        <hr className="line_2" />
                        <div className="social_posts">
                          {/* {tags.map((item, index) =>
                            this.alertPost(item, index)
                          )} */}
                          {this.props.talent.map(item =>
                            item.alert_name.map((alert, index) =>
                              this.alertPost(alert, index)
                            )
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="notes_card">
                    <Row>
                      <Col span="12">
                        <p className="social_card_title">Notes</p>
                      </Col>
                      <Col span="12">
                        <Dropdown
                          className="align_right"
                          overlay={menu}
                          trigger={["click"]}
                          placement="bottomRight"
                        >
                          <Icon type="down" />
                        </Dropdown>
                      </Col>
                    </Row>
                    <hr className="line_2" />
                  </div>
                </TabPane>
                <TabPane tab="Posts" key="2">
                  <div className="post_tab">
                    <Row>
                      <Col span="12">
                        <p className="social_card_title">Social Posts</p>
                      </Col>
                      <Col span="12">
                        <Dropdown
                          className="align_right"
                          overlay={menu}
                          trigger={["click"]}
                          placement="bottomRight"
                        >
                          <Icon type="down" />
                        </Dropdown>
                      </Col>
                    </Row>
                    <hr className="line_2" />
                    <div className="table_div">
                      <Table columns={columns} dataSource={data} />
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <AddNewTalentT className="add_flyout"/>
      </div>
    );
  }
}

const mapStatToProps = state => ({
  talent: state.talent.profile
});
export default connect(mapStatToProps, { getTalentById })(TalentProfile);
