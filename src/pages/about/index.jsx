import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  dataabout,
  meta,
  worktimeline,
  front_end_skills,
  back_end_skills,
  education,
  // services,
} from "../../content_option";




export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme_p1}</p>
              <p>{dataabout.aboutme_p2}</p>
              <p>{dataabout.aboutme_p3}</p>
              <p>{dataabout.aboutme_p4}</p>
            </div>
          </Col>
        </Row>




        <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <>
                    <tr key={i}>
                      <th scope="row">{data.school_name}</th>
                      <td>{data.degree}</td>
                      <td>{data.date}</td>
                    </tr>

                     
                      
                      <tr>
                        <th> Details </th>
                        <td> {data.details} </td>
                      </tr>

                      {/* <tr>
                        <th> View Certificate </th>
                        <td>   
                          <Link to={data.certificateURL} className="text_2">
                            <div id="button_p" className="ac_btn btn ">
                               {data.buttonText}
                             <div className="ring one"></div>
                             <div className="ring two"></div>
                              <div className="ring three"></div>
                            </div>
                          </Link>
                        
                         </td>
                      </tr> */}

                      <tr className="empty_row">
                        <th></th>
                        <td></td>
                      </tr>
                      </>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>



        <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <>
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>

                     
                      
                      <tr>
                        <th> Discription </th>
                        <td> {data.jobdesciption} </td>
                      </tr>
                      </>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>


        
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">

            <h2 className="color_sec py-4">Front-End</h2>

            {front_end_skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name} {data.icon}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
          </Row>


          <Row className="sec_sp">
          <Col lg="4">
          </Col>
          <Col lg="8">

            <h2 className="color_sec py-4">Back-End</h2>

              {back_end_skills.map((data, i) => {
                return (
                  <div key={i}>
                  <h3 className="progress-title">{data.name} {data.icon}</h3>
                  <div className="progress">

                  <div
                    className="progress-bar"
                    style={{
                    width: `${data.value}%`,
                    }}
                  >
                  <div className="progress-value">{data.value}%</div>

                 </div>
                </div>
              </div>
            );
          })}
        </Col>

        </Row>
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
