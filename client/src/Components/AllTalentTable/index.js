import React from "react";
import "antd/dist/antd.css";
import {Link} from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import "../AllTalentTable/index.css";
import { Table, Divider, Tag, Row, Col, Popover } from "antd";
import { Icon } from "antd";


const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

class AllTalentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: ["1"] // Check here to configure the default column
    };
  }
  componentDidMount = () => {
    // console.log("jj");
    // if (this.props.checked) {
    //   console.log("--");
    //   this.setState({ selectedRowKeys: ["1", "2", "3"] });
    // } else {
    //   console.log("ss");
    // }
  };

  componentWillReceiveProps = () => {
    if (this.props.checked) {
      console.log("--");
      this.setState({ selectedRowKeys: ["1", "2", "3"] });
    } else {
      console.log("ss");
    }
  };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const data = this.props.data.map((item, index) => ({
      s_no: index + 1,
      key: item.id,
      name: item.name,
      photo: item.photo,
      persona: item.persona,
      vetted: item.vetted,
      categories: item.category,
      fuel_profile: item.fuel_profile,
      fuel_store: item.fuel_store,
      facebook: item.facebook,
      twitter: item.twitter,
      youtube: item.youtube,
      instagram: item.instagram,
      dribble: item.dribble,
      blog: item.blog,
      behance: item.behance,
      twitch: item.twitch,
      other: item.other,
      photo1: item.photo1,
      photo2: item.photo2,
      photo3: item.photo3,
      photo4: item.photo4,
      photo5: item.photo5,


  }));
    const columns = [
      {
        title: "#",
        dataIndex: "s_no",
        key: "s_no"
      },
      {
        title: "Links",
        key: "key",
        render: (record, text) => (
          <div>
            <Row gutter={[24, 0]} className="alltalent-table-links-row">
              <Col span={12}>
                {record.fuel_profile == null ? (
                  <a href={record.fuel_profile} ><img
                    src={require("../../Images/fuel_logo.png")}
                    className="alltalent-table-link-img links-opacity-half"
                  ></img></a>
                ) : (
                  <a href={record.fuel_profile} target="_blank" > <img
                    src={require("../../Images/fuel_logo.png")}
                    className="alltalent-table-link-img"
                  ></img></a>
                )}
              </Col>
              <Col span={12}>
                {record.fuel_store == null ? (
                  <img
                    src={require("../../Images/fuel_store.png")}
                    className="alltalent-table-link-img links-opacity-half"
                  ></img>
                ) : (
                  <a href={record.fuel_store} target="_blank" ><img
                    src={require("../../Images/fuel_store.png")}
                    className="alltalent-table-link-img"
                  ></img></a>
                )}
              </Col>
            </Row>
            <Row gutter={[24, 8]} className="alltalent-table-links-row">
              <Col span={12}>
                {record.instagram == null ? (
                  <img
                    src={require("../../Images/insta_logo.png")}
                    className="alltalent-table-link-img links-opacity-half"
                  ></img>
                ) : (
                  <a href={record.instagram} target="_blank" ><img
                    src={require("../../Images/insta_logo.png")}
                    className="alltalent-table-link-img"
                  ></img></a>
                )}
              </Col>
              <Col span={12}>
                {record.youtube == null ? (
                  <img
                    src={require("../../Images/youtube_logo.png")}
                    className="alltalent-table-link-img links-opacity-half"
                  ></img>
                ) : (
                  <a href={record.youtube} target="_blank" > <img
                    src={require("../../Images/youtube_logo.png")}
                    className="alltalent-table-link-img"
                  ></img></a>
                )}
              </Col>
            </Row>
          </div>
        )
      },
      {
        title: "Photo",
        dataIndex: "photo",
        key: "photo",
        render: photo => (
          <div>
            <img className="alltalent-table-user-photo" src={photo}></img>
          </div>
        )
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "CMPs",
        dataIndex: "cmps",
        key: "cmps"
      },
      {
        title: "Perona",
        dataIndex: "persona",
        key: "persona"
      },
      {
        title: "Categories",
        dataIndex: "categories",
        key: "categories",
        render: categories => (
          <div className="category-tags-main-div">
            {categories.map(category => {
              return (
                <div className="alltalent-category-tag-div">
                  <p className="alltalent-category-tag-text">
                    {category.toUpperCase()}
                  </p>
                </div>
              );
            })}
          </div>
        )
      },
      {
        title: "IG Followers",
        dataIndex: "igfollowers",
        key: "igfollowers"
      },
      {
        title: "IG ENG%",
        dataIndex: "igeng",
        key: "igeng"
      },
      {
        title: "YT Subscribers",
        dataIndex: "ytsubscribers",
        key: "ytsubscribers"
      },
      {
        title: "YT ENG%",
        dataIndex: "yteng",
        key: "yteng"
      },
      {
        title: "Vetted",
        dataIndex: "vetted",
        key: "vetted",
        render: vetted =>
          vetted == 1 ? (
            <span>Yes</span>
          ) : (
            <span style={{ color: "red" }}>No</span>
          )
      },

      {
        title: "Action",
        key: "key",
        render: record => (
          <div>
            <Popover
              placement="bottom"
              //   title={title}
              content={
                <div>
        <p>
          <Link to={"/talentProfile" + "/" + record.key } >View Profile</Link>
        </p>
        <p>
          <a>Edit Profile</a>
        </p>
        <p>
          <a>Refresh Social</a>
        </p>
        <p>
        <CSVLink data={data}>Export To CSV</CSVLink>;
        </p>
      </div>
              }
              trigger="click"
            >
              <img
                src={require("../../Images/action_dots_icon.png")}
                className="table-action-dots-log"
              ></img>
            </Popover>
          </div>
        )
      }
    ];

    const content = (
      <div>
        <p>
          <Link to={"/talentProfile" } >View Profile</Link>
        </p>
        <p>
          <a>Edit Profile</a>
        </p>
        <p>
          <a>Refresh Social</a>
        </p>
        <p>
          <a>Export to CSV</a>
        </p>
      </div>
    );

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        },
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ]
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          defaultExpandAllRows="true"
          size="small"
          expandedRowRender={record => (
            <div className="alltalent-table-portfolio-imgs-div ">
              <img
                src={record.photo1}
                className="alltalent-table-portfolio-img"
              ></img>
              <img
                src={record.photo2}
                className="alltalent-table-portfolio-img"
              ></img>
              <img
                src={record.photo3}
                className="alltalent-table-portfolio-img"
              ></img>
              <img
                src={record.photo4}
                className="alltalent-table-portfolio-img"
              ></img>
              <img
                src={record.photo5}
                className="alltalent-table-portfolio-img"
              ></img>
            </div>
          )}
        />
      </div>
    );
  }
}

export default AllTalentTable;
