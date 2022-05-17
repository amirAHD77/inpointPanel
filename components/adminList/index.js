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
        <Table
          bordered={true}
          className="table"
          striped
          hover
          responsive={false}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>پنل های فعال</th>
              <th>مبلغ اعتبار</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="name"> آنلاین غرب</td>
              <td className="price"> 2,500,000 ریال</td>
              <td>
                <div className="functionsContainer">
                  <div className="btn disable">غیر فعال سازی</div>
                  <div className="btn delete">حذف</div>
                  <div className="btn edit">ویرایش اطلاعات</div>
                  <div className="btn logs">لاگ پرداخت</div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </AdminListContainer>
  );
};

export default AdminList;
