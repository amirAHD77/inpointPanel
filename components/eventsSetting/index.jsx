import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../utils/axios";
import EventSettingContainer from "./index.style";
import AddEvent from "./components/addEvent/index";
import Head from "next/head";

const EventSetting = () => {
  const [pageStatus, setPageStatus] = useState("list");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const deleteClass = async (id) => {
    try {
      const response = await axios.delete(`/v1/class/` + id);
      getList();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getList = async () => {
    try {
      const res = await axios.get("/v1/class/owner");
      setList(res.data.data);
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pageStatus === "list") getList();
  }, [pageStatus]);

  return (
    <EventSettingContainer>
      <Head>
        <title key="title">غرب آنلاین - فهرست رویدادها</title>
        <link rel="shortcut icon" href="/images/gharbOnline.png" />
      </Head>
      {pageStatus === "list" ? (
        <form>
          <div className="headerContainer">
            <div style={{ width: 120 }} />
            <h5 className="headerTitle">فهرست رویدادها</h5>
            <div onClick={() => setPageStatus("add")} className="headerButton">
              رویداد جدید
            </div>
          </div>

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
                <th>رویدادها</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list?.length
                ? list.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="name">{item.name}</td>
                        <td>
                          <div className="functionsContainer">
                            <div
                              className="btn delete"
                              onClick={() => deleteClass(item.id)}
                            >
                              حذف
                            </div>
                            {/* <div className="btn edit">ویرایش اطلاعات</div> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </form>
      ) : (
        <AddEvent setPageStatus={(name) => setPageStatus(name)} />
      )}
    </EventSettingContainer>
  );
};

export default EventSetting;
