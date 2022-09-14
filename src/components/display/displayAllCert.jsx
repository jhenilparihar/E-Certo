import React, { Component } from "react";
import { useState} from "react";
import Table from "./Table";
import Pagination from './Pagination';
import add from "./assets/add.svg";
import s from "./assets/search.svg";

class DisplayAllCert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      currentPage: 1,
      postsPerPage: 10,
      passoutyear:0,
      
    };
  }
  emailLoop = (certList) => {
    certList.forEach(cert => {
      this.props.sendEmail(cert.name, cert.email, cert.transactionHash);
    });

  }
 enableState = () => {
    var btnstate = document.getElementById("resend-btn");
    btnstate.style.backgroundColor = 'white';
    btnstate.style.color = '#40a9ff';
    btnstate.style.border = "1px solid #40a9ff";
    btnstate.style.cursor = "pointer"
  }
  disableState = () => {
    var btnstate = document.getElementById("resend-btn");
    btnstate.style.color = 'rgba(0,0,0,0.25)';
    btnstate.style.border = "1px solid #d9d9d9";
    btnstate.style.cursor = "not-allowed"
  }
  paginate = pageNumber => this.setState({currentPage:pageNumber});
  search = () => {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
  const allCert=this.props.allCert;
    if (this.state.query.length == "") {
      return allCert.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      return allCert.filter((item) => item.name.toLowerCase().includes(this.state.query));
    }


  }
  // toggleFilterdiv = () => {;
    
  //   var x=document.querySelector(".fill");
  //   if (x.style.display == "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  //   console.log(this.state.passoutyear);
   
  // }
  //  dept = () => {
    
  //   document.querySelector(".fill").style.display="none";
  //   document.querySelector(".department-div").style.display="block";
    

   
  // }
  render() {
    return (
      <>
      <div class="wap">
        <div className="upper-div">
          <div className="tag-div">
            <span class="cer1">
              Certificates
            </span>
            <h1 class="cer2">
              Certificates
            </h1>
          </div>
          <div className="issuer-div">
            <button className="issuer-btn">
              <span>
                <img src={add} alt="" />
              </span>
              <span>Issue Certificate</span>
            </button>
          </div>
        </div>
        <div className="lower-div">
          <div className="filter-div">
            <div className="search-div">
              <h5>
                <span>
                  <img src={s} alt="" />
                </span>
                Search
              </h5>
              <div className="input-box">
                <input type="text" class="search" onChange={event => this.setState({query:event.target.value.toLowerCase()})} />
                <span>Search by name</span>
              </div>
            </div>
            <div className="hr-div"></div>
            <div className="search-div">
              <div className="filter-header">
                <h5>
                  <span>
                    <img src={s} alt="" />
                  </span>
                  Filter
                </h5>
                <button class="filter-btn">
                  <span>Clear all Filters</span>
                </button>

              </div>

              <div className="input-box">
                <input type="text" class="search" onChange={event => this.setState({query:event.target.value.toLowerCase()})} />
                <span>Select a group</span>
              </div>
              <div className="add-filter" onClick={this.toggleFilterdiv}>
                <span><span class="filter-plus">+</span> Add Filters</span>
              </div>
            </div>
            {/* <div class="fill" >
              <span onClick={this.dept}>Department</span>
              <span>Passout year</span>
              <span>SAP Id</span>
            </div>
            <div className="department-div">
              <input list="browsers" placeholder="Select Department" onChange={event => this.setState({passoutyear:event.target.value.toLowerCase()})}/>
              <datalist id="browsers">
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
    <option value="2000" />
    <option value="2011" />
    <option value="2012" />
    <option value="2013" />
    <option value="2014" />
  </datalist>
            </div> */}
          </div>
          <div className="table-div">
            <Table allCert={this.props.allCert} data={this.search()} enableState={this.enableState} disableState={this.disableState} emailLoop={this.emailLoop} />

            <div className="pagination-div">
              {this.state.query.length == "" ? (
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={this.props.allCert.length}
                  paginate={this.paginate}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>


      </div>
      </>
    );
  }
}

export default DisplayAllCert;
