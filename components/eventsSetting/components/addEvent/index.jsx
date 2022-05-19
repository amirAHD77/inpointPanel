import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AddEventContainer from "./index.style";
import Themes from "../../../../utils/themes";

const AddEvent = (props) => {
  const [loading, setLoading] = useState();
  const add = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(process.env.MAIN_PATH + "v1/class-owner", {
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
          <input
            id="userName"
            name="userName"
            type="file"
            onChange={formik.handleChange}
            value={formik.values.userName}
            className="importFile"
          />
        </div>
        <label htmlFor="password">نوع رویداد :</label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="input"
        />
        <div>
          <label htmlFor="password">کاربران رویداد :</label>
          <input
            id="password"
            name="password"
            type="file"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="importFile"
          />
        </div>
        <div className="buttonsContiner">
          <button type="submit" disabled={loading}>
            ایجاد
          </button>
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
