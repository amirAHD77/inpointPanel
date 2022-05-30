import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../../utils/axios";
import AddEventContainer from "./index.style";
import Themes from "../../../../utils/themes";
import { Form } from "react-bootstrap";

const AddEvent = (props) => {
  const [loading, setLoading] = useState();
  const [classType, setClassType] = useState("none");
  const [selectedFile, setSelectedFile] = useState();

  const add = async (values) => {
    console.log("0000000000000");
    let token;
    if (typeof window !== "undefined") {
      token = sessionStorage.getItem("token")
        ? sessionStorage.getItem("token")
        : null;
    }
    if (classType === "FREE") {
      try {
        setLoading(true);
        console.log("1111111111111111111111112");

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

        console.log("222222222222222222222222222222");

        const addClass = await Axios.post(
          process.env.MAIN_PATH + "v1/class",
          {
            name: values.name,
            login_type: values.type,
            teacher_id: teacher.data.data.id,
            student_id: [],
          },
          {
            headers: {
              // Accept: "application/vnd.GitHub.v3+json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("addClass :>> ", addClass);
        props.setPageStatus("list");
      } catch (e) {
        console.error(e);
      }
    }
    if (classType === "PRIVATE") {
      setLoading(true);
      if (!selectedFile) {
        setLoading(false);
        alert("لطفا ابتدا فایل را انتخاب کنید");
      }

      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      try {
        const response = await Axios.post(
          "/v1/class/upload/" + sessionStorage.getItem("uuid"),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        props.setPageStatus("list");
        console.log("response: ", response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      file: "",
      teacherName: "",
      teacherFamily: "",
      teacherUserName: "",
      studenName: "",
      studentFamily: "",
      studentUserName: "",
      studentPhoneNum: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      add(values);
      console.log("values", values);
    },
  });

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <AddEventContainer colors={Themes.colors.admin}>
      <form onSubmit={formik.handleSubmit}>
        <label style={{ marginTop: 16 }} htmlFor="password">
          نوع رویداد :
        </label>
        <Form.Select
          className="input"
          id="type"
          name="type"
          aria-label="Default select example"
          onChange={(e) => {
            formik.handleChange(e);
            setClassType(e.target.value);
          }}
          value={formik.values.type}
          style={{ backgroundImage: "none" }}
        >
          <option>نوع کلاس را انتخاب کنید</option>
          <option value="PRIVATE">خصوصی</option>
          <option value="FREE">عمومی</option>
        </Form.Select>
        {classType === "FREE" && (
          <>
            <label htmlFor="name">عنوان رویداد :</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="input"
            />
            <>
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
            </>
          </>
        )}

        {classType === "PRIVATE" && (
          <div>
            <label htmlFor="password">آپلود فایل اکسل :</label>
            <input
              name="file"
              onChange={handleFileSelect}
              style={{ marginRight: 16 }}
              type="file"
            />
          </div>
        )}

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
