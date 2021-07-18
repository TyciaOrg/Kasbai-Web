import React, { Component } from "react";
import { db } from "./../../firebase_config";
import moment from "moment";

export default class VolunteerForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      toggleWindow: false,
      program_name: "",
    };
  }

  getAllProgramList() {
    db.collection("Programs").onSnapshot((querySnapshot) => {
      let collections = querySnapshot.docs.map((ele) => {
        return {
          id: ele.id,
          program_name: ele.data().program_name,
          active: ele.data().active,
          created: ele.data().created,
          modified: ele.data().modified,
        };
      });
      this.setState({
        programs: collections,
      });
    });
  }

  createNewProgram() {
    db.collection("Programs").add({
      program_name: this.state.program_name,
      created: new Date().toJSON(),
      active: true,
    });
    this.setState({
      toggleWindow: false,
    });
  }

  componentDidMount() {
    this.getAllProgramList();
  }

  render() {
    return (
      <div>
        <section>
          <div className="ml-2 mr-2">
            <div className="jumbotron pt-3 pl-3 pr-3 pb-3 border-radius-none">
              <div className="card bg-white border-radius-0">
                <div className="card-header bg-white">
                  <div className="row flex-row align-items-center">
                    <div className="col-lg-6">
                      <h5 className="mb-0">Forms for volunteers </h5>
                    </div>

                    <div className="col-lg-6">
                      <button
                        className="btn btn-primary float-right"
                        onClick={(e) =>
                          this.setState({
                            toggleWindow: !this.state.toggleWindow,
                          })
                        }
                      >
                        {" "}
                        Add New Form
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-5">
                      <ul className="list-group">
                        {this.state.programs.map((ele, ind) => {
                          return (
                            <>
                              <li key={ind} class="list-group-item">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="card-horizontal">
                                      <div className="img-square-wrapper">
                                        <div className="form-index">
                                          {ind + 1}
                                        </div>
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title mb-0">
                                          {" "}
                                          {ele.program_name}
                                        </h5>
                                        <p className="mb-0 b text-small text-gray">
                                          {moment
                                            .utc(ele?.created)
                                            .toDate()
                                            .toLocaleString()}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </>
                          );
                        })}
                        {this.state.toggleWindow ? (
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="card-horizontal">
                                  <div className="img-square-wrapper">
                                    <div className="form-index">
                                      {" "}
                                      {this.state.programs.length + 1}
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <input
                                      type="text"
                                      value={this.state.program_name}
                                      onChange={(e) =>
                                        this.setState({
                                          program_name: e.target.value,
                                        })
                                      }
                                      className="form-control col-lg-12 col-md-12"
                                      placeholder="Mention your volunteer form name"
                                    />
                                    <div className="row mt-3">
                                      <div className="col-lg-12">
                                        <button
                                          className="btn btn-primary mr-2"
                                          disabled={!this.state.program_name}
                                          onClick={() =>
                                            this.createNewProgram()
                                          }
                                        >
                                          {" "}
                                          Create Form
                                        </button>
                                        <button
                                          className="btn btn-primary pl-4 pr-4"
                                          onClick={(e) =>
                                            this.setState({
                                              toggleWindow:
                                                !this.state.toggleWindow,
                                            })
                                          }
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                    <div className="col-lg-7 d-flex">
                      <div className="card w-100 border-0 bg-gray">
                        <div
                          className="card-body"
                          style={{ height: "calc(100vh - 200px)" }}
                        >
                          <div className="card bg-white mb-2">
                            <div className="card-header bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-7">
                                <h6 className="mb-0">All Questions</h6>
                                </div>
                                <div className="col-lg-5">
                                <button className="btn btn-primary btn-sm float-right"> Add new Question</button>
                                </div>
                              </div>
                                
                            </div>  
                          </div>

                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">1. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>

                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">2. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>

                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">3. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>
                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">4. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>
                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">5. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>
                          <div className="card bg-white mb-2">
                            <div className="card-body bg-white">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                  <p className="mb-0">6. Today, how many numbers of person get vaccinated in this area ?</p>
                                </div>
                              </div>
                                
                            </div>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
