import React, { useEffect } from "react";
import { useFormik } from "formik";

import TransactionsContainer from "./index.style";
import Themes from "../../utils/themes";

const Transactions = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <TransactionsContainer colors={Themes.colors.admin}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="amount">مبلغ پرداختی :</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.amount}
        />

        <button type="submit">اتصال به درگاه بانکی</button>
      </form>
    </TransactionsContainer>
  );
};

export default Transactions;
