import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../utils/axios";

import AddStudentContainer from "./index.style";

const AddStudent = () => {
  const [loading, setLoading] = useState();
  const add = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(process.env.MAIN_PATH + "v1/class/import", {
        name: values.name,
        user_name: values.userName,
        password: values.password,
        theme_code: null,
        logo: null,
      });
      console.los("res", res);
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
    <AddStudentContainer>
      <div className="container">
        <input placeholder="نام" className="mx-2" />
        <input placeholder="نام خانوادگی" className="mx-2" />
        <input placeholder="نام کاربری" className="mx-2" />
        <input placeholder="شماره موبایل" className="mx-2" />
      </div>
      <div className="container">
        <input placeholder="نام" className="mx-2" />
        <input placeholder="نام خانوادگی" className="mx-2" />
        <input placeholder="نام کاربری" className="mx-2" />
        <input placeholder="شماره موبایل" className="mx-2" />
      </div>
      <div className="container">
        <input placeholder="نام" className="mx-2" />
        <input placeholder="نام خانوادگی" className="mx-2" />
        <input placeholder="نام کاربری" className="mx-2" />
        <input placeholder="شماره موبایل" className="mx-2" />
      </div>
      <div className="container">
        <input placeholder="نام" className="mx-2" />
        <input placeholder="نام خانوادگی" className="mx-2" />
        <input placeholder="نام کاربری" className="mx-2" />
        <input placeholder="شماره موبایل" className="mx-2" />
      </div>
      <div className="container">
        <input placeholder="نام" className="mx-2" />
        <input placeholder="نام خانوادگی" className="mx-2" />
        <input placeholder="نام کاربری" className="mx-2" />
        <input placeholder="شماره موبایل" className="mx-2" />
      </div>
    </AddStudentContainer>
  );
};

export default AddStudent;
