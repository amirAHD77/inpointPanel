import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Table } from "react-bootstrap";

import AdminListContainer from "./index.style";
import Themes from "../../utils/themes";
import Axios from "../../utils/axios";
import Head from "next/head";

const AdminList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteAdmin = async (id) => {
    try {
      const response = await Axios.delete(`/v1/class-owner/` + id);
      getList();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getList = async () => {
    const rest = await Axios.get("v1/class-owner/all");
    setList(rest.data.data);
    setLoading(false);
  };
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
  useEffect(() => {
    getList();
  }, []);
  return (
    <AdminListContainer colors={Themes.colors.super}>
      <Head>
        <title key="title">این‌پوینت - مدیریت پنل های فعال</title>
        <link rel="shortcut icon" href="/images/inpoint connect logo PNG.png" />
      </Head>
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
            {list.map((it) => {
              return (
                <tr key={it.id}>
                  <td>{it.id}</td>
                  <td className="name">{it.name}</td>
                  {/* <td>{it.credit}</td> */}
                  <td>
                    <div className="functionsContainer">
                      {/* <div className="btn disable">غیر فعال سازی</div> */}
                      <div
                        onClick={() => deleteAdmin(it.id)}
                        className="btn delete"
                      >
                        حذف
                      </div>
                      {/* <div className="btn edit">ویرایش اطلاعات</div> */}
                      {/* <div className="btn logs">لاگ پرداخت</div> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </form>
    </AdminListContainer>
  );
};

export default AdminList;
