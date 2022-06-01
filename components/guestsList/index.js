import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import axios from "../../utils/axios";
import GuestsListContainer from "./index.style";
import Themes from "../../utils/themes";
import Head from "next/head";

const GuestsList = () => {
  const [data, setData] = useState();
  const getClasses = async () => {
    const res = await axios.get("v1/class/owner");
    setData(res.data.data.filter((it) => it.login_type === "FREE"));
  };
  useEffect(() => {
    getClasses();
  }, []);
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
      <Head>
        <title key="title">غرب آنلاین - انتخاب کاربران میهمان</title>
        <link rel="shortcut icon" href="/images/gharbOnline.png" />
      </Head>
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

          {data?.length
            ? data.map((it) => {
                return (
                  <option key={it.id} value={it.id}>
                    {it.name}
                  </option>
                );
              })
            : null}
        </Form.Select>

        <button type="submit">دانلود فایل اطلاعات بینندگان</button>
      </form>
    </GuestsListContainer>
  );
};

export default GuestsList;
