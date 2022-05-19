import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

import GuestsListContainer from "./index.style";
import Themes from "../../utils/themes";

const GuestsList = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <GuestsListContainer colors={Themes.colors.admin}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="amount">انتخاب رویداد :</label>

        <Form.Select
          className="input"
          id="amount"
          name="amount"
          aria-label="Default select example"
          onChange={formik.handleChange}
          value={formik.values.amount}
        >
          <option>یک گزینه انتخاب کنید</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <button type="submit">دانلود فایل اطلاعات بینندگان</button>
      </form>
    </GuestsListContainer>
  );
};

export default GuestsList;
