import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


class KasbaiLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPrograms: [],
      selectedState: null,
      listOfState: [
        {
          name: "All State",
          value: "All State",
        },
        {
          name: "UttaraKhand",
          value: "UttaraKhand",
        },
        {
          name: "Uttara Pradesh",
          value: "Uttara Pradesh",
        },
        {
          name: "Rajasthan",
          value: "Rajasthan",
        },
        {
          name: "Gujurat",
          value: "Gujurat",
        },
        {
          name: "Madhya Pradesh",
          value: "Madhya Pradesh",
        },
        {
          name: "Maharastra",
          value: "Maharastra",
        },
        {
          name: "Karanataka",
          value: "Karanataka",
        },
        {
          name: "Telengana",
          value: "Telengana",
        },
        {
          name: "Andhra Pradesh",
          value: "Andhra Pradesh",
        },
        {
          name: "Chatishgarh",
          value: "Chatishgarh",
        },
        {
          name: "Odisha",
          value: "Odisha",
        },
        {
          name: "Jharkhand",
          value: "Jharkhand",
        },
        {
          name: "West Bangal",
          value: "West Bangal",
        },
        {
          name: "Bihar",
          value: "Bihar",
        },
        {
          name: "Asham",
          value: "Asham",
        },
      ],
      listOfPrograms: [
        {
          name: "Survival Kits",
          target: 1000,
          completed: 678,
          daily: 20,
          percentage: 7,
        },
        {
          name: "Vaccine Registrations",
          target: 2000,
          completed: 1678,
          daily: 80,
          percentage: -0.8,
        },
        {
          name: "Primary Health Connectivity",
          target: 2000,
          completed: 1678,
          daily: 100,
          percentage: 8,
        },
        {
          name: "O2 Cylinder Distributed",
          target: 2000,
          completed: 178,
          daily: 280,
          percentage: -10,
        },
        {
          name: "Auto & Ambulances",
          target: 2000,
          completed: 178,
          daily: 90,
          percentage: 1.0,
        },
        {
          name: "Food Packet Distributed",
          target: 2000,
          completed: 178,
          daily: 70,
          percentage: 7.0,
        },
        {
          name: "Survival Kits",
          target: 1000,
          completed: 678,
          daily: 20,
          percentage: 7,
        },
        {
          name: "Vaccine Registrations",
          target: 2000,
          completed: 1678,
          daily: 80,
          percentage: -0.8,
        },
        {
          name: "Primary Health Connectivity",
          target: 2000,
          completed: 1678,
          daily: 100,
          percentage: 8,
        },
        {
          name: "O2 Cylinder Distributed",
          target: 2000,
          completed: 178,
          daily: 280,
          percentage: 10,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      selectedState: this.state.listOfState[0].value,
    });

    
  }

  percentageBodyTemplate(rowData) {
    return (
      <div>
        {rowData.percentage}{" "}
        {rowData.percentage < 0 ? (
          <i className="zmdi zmdi-long-arrow-down text-danger"></i>
        ) : (
          <i className="zmdi zmdi-long-arrow-up text-success"></i>
        )}
      </div>
    );
  }

  render() {
    return (
      <section>
        <div className="container-fluid mb-3">
          <div className="card no-border" style={{ borderRadius: "0px" }}>
            <div className="card-body border-none pr-0 pl-0 pt-0 pb-0">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                
                  <Carousel>
                    <Carousel.Item interval={800}>
                      <img
                        className="d-block w-100"
                        src={require("./../images/image-2.jpg")}
                        alt="Events"
                      />
                      <Carousel.Caption>
                        <h2 className="text-white">
                          India Fight Against Corona
                        </h2>
                        <div className="separator"></div>
                        <p className="motto-text-style">
                          A collective frontliners from rural India to provide
                          relief and resources <br />
                          to the COVID affected 'communities at risk'
                        </p>
                        <button className="btn btn-primary nirmala-font-text-style mr-2">
                          Donate Now
                        </button>
                        <button className="btn btn-primary nirmala-font-text-style">
                          Get Involved
                        </button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="jumbotron">
                <h4 className="text-center ">- Our Impact Till Today -</h4>
                <div className="row d-flex flex-row align-items-center justify-content-center mt-5">
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card kasbai-data-card">
                      <div className="card-body">
                        <h5>Number of Frontliners Across India</h5>
                        <button className="btn btn-primary kasbai-data-card-button kasbai-data-card-button">
                          {" "}
                          10000 +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card kasbai-data-card">
                      <div className="card-body">
                        <h5>Number Of Families We Reached As Of Now</h5>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-primary kasbai-data-card-button">
                            {" "}
                            200000 +{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card kasbai-data-card">
                      <div className="card-body">
                        <h5>Villages We Came Across India As of Now</h5>
                        <button className="btn btn-primary kasbai-data-card-button">
                          {" "}
                          2000 +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card kasbai-data-card">
                      <div className="card-body">
                        <h5>Number Of Communities We help Across India </h5>

                        <button className="btn btn-primary kasbai-data-card-button">
                          {" "}
                          40 +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card kasbai-data-card">
                      <div className="card-body">
                        <h5>States We Came Across India As of Now</h5>
                        <button className="btn btn-primary kasbai-data-card-button">
                          {" "}
                          16 +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <h3>Choose State </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p className="kasbai-data-subtitle pr-5 mr-5">
                Know about our work done across india. This collect our data so
                far
                <br /> done across all the communities present all over india.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <Dropdown
                    value={this.state.selectedState}
                    options={this.state.listOfState}
                    onChange={(e) =>
                      this.setState({
                        selectedState: e.value,
                      })
                    }
                    placeholder="Select State"
                    optionLabel="name"
                    id="state-dropdown"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <DataTable
                    value={this.state.listOfPrograms}
                    responsive={true}
                    rows={20}
                    id="data-table"
                  >
                    <Column header="Programs" field="name"></Column>
                    <Column header="Target" field="target"></Column>
                    <Column header="Completed" field="completed"></Column>
                    <Column header="Daily Avg." field="daily"></Column>
                    <Column
                      header="Percentage"
                      body={this.percentageBodyTemplate}
                    ></Column>
                  </DataTable>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  alt=""
                  src={require(`./../images/kasbai-india-map.jpg`)}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row mb-4">
            <div className="col-lg-6">
              <h3 className="">Latest Campaigns </h3>
            </div>
            <div className="col-lg-6 text-right">
                    <button className="btn btn-primary mr-3"> View All</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="campaign-card mt-2">
                  <div className="campaign-date">
                    <span>06</span>
                    <span className="month">
                    Sep<br/>
                    2020
                  </span>
                  </div>
                  <div className="campaign-detail">
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</h5>
                    <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campaign-card mt-2">
                  <div className="campaign-date">
                    <span>07</span>
                    <span className="month">
                    JUL<br/>
                    2021
                  </span>
                  </div>
                  <div className="campaign-detail">
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</h5>
                    <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campaign-card mt-2">
                  <div className="campaign-date">
                    <span>08</span>
                    <span className="month">
                    JUL<br/>
                    2021
                  </span>
                  </div>
                  <div className="campaign-detail">
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</h5>
                    <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campaign-card mt-2">
                  <div className="campaign-date">
                    <span>09</span>
                    <span className="month">
                    JUL<br/>
                    2021
                  </span>
                  </div>
                  <div className="campaign-detail">
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</h5>
                    <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section</p>
                  </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="campaign-card mt-2">
                  <div className="campaign-date">
                    <span>09</span>
                    <span className="month">
                    JUL<br/>
                    2021
                  </span>
                  </div>
                  <div className="campaign-detail">
                    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</h5>
                    <p>a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section</p>
                  </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    );
  }
}

export default KasbaiLandingPage;
