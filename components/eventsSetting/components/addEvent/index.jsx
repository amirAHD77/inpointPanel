import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../../utils/axios";
import AddEventContainer from "./index.style";
import Themes from "../../../../utils/themes";
import { Form } from "react-bootstrap";

const AddEvent = (props) => {
  const [loading, setLoading] = useState();
  const add = async (values) => {
    let token;
    if (typeof window !== "undefined") {
      token = sessionStorage.getItem("token")
        ? sessionStorage.getItem("token")
        : null;
    }
    try {
      setLoading(true);
      const students = [];
      const student1 = await Axios.post(
        process.env.MAIN_PATH + "v1/students",
        {
          user_name: values.stUserName,
          first_name: values.stName,
          last_name: values.stFamily,
          phone_number: values.stPhoneNum,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      students.push(student1.data.id);
      const student2 = await Axios.post(
        process.env.MAIN_PATH + "v1/students",
        {
          user_name: values.stUserName2,
          first_name: values.stName2,
          last_name: values.stFamily2,
          phone_number: values.stPhoneNum2,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      students.push(student2.data.id);
      const student3 = await Axios.post(
        process.env.MAIN_PATH + "v1/students",
        {
          user_name: values.stUserName3,
          first_name: values.stName3,
          last_name: values.stFamily3,
          phone_number: values.stPhoneNum3,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      students.push(student3.data.id);
      const student4 = await Axios.post(
        process.env.MAIN_PATH + "v1/students",
        {
          user_name: values.stUserName4,
          first_name: values.stName4,
          last_name: values.stFamily4,
          phone_number: values.stPhoneNum4,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      students.push(student4.data.id);

      const teacher = await Axios.post(
        process.env.MAIN_PATH + "v1/teacher",
        {
          user_name: values.teacherUserName,
          first_name: values.teacherName,
          last_name: values.teacherFamily,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("teacher :>> ", teacher);

      const addClass = await Axios.post(
        process.env.MAIN_PATH + "v1/class",
        {
          name: values.name,
          login_type: values.type,
          teacher_id: teacher.data.data.id,
          student_id: students,
        },
        {
          headers: {
            // Accept: "application/vnd.GitHub.v3+json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("addClass :>> ", addClass);
    } catch (e) {
      console.error(e);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      teacherName: "",
      teacherFamily: "",
      teacherUserName: "",
      stName: "",
      stFamily: "",
      stUserName: "",
      stPhoneNum: "",
      stName2: "",
      stFamily2: "",
      stUserName2: "",
      stPhoneNum2: "",
      stName3: "",
      stFamily3: "",
      stUserName3: "",
      stPhoneNum3: "",
      stName4: "",
      stFamily4: "",
      stUserName4: "",
      stPhoneNum4: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      add(values);
      console.log("values", values);
    },
  });
  return (
    <AddEventContainer colors={Themes.colors.super}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">عنوان رویداد :</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="input"
        />
        <div>
          <label htmlFor="userName"> تعریف مدیر رویداد :</label>
          <div className="miniInputs">
            <input
              name="teacherName"
              onChange={formik.handleChange}
              placeholder="نام"
              className="miniInput"
              value={formik.values.teacherName}
            />
            <input
              name="teacherFamily"
              id="teacherFamily"
              placeholder="نام خانوادگی"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.teacherFamily}
            />
            <input
              name="teacherUserName"
              onChange={formik.handleChange}
              placeholder="نام کاربری"
              className="miniInput"
              value={formik.values.teacherUserName}
            />
          </div>
        </div>
        <label style={{ marginTop: 16 }} htmlFor="password">
          نوع رویداد :
        </label>
        <Form.Select
          className="input"
          id="type"
          name="type"
          aria-label="Default select example"
          onChange={formik.handleChange}
          value={formik.values.type}
          style={{ backgroundImage: "none" }}
        >
          <option>نوع کلاس را انتخاب کنید</option>
          <option value="PRIVATE">خصوصی</option>
          <option value="FREE">عمومی</option>
        </Form.Select>

        <div>
          <label htmlFor="password">کاربران رویداد :</label>

          <div className="miniInputs">
            <input
              name="stName"
              placeholder="نام"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stName}
            />
            <input
              name="stFamily"
              placeholder="نام خانوادگی"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stFamily}
            />
            <input
              name="stUserName"
              placeholder="نام کاربری"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stUserName}
            />
            <input
              name="stPhoneNum"
              placeholder="شماره موبایل"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stPhoneNum}
            />
          </div>

          <div className="miniInputs">
            <input
              name="stName2"
              placeholder="نام"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stName2}
            />
            <input
              name="stFamily2"
              placeholder="نام خانوادگی"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stFamily2}
            />
            <input
              name="stUserName2"
              placeholder="نام کاربری"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stUserName2}
            />
            <input
              name="stPhoneNum2"
              placeholder="شماره موبایل"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stPhoneNum2}
            />
          </div>
          <div className="miniInputs">
            <input
              name="stName3"
              placeholder="نام"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stName3}
            />
            <input
              name="stFamily3"
              placeholder="نام خانوادگی"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stFamily3}
            />
            <input
              name="stUserName3"
              placeholder="نام کاربری"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stUserName3}
            />
            <input
              name="stPhoneNum3"
              placeholder="شماره موبایل"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stPhoneNum3}
            />
          </div>
          <div className="miniInputs">
            <input
              name="stName4"
              placeholder="نام"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stName4}
            />
            <input
              name="stFamily4"
              placeholder="نام خانوادگی"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stFamily4}
            />
            <input
              name="stUserName4"
              placeholder="نام کاربری"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stUserName4}
            />
            <input
              name="stPhoneNum4"
              placeholder="شماره موبایل"
              className="miniInput"
              onChange={formik.handleChange}
              value={formik.values.stPhoneNum4}
            />
          </div>
        </div>

        <div className="buttonsContiner">
          <button type="submit">ایجاد</button>
          <div
            onClick={() => props.setPageStatus("list")}
            className="cancelBtn"
            disabled={loading}
          >
            لغو
          </div>
        </div>
      </form>
    </AddEventContainer>
  );
};

export default AddEvent;
