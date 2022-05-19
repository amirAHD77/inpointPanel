import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Themes from "../../utils/themes";

function Alert(props) {
  console.log(props);
  const isSuperAdmin = useSelector((store) => {
    return store.user.user.roles
      ? store.user.user.roles[0].name === "ADMIN"
      : false;
  });
  console.log(
    isSuperAdmin ? Themes.colors.super.main : Themes.colors.admin.main
  );
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
      {props.title ? (
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
      ) : null}

      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>

      <Modal.Footer>
        <button
          onClick={() => props.setShow(false)}
          style={{
            border: "none",
            borderRadius: "8px",
            width: "150px",
            alignSelf: "center",
            padding: "8px 32px",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            backgroundColor: isSuperAdmin
              ? Themes.colors.super.main.split(" ")[0]
              : Themes.colors.admin.main.split(" ")[0],
          }}
        >
          بستن
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;
