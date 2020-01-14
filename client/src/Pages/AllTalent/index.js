import React from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import "antd/dist/antd.css";
import SideBar from "../../Components/SideBar";
import SearchBar from "../../Components/SearchBar";
import AllTalentTable from "../../Components/AllTalentTable";
import Header from "../../Components/Header";
import {getAllTalents} from "../../Store/Actions/TalentAction"
import "../AllTalent/index.css";
import { Menu, Dropdown, Icon } from "antd";
let checked = false;
let vetted_yes = 0;
let vetted_no = 0;
class AllTalent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      data: [],
      dataLen: 0
    };
  }
  selectAll = () => {
    checked = true;
    this.setState({ checked: true });
  };

  componentDidMount = () => {
    this.props.getAllTalents()
    .then(res=>{
      this.props.talent.map(item=>{
        console.log(item.vetted)
        if(item.vetted==1){
          vetted_yes = vetted_yes + 1;
        }
        if(item.vetted==0){
          vetted_no = vetted_no + 1;
        }
      })
      this.setState({
        dataLen: this.props.talent.length,
        data: this.props.talent
      })
    })
  }

  render() {
    function hideRows() {
      let elms = document.getElementsByClassName("ant-table-expanded-row");
      for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = "none";
      }
    }

    function showRows() {
      let elms = document.getElementsByClassName("ant-table-expanded-row");
      for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = "table-row";
      }
    }

    const tableData = [
      {
        key: "1",
        number: "1",
        links: ["0", "1", "1", "0"],
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
        name: "John Brown",
        cmps: 2,
        persona: "Web Designer",
        categories: ["Web Designer"],
        igfollowers: "2,459",
        igeng: "3.2%",
        ytsubscribers: "123,346",
        yteng: "12.6%",
        vetted: "No",
        portfolio: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1"
        ]
      },
      {
        key: "2",
        number: "1",
        links: ["0", "1", "1", "0"],
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
        name: "John Brown",
        cmps: 2,
        persona: "Web Designer",
        categories: ["Web Designer"],
        igfollowers: "2,459",
        igeng: "3.2%",
        ytsubscribers: "123,346",
        yteng: "12.6%",
        vetted: "No",
        portfolio: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1"
        ]
      },
      {
        key: "3",
        number: "1",
        links: ["0", "1", "1", "0"],
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
        name: "John Brown",
        cmps: 2,
        persona: "Web Designer",
        categories: ["Web Designer"],
        igfollowers: "2,459",
        igeng: "3.2%",
        ytsubscribers: "123,346",
        yteng: "12.6%",
        vetted: "No",
        portfolio: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1"
        ]
      }
    ];

    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const { Search } = Input;

    return (
       <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>
        <div className="let_it_scroll" style={{ width: "100vw" }}>
          <SearchBar />
          <div className="main_div">
            <Header></Header>
          <div className="numof-talents-cards-main">
            <div className="numof-talents-main-card">
              <div>
                <h3 className="all-talent-heading">All Talent</h3>
                <h1 className="numof-all-talent">
                  {
                  this.props.talent.map((item,index)=>{
                    if(index==0)
                    return this.props.talent.length
                  })
                  }
                </h1>
              </div>
              <hr className="numof-talents-hr"></hr>
            </div>
            <div className="numof-talents-main-card">
              <div>
                <h3 className="all-talent-heading">Vetted Talent (Yes)</h3>
                <h1 className="numof-all-talent-gray">
                {vetted_yes}
                </h1>
              </div>
              <hr className="numof-talents-hr"></hr>
            </div>
            <div className="numof-talents-main-card">
              <div>
                <h3 className="all-talent-heading">Needs Vetting (No)</h3>
                <h1 className="numof-all-talent-gray">{vetted_no}</h1>
              </div>
              <hr className="numof-talents-hr"></hr>
            </div>
          </div>
          <div className="alltalent-show-data-main-div">
            <div className="alltalent-utility-topbar">
              <h3 className="alltalent-utilitybar-headings">Sort:</h3>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className="alltalents-utility-dropdowns"
              >
                <a className="ant-dropdown-link" href="#">
                  All <Icon type="down" />
                </a>
              </Dropdown>
              <h3 className="alltalent-utilitybar-headings">Filter:</h3>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className="alltalents-utility-dropdowns"
              >
                <a className="ant-dropdown-link" href="#">
                  All <Icon type="down" />
                </a>
              </Dropdown>
              <div className="search-div">
                <Search
                  placeholder="Search"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                />
              </div>
              <h3 className="alltalent-utilitybar-headings">View:</h3>
              <img
                src={require("../../Images/list_icon.png")}
                className="alltalent-list-icons"
                onClick={hideRows}
              ></img>
              <img
                src={require("../../Images/list_icon2.png")}
                className="alltalent-list-icons"
                role="button"
                onClick={showRows}
              ></img>
            </div>
            <div className="alltalent-utility-secondbar">
              <h3 className="alltalent-utilitybar-headings">Actions:</h3>
              <a className="altalent-utility-secondbar-links">Remove</a>
              <a
                className="altalent-utility-secondbar-links"
                onClick={e => this.selectAll()}
              >
                Select All
              </a>
              <a className="altalent-utility-secondbar-links">Deselect All</a>
            </div>
            <div className="table-main-div">
              <AllTalentTable
                data={this.state.data}
                checked={this.state.checked}
              ></AllTalentTable>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStatToProps = state => ({
  talent: state.talent.allTalents
});
export default connect(mapStatToProps, { getAllTalents })(AllTalent);
