import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const Calculator = (props) => {
  const params = useParams();

  const [number1, setNumber1] = useState(0);
  const [operator, setOperator] = useState("");
  const [number2, setNumber2] = useState(0);
  const [operandNumber, setOperandNumber] = useState(1);
  const [result, setResult] = useState(0);
  const [history] = useState([]);

  const update = (num) => {
    if (operandNumber === 1) {
      if (("" + number1).length < 6) setNumber1(number1 * 10 + num);
      //console.log(operandNumber);
    } else if (operandNumber === 2) {
      if (("" + number2).length < 6) setNumber2(number2 * 10 + num);
      //console.log(operandNumber);
    }
  };
  const reset = () => {
    setOperandNumber(1);
    setNumber1(0);
    setNumber2(0);
    setOperator("");
    setResult(0);
  };

  const store = (val) => {
    const operation = {
      operand1: number1,
      operand2: number2,
      operator: operator,
      result: val,
    };
    history.push(operation);
  };

  const compute = () => {
    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "x":
        return number1 * number2;
      case "/":
        return number1 / number2;
      default:
        return result;
    }
  };

  return (
    <div>
      <style type="text/css">
        {`
       .btn-flat 
       {
          background-color: pink;
          color: white;
          border: #dc3586;
          active-border-color: #dc3586;
          bs-btn-disabled-bg: #dc3586;
          bs-btn-disabled-border-color: #dc3586;
        }
        .btn-flat:hover {
          background-color:#dc3586; 
          color: white;
        }
    `}
      </style>
      <h1>
        {number2 === 0
          ? `${number1}${operator}`
          : `${number1}${operator}${number2}`}
      </h1>
      <h1>{result}</h1>
      <div className="buttons" bg="light" variant="light">
        <Container>
          <Row>
            <Col xs>
              <Button className="btn-flat" onClick={() => update(1)}>
                1
              </Button>

              <Button className="btn-flat" onClick={() => update(2)}>
                2
              </Button>

              <Button className="btn-flat" onClick={() => update(3)}>
                3
              </Button>
            </Col>
            <Col xs>
              <Button className="btn-flat" onClick={reset}>
                C
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <Button className="btn-flat" onClick={() => update(4)}>
                4
              </Button>

              <Button className="btn-flat" onClick={() => update(5)}>
                5
              </Button>

              <Button className="btn-flat" onClick={() => update(6)}>
                6
              </Button>
            </Col>
            <Col>
              <Button
                className="btn-flat"
                disabled={
                  !(params.mode === "addition" || params.mode === "all")
                }
                onClick={() => {
                  setOperator("+");
                  setOperandNumber(2);
                }}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btn-flat" onClick={() => update(7)}>
                7
              </Button>
              <Button className="btn-flat" onClick={() => update(8)}>
                8
              </Button>
              <Button className="btn-flat" onClick={() => update(9)}>
                9
              </Button>
            </Col>
            <Col>
              <Button
                className="btn-flat"
                disabled={
                  !(params.mode === "substraction" || params.mode === "all")
                }
                onClick={() => {
                  setOperator("-");
                  setOperandNumber(2);
                }}
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btn-flat" onClick={() => update(0)}>
                0
              </Button>
              <Button
                className="btn-flat"
                disabled={
                  !(params.mode === "multiplication" || params.mode === "all")
                }
                onClick={() => {
                  setOperator("x");
                  setOperandNumber(2);
                }}
              >
                x
              </Button>
              <Button
                className="btn-flat"
                disabled={
                  !(params.mode === "division" || params.mode === "all")
                }
                onClick={() => {
                  setOperator(":");
                  setOperandNumber(2);
                }}
              >
                /
              </Button>
            </Col>
            <Col>
              <Button
                className="btn-flat"
                onClick={() => {
                  const val = compute();
                  setResult(val);
                  store(val);
                  setOperandNumber(0);
                }}
              >
                =
              </Button>
            </Col>
          </Row>
        </Container>
        <Table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Number 1</th>
              <th scope="col">Operator</th>
              <th scope="col">Number 2</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((el, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{el.operand1}</td>
                  <td>{el.operator}</td>
                  <td>{el.operand2}</td>
                  <td>{el.result}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Calculator;
