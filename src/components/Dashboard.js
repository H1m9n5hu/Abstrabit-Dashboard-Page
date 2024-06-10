import React, { useState } from "react";
import "./dashboard.css";
import utkarshImage from "../assets/utkarsh.png";
import blueIcon from "../assets/blueIcon.png";
import bajajImage from "../assets/bajaj.png";
import skyBlueIcon from "../assets/skyblueIcon.png";
import shriramImage from "../assets/shriram.png";
import blackIcon from "../assets/blackIcon.png";
import techMahindraImage from "../assets/techMahindra.png";
import redIcon from "../assets/redIcon.png";
import timelineImage from "../assets/timeline.png";
import PieChartWithCustomizedLabel from "./PieChartWithCustomizedLabel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <h2 className="greetings">Welcome, Johan Paul</h2>
      <div className="con1">
        <div className="subCon1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{margin: '0', fontSize: '16px', fontWeight: 'bold'}}>Your FD Portfolio</p>
            <div className="dropdownMenu">
              <button className="dropdownToggle">
                Deposit Amt {isDropdownOpen ? <FontAwesomeIcon style={{margin: '0 0 0 10px'}} icon={faCaretUp} /> : <FontAwesomeIcon style={{margin: '0 0 0 10px'}} icon={faCaretDown} />}
              </button>
            </div>
          </div>
          <div style={{margin: '20px 0 0 0', display: 'flex', justifyContent: 'space-between'}}>
            <PieChartWithCustomizedLabel />
            <div style={{width: '162px', height: '121px', margin: '25px 0 0 0'}}>
              <div style={{display: "flex", flexDirection: 'row', margin: '0 0 11px 0'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '100%', background: '#6C63FF 0% 0% no-repeat padding-box', opacity: '1', margin: '7px 0 0 0'}}></div>
                <p style={{fontSize: '14px', color: '#1A1B1E', opacity: '1', margin: '0 0 0 10px'}}> Bajaj Finserv</p>
              </div>              
              <div style={{display: "flex", flexDirection: 'row', margin: '0 0 11px 0'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '100%', background: '#FA9D17 0% 0% no-repeat padding-box', opacity: '1', margin: '7px 0 0 0'}}></div>
                <p style={{fontSize: '14px', color: '#1A1B1E', opacity: '1', margin: '0 0 0 10px'}}> Shriram Finance</p>
              </div>              
              <div style={{display: "flex", flexDirection: 'row', margin: '0 0 11px 0'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '100%', background: '#B9C606 0% 0% no-repeat padding-box', opacity: '1', margin: '7px 0 0 0'}}></div>
                <p style={{fontSize: '14px', color: '#1A1B1E', opacity: '1', margin: '0 0 0 10px'}}> Mahindra Finance</p>
              </div>              
              <div style={{display: "flex", flexDirection: 'row', margin: '0 0 11px 0'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '100%', background: '#59CBD3 0% 0% no-repeat padding-box', opacity: '1', margin: '7px 0 0 0'}}></div>
                <p style={{fontSize: '14px', color: '#1A1B1E', opacity: '1', margin: '0 0 0 10px'}}> Utkarsh Small Finance Bank</p>
              </div>              
            </div>
          </div>
        </div>
        <div className="subCon2">
          <p style={{margin: '0', fontSize: '16px', fontWeight: 'bold'}}>FD Maturity Timeline</p>
          <img src={timelineImage} style={{width: '750px', height: '169px', margin: '40px 0 20px 0'}} alt="FD Timeline" />
        </div>
      </div>
      <div className="con2">
        <div className="subCon3">
          <div className="subCon8">
            <div
              style={{
                width: "368px",
                height: "202px",
                background: "#F8F0FF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "4px solid #FFFFFF",
                borderRadius: "5px",
                opacity: "1",
                margin: "0 26px 0 0",
              }}
            >
              <div className="subCon8">
                <img
                  src={utkarshImage}
                  style={{
                    width: "49px",
                    height: "48px",
                    margin: "20px 16px 0 22px",
                  }}
                  alt="Utkarsh Logo"
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "34px 0 0 0",
                  }}
                >
                  {" "}
                  Utkarsh Small Finance Bank
                </p>
              </div>
              <div className="subCon8">
                <div
                  className="subCon8"
                  style={{
                    background: "#EFDDFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "0.91",
                    margin: "14px 10px 0 25px",
                  }}
                >
                  <img
                    src={blueIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                    }}
                    alt="Blue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 9px 9px 0",
                    }}
                  >
                    Highest Interest Rate
                  </p>
                </div>
                <div
                  className="subCon8"
                  style={{
                    background: "#EFDDFF 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "0.91",
                    margin: "14px 26px 0 0px",
                  }}
                >
                  <img
                    src={blueIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                    }}
                    alt="Blue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 35px 9px 0",
                    }}
                  >
                    RBI Insured
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 29px 23px 28px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "0",
                    }}
                  >
                    Interest Upto
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1A1B1E",
                      opacity: "0.6",
                      margin: "0 0 8px 0",
                    }}
                  >
                    9.10% p.a
                  </p>
                </div>
                <div
                  style={{
                    background: "#520B8D 0% 0% no-repeat padding-box",
                    boxShadow: "0px 5px 5px #0000000D",
                    borderRadius: "5px",
                    opacity: "1",
                    fontSize: "14px",
                    color: "#ffffff",
                    padding: "11.5px 30px",
                  }}
                >
                  Book Now
                </div>
              </div>
            </div>
            <div
              style={{
                width: "368px",
                height: "202px",
                background: "#EFF6FF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "4px solid #FFFFFF",
                borderRadius: "5px",
                opacity: "1",
                margin: "0",
              }}
            >
              <div className="subCon8">
                <img
                  src={bajajImage}
                  style={{
                    width: "49px",
                    height: "48px",
                    margin: "20px 16px 0 22px",
                  }}
                  alt="Utkarsh Logo"
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "34px 0 0 0",
                  }}
                >
                  {" "}
                  Bajaj Finserv
                </p>
              </div>
              <div className="subCon8">
                <div
                  className="subCon8"
                  style={{
                    background: "#b8d3f5 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 10px 0 25px",
                  }}
                >
                  <img
                    src={skyBlueIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 9px 9px 0",
                    }}
                  >
                    Crisil AAA Rated
                  </p>
                </div>
                <div
                  className="subCon8"
                  style={{
                    background: "#b8d3f5 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 15px 0 0px",
                  }}
                >
                  <img
                    src={skyBlueIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 5px 9px 0",
                    }}
                  >
                    No Video KYC required
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 16px 23px 28px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "0",
                    }}
                  >
                    Interest Upto
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1A1B1E",
                      opacity: "0.6",
                      margin: "0 0 8px 0",
                    }}
                  >
                    8.80% p.a
                  </p>
                </div>
                <div
                  style={{
                    background: "#0072BB 0% 0% no-repeat padding-box",
                    boxShadow: "0px 5px 5px #0000000D",
                    borderRadius: "5px",
                    opacity: "1",
                    fontSize: "14px",
                    color: "#ffffff",
                    padding: "11.5px 30px",
                  }}
                >
                  Book Now
                </div>
              </div>
            </div>
          </div>
          <div className="subCon8" style={{ margin: "26px 0 0 0" }}>
            <div
              style={{
                width: "368px",
                height: "202px",
                background: "#F4F4F4 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "4px solid #FFFFFF",
                borderRadius: "5px",
                opacity: "1",
                margin: "0 26px 0 0",
              }}
            >
              <div className="subCon8">
                <img
                  src={shriramImage}
                  style={{
                    width: "34px",
                    height: "44px",
                    margin: "20px 16px 0 22px",
                  }}
                  alt="Utkarsh Logo"
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "34px 0 0 0",
                  }}
                >
                  {" "}
                  Shriram Finance
                </p>
              </div>
              <div className="subCon8">
                <div
                  className="subCon8"
                  style={{
                    background: "#acacac 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 10px 0 25px",
                  }}
                >
                  <img
                    src={blackIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 9px 9px 0",
                    }}
                  >
                    Crisil AAA Rated
                  </p>
                </div>
                <div
                  className="subCon8"
                  style={{
                    background: "#acacac 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 15px 0 0px",
                  }}
                >
                  <img
                    src={blackIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 5px 9px 0",
                    }}
                  >
                    No Video KYC required
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 16px 23px 28px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "0",
                    }}
                  >
                    Interest Upto
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1A1B1E",
                      opacity: "0.6",
                      margin: "0 0 8px 0",
                    }}
                  >
                    8.80% p.a
                  </p>
                </div>
                <div
                  style={{
                    background: "#010101 0% 0% no-repeat padding-box",
                    boxShadow: "0px 5px 5px #0000000D",
                    borderRadius: "5px",
                    opacity: "1",
                    fontSize: "14px",
                    color: "#ffffff",
                    padding: "11.5px 30px",
                  }}
                >
                  Book Now
                </div>
              </div>
            </div>
            <div
              style={{
                width: "368px",
                height: "202px",
                background: "#FFEFEF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "4px solid #FFFFFF",
                borderRadius: "5px",
                opacity: "1",
                margin: "0 26px 0 0",
              }}
            >
              <div className="subCon8">
                <img
                  src={techMahindraImage}
                  style={{
                    width: "50px",
                    height: "51px",
                    margin: "20px 16px 0 22px",
                  }}
                  alt="Utkarsh Logo"
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "34px 0 0 0",
                  }}
                >
                  Mahindra Finance
                </p>
              </div>
              <div className="subCon8">
                <div
                  className="subCon8"
                  style={{
                    background: "#f3b7b7 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 10px 0 25px",
                  }}
                >
                  <img
                    src={redIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 9px 9px 0",
                    }}
                  >
                    Crisil AAA Rated
                  </p>
                </div>
                <div
                  className="subCon8"
                  style={{
                    background: "#f3b7b7 0% 0% no-repeat padding-box",
                    borderRadius: "5px",
                    opacity: "1",
                    margin: "14px 15px 0 0px",
                  }}
                >
                  <img
                    src={redIcon}
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: "10px 6.31px 9px 7.69px",
                      opacity: "1",
                    }}
                    alt="Skyblue Right Icon"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "8px 5px 9px 0",
                    }}
                  >
                    No Video KYC required
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 16px 23px 28px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1A1B1E",
                      opacity: "1",
                      margin: "0",
                    }}
                  >
                    Interest Upto
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#1A1B1E",
                      opacity: "0.6",
                      margin: "0 0 8px 0",
                    }}
                  >
                    8.80% p.a
                  </p>
                </div>
                <div
                  style={{
                    background: "#ff0000 0% 0% no-repeat padding-box",
                    boxShadow: "0px 5px 5px #0000000D",
                    borderRadius: "5px",
                    opacity: "1",
                    fontSize: "14px",
                    color: "#ffffff",
                    padding: "11.5px 30px",
                  }}
                >
                  Book Now
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "26px 26px 22px 0px",
            }}
          >
            <div>
              <h2 style={{ margin: "0 0 6px 0" }}>Get Answer</h2>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0",
                }}
              >
                to all your questions
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0 0 0",
              }}
            >
              <p style={{ margin: "0", fontSize: "32px", opacity: "0.2" }}>
                {"<"}
              </p>
              <p
                style={{
                  margin: "0 0 0 38.5px",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                {">"}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "1px solid #EBEBEB",
                borderRadius: "5px",
                opacity: "1",
                padding: "25px",
                margin: "0 26px 0 0",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0",
                }}
              >
                How FD's are <br />
                taxed
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0 0 10px 0",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#3B39D9",
                  opacity: "1",
                  margin: "0",
                  textDecoration: "underline",
                }}
              >
                Read more...
              </a>
            </div>
            <div
              style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "1px solid #EBEBEB",
                borderRadius: "5px",
                opacity: "1",
                padding: "25px",
                margin: "0 26px 0 0",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0",
                }}
              >
                How FD's are <br />
                taxed
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0 0 10px 0",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#3B39D9",
                  opacity: "1",
                  margin: "0",
                  textDecoration: "underline",
                }}
              >
                Read more...
              </a>
            </div>
            <div
              style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 10px #0000000D",
                border: "1px solid #EBEBEB",
                borderRadius: "5px",
                opacity: "1",
                padding: "25px",
                margin: "0 26px 0 0",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0",
                }}
              >
                How FD's are <br />
                taxed
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#1A1B1E",
                  opacity: "1",
                  margin: "0 0 10px 0",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#3B39D9",
                  opacity: "1",
                  margin: "0",
                  textDecoration: "underline",
                }}
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <div className="subCon4">
          <div className="subCon5">
            <h4 style={{ margin: "0px" }}>Video KYC</h4>
            <div className="subCon6">
              <div className="subCon7">
                <p style={{ margin: "0px" }}>Scheduled On</p>
                <div
                  style={{
                    width: "76px",
                    height: "66px",
                    marginTop: "6px",
                    backgroundColor: "#F4F4F4",
                    opacity: "1",
                  }}
                >
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginTop: "2px",
                      marginLeft: "13px",
                      marginRight: "16px",
                      marginBottom: "6px",
                      color: "#1A1B1E",
                      opacity: "1",
                    }}
                  >
                    28
                  </p>
                  <div
                    style={{
                      background: "#CE5151 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <p
                      style={{
                        margin: "3px 13px 2px 9px",
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "500",
                        opacity: "1",
                      }}
                    >
                      Oct, 2023
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "16px", marginTop: "6px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "6px 0 17px 0",
                  }}
                >
                  Utkarsh SF Bank FD Plan 2
                </h4>
                <div className="subCon8">
                  <div style={{ width: "78px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Deposit Amt
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      Rs. 20,000
                    </p>
                  </div>
                  <div
                    style={{ width: "51px", height: "40px", margin: "0 16px" }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Tennure
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      2 Years
                    </p>
                  </div>
                  <div style={{ width: "82px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Interest Rate
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      9.10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="subCon8">
              <div
                style={{
                  margin: "22px 0 0 0",
                  background: "#3B39D9 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 31.5px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Complete Now
              </div>
              <div
                style={{
                  margin: "22px 0 0 12px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  border: "1px solid #3B39D9",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 42.04px 11.5px 43.98px",
                  fontSize: "16px",
                  color: "#3B39D9",
                  fontWeight: "500",
                }}
              >
                Reschedule
              </div>
              <div></div>
            </div>
          </div>
          <hr />
          <div style={{ margin: "15px 21px 20px 25px" }}>
            <h4 style={{ margin: "0px" }}>Pending Payment</h4>
            <div className="subCon6">
              <div className="subCon7">
                <p style={{ margin: "0px" }}>Pay By</p>
                <div
                  style={{
                    width: "76px",
                    height: "66px",
                    marginTop: "6px",
                    backgroundColor: "#F4F4F4",
                    opacity: "1",
                  }}
                >
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginTop: "2px",
                      marginLeft: "13px",
                      marginRight: "16px",
                      marginBottom: "6px",
                      color: "#1A1B1E",
                      opacity: "1",
                    }}
                  >
                    30
                  </p>
                  <div
                    style={{
                      background: "#CE5151 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <p
                      style={{
                        margin: "3px 13px 2px 9px",
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "500",
                        opacity: "1",
                      }}
                    >
                      Oct, 2023
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "16px", marginTop: "6px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "6px 0 17px 0",
                  }}
                >
                  Bajaj Finserv Corp FD 1
                </h4>
                <div className="subCon8">
                  <div style={{ width: "78px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Deposit Amt
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      Rs. 25,000
                    </p>
                  </div>
                  <div
                    style={{ width: "75px", height: "40px", margin: "0 16px" }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Tennure
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      18 Months
                    </p>
                  </div>
                  <div style={{ width: "82px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Interest Rate
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      8.10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="subCon8">
              <div
                style={{
                  margin: "22px 0 0 0",
                  background: "#3B39D9 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 54.5px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Pay Now
              </div>
              <div
                style={{
                  margin: "22px 0 0 12px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  border: "1px solid #3B39D9",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 17.5px",
                  fontSize: "16px",
                  color: "#3B39D9",
                }}
              >
                Cancel Application
              </div>
              <div></div>
            </div>
          </div>
          <hr />
          <div style={{ margin: "15px 21px 0px 25px" }}>
            <h4 style={{ margin: "0px" }}>Upcoming FD Maturity</h4>
            <div className="subCon6">
              <div className="subCon7">
                <p style={{ margin: "0px" }}>Renew By</p>
                <div
                  style={{
                    width: "76px",
                    height: "66px",
                    marginTop: "6px",
                    backgroundColor: "#F4F4F4",
                    opacity: "1",
                  }}
                >
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginTop: "2px",
                      marginLeft: "13px",
                      marginRight: "16px",
                      marginBottom: "6px",
                      color: "#1A1B1E",
                      opacity: "1",
                    }}
                  >
                    30
                  </p>
                  <div
                    style={{
                      background: "#CE5151 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <p
                      style={{
                        margin: "3px 13px 2px 9px",
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "500",
                        opacity: "1",
                      }}
                    >
                      Oct, 2023
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "16px", marginTop: "6px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#1A1B1E",
                    opacity: "1",
                    margin: "6px 0 17px 0",
                  }}
                >
                  Shriram Finance Corp FD 1
                </h4>
                <div className="subCon8">
                  <div style={{ width: "78px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Deposit Amt
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      Rs. 25,000
                    </p>
                  </div>
                  <div
                    style={{ width: "75px", height: "40px", margin: "0 16px" }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Tennure
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      18 Months
                    </p>
                  </div>
                  <div style={{ width: "82px", height: "40px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1A1B1E",
                        opacity: "0.6",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Interest Rate
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "14px",
                        color: "#1A1B1E",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      8.10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="subCon8">
              <div
                style={{
                  margin: "22px 0 0 0",
                  background: "#3B39D9 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 42px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Renew Now
              </div>
              <div
                style={{
                  margin: "22px 0 0 12px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: "0px 5px 5px #0000000D",
                  border: "1px solid #3B39D9",
                  borderRadius: "5px",
                  opacity: "1",
                  padding: "11.5px 15px",
                  fontSize: "16px",
                  color: "#3B39D9",
                }}
              >
                Compare Other FDs
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
