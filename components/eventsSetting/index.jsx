import React from "react";
import { Table } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import EventSettingContainer from "./index.style";

const EventSetting = () => {
  return (
    <EventSettingContainer>
      <form>
        <h5 className="headerTitle">فهرست رویدادها</h5>
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
    </EventSettingContainer>
  );
};

export default EventSetting;
