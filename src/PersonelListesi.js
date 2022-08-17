import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Personeller from "./data/personeller.json";

const PersonelListesi = () => {
  return (
    <>
      <h1>Personel Listesi</h1>
      <Row>
        <Col xs="12">
          <Table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ad</th>
                <th scope="col">Soyad</th>
                <th scope="col">Doğum Tarihi</th>
                <th scope="col">Telefon</th>
              </tr>
            </thead>
            <tbody>
              {Personeller.map((el) => {
                return (
                  <tr key={el.Id}>
                    <th scope="row">{el.Id}</th>
                    <td>{el.Ad}</td>
                    <td>{el.Soyad}</td>
                    <td>{el.DogumTarihi}</td>
                    <td>{el.Telefon}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};
export default PersonelListesi;
