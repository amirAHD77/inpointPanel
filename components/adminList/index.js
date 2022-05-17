import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import AdminListContainer from "./index.style";
import { Table } from "react-bootstrap";

const AdminList = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <AdminListContainer>
      <form onSubmit={formik.handleSubmit}>
        <h5 className="headerTitle">مدیریت پنل های فعال</h5>
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>پنل های فعال</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </form>
    </AdminListContainer>
  );
};

export default AdminList;
