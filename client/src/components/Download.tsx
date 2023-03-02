import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";

export function Download() {
  const handleDownloadGames = async () => {
    const element = document.getElementById("content-games") as HTMLElement,
      canvas = await html2canvas(element, { allowTaint: false, useCORS: true }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "rodadas.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTable = async () => {
    const element = document.getElementById("table-home") as HTMLElement,
      canvas = await html2canvas(element, { allowTaint: false, useCORS: true }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "tabela.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Row className="button-download">
      <Col lg={6} md={6} xs={6}>
        <button type="button" onClick={handleDownloadTable}>
          <FiDownload className="img-download" /> Tabela
        </button>
      </Col>
      <Col lg={6} md={6} xs={6}>
        <button type="button" onClick={handleDownloadGames}>
          <FiDownload className="img-download" /> Rodadas
        </button>
      </Col>
    </Row>
  );
}
