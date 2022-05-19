import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import EventSettingContainer from "./index.style";
import AddEvent from "./components/addEvent/index";

const EventSetting = () => {
  const [pageStatus, setPageStatus] = useState("list");

  return (
    <EventSettingContainer>
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
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td className="name"> آنلاین غرب</td>
                <td>
                  <div className="functionsContainer">
                    <div className="btn delete">حذف</div>
                    <div className="btn edit">ویرایش اطلاعات</div>
                  </div>
                </td>
              </tr>
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
