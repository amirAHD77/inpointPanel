import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AddAdminContainer from "../../components/addAdmin/index.style";

const AddAdmin = (values) => {
  const [loading, setLoading] = useState();
  const add = async (value) => {
    try {
      setLoading(true);
      const res = await axios.post(process.env.MAIN_PATH + "v1/class-owner", {
        name: values.name,
        user_name: values.userName,
        password: values.password,
        theme_code: null,
        logo: null,
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      add(values);
    },
  });
  return (
    <AddAdminContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">عنوان کاربر :</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="userName"> نام کاربری :</label>
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
