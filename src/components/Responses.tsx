import React from "react";
import { Col, Row, Card } from "antd";
import {Container} from 'react-bootstrap';
const Responses = (data: any) => {
  console.log(data);
  return (
    <Container >
    <Row style={{ marginTop: "30px" }}>
       
      {data ? (
           
        data.data.map((item: any) => (
            <Col  md={{ span: 8 }}>
           <Card style={{ width: "20rem"}} bordered={true} >
               {
           item.data.map((item1: any) => (
            <>
            <p>{item1.label==="Ask your question"?"Elective":item1.label.slice(10,)}={`${item1.response.choice_text?item1.response.choice_text:item1.response}`}</p>
            </>
          ))
       
          }
          </Card>
            </Col>
        ))
        
      ) : (
        <h1>loading</h1>
      )}
      
    </Row>
    </Container>
  );
};

export default Responses;
