import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import AddAdminContainer from "../../components/addAdmin/index.style";

const AddAdmin = () => {
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

        <button type="submit">ایجاد</button>
      </form>
    </AddAdminContainer>
  );
};

export default AddAdmin;
