import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";

export function Download() {
  const handleDownloadGames = async () => {
    const button1 = document.getElementById("button-1-games");
    if (button1 !== null) button1.style.display = "none";
    const button3 = document.getElementById("button-3-games");
    if (button3 !== null) button3.style.display = "none";
    const element = document.getElementById("content-games") as HTMLElement,
      canvas = await html2canvas(element, { allowTaint: false, useCORS: true }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "rodadas.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (button1 !== null) button1.style.display = "flex";
    if (button3 !== null) button3.style.display = "flex";
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

  const handleDownloadHome = async () => {
    const button1 = document.getElementById("button-1-games");
    if (button1 !== null) button1.style.display = "none";
    const button3 = document.getElementById("button-3-games");
    if (button3 !== null) button3.style.display = "none";
    const button = document.getElementById("button-download");
    if (button !== null) button.style.display = "none";
    const element = document.getElementById("container-home") as HTMLElement,
      canvas = await html2canvas(element, { allowTaint: false, useCORS: true }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "campeonato.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (button !== null) button.style.display = "flex";
    if (button1 !== null) button1.style.display = "flex";
    if (button3 !== null) button3.style.display = "flex";
  };

  return (
    <Row id="button-download">
      <Col lg={12} md={12} xs={12} className="col-download">
        <button type="button" onClick={handleDownloadHome}>
          <FiDownload className="img-download" />{" "}
          <span className="text-download">Campeonato</span>
        </button>
      </Col>
      <Col lg={6} md={6} xs={6} className="col-download">
        <button type="button" onClick={handleDownloadTable}>
          <FiDownload className="img-download" />{" "}
          <span className="text-download">Tabela</span>
        </button>
      </Col>
      <Col lg={6} md={6} xs={6} className="col-download">
        <button type="button" onClick={handleDownloadGames}>
          <FiDownload className="img-download" />{" "}
          <span className="text-download">Rodadas</span>
        </button>
      </Col>
    </Row>
  );
}
