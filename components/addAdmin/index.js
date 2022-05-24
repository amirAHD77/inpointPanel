import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddAdminContainer from "../../components/addAdmin/index.style";
import Themes from "../../utils/themes";
import Alert from "../utils/Alert";
import Axios from "../../utils/axios";
const AddAdmin = (props) => {
  const [loading, setLoading] = useState();
  const [show, setShow] = useState(false);
  const add = async (values) => {
    try {
      setLoading(true);
      console.log("aasdasd", {
        user_name: values.userName,
        password: values.password,
      });
      // const register = await Axios.post("v1/auth/register", {
      //   user_name: values.userName,
      //   password: values.password,
      // });
      // const userName = register.data.data.user_name;
      const res = await Axios.post("v1/class-owner", {
        name: values.name,
        user_name: values.userName,
        theme_code: "",
        logo: "",
      });
      setShow(true);

      formik.setFieldValue("name", "");
      formik.setFieldValue("userName", "");
      formik.setFieldValue("password", "");
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // alert(JSON.stringify(values, null, 2));
      add(values);
    },
  });
  return (
    <AddAdminContainer colors={Themes.colors.super}>
      <Alert
        text={"با موفقیت ایجاد شد"}
        title={"ثبت موفق"}
        show={show}
        setShow={setShow}
      />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">عنوان کاربر :</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="userName"> نام کاربری(و رمز عبور) :</label>
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <label htmlFor="password">رمز عبور :</label>
        <input
          id="password"
          name="password"
          type="text"
          disabled="true"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit" disabled={loading}>
          ایجاد
        </button>
      </form>
    </AddAdminContainer>
  );
};

export default AddAdmin;
