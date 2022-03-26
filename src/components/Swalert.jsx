import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swalert = ({ fire, title, html, icon }) => {
  const MySwal = withReactContent(Swal);
  if (fire) {
    MySwal.fire({
      title,
      html,
      icon,
    });
  }

  return null;
};

export default Swalert;
