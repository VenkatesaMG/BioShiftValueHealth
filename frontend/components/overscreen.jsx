import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function OverScreen(props) {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <div key={index} className="key-value-container">
          {Object.keys(item).map((key) => (
            <div key={key} className="key-value-item">
              <div className="key">{key}:</div>
              <div className="value">{item[key]}</div>
            </div>
          ))}
        </div>
      ));
    } else if (typeof content === "object") {
      return Object.keys(content).map((key) => (
        <div key={key} className="key-value-item">
          <div className="key">{key}:</div>
          <div className="value">{content[key]}</div>
        </div>
      ));
    }
    return null;
  };

  const PatientRecord = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {Object.keys(props.STRUCTURE).map((section) => (
          <div key={section} className="section-container">
            <div className="parent-title">{section}</div>
            {renderContent(props.STRUCTURE[section])}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="overscreen-outer">
      <div className="overscreen">
        <div className="overscreen-title-bar">
          <div>Document</div>
          <div>
            <IconButton
              aria-label="delete"
              id="close-button"
              onClick={() => props.handleOverScreen()}
            >
              <CloseIcon style={{ fontSize: "1rem", color: "white" }} />
            </IconButton>
          </div>
        </div>
        <div className="overscreen-main">
          {/* Call the PatientRecord function */}
          <PatientRecord />
        </div>
        <div>
          <div className="overscreen-footer">
            <div>
              <Button
                variant="outlined"
                href=""
                id="overscreen-footer-btn"
                style={{ marginLeft: "5px" }}
                // Implement file download function
                onClick={() => props.downloadFile && props.downloadFile()}
              >
                <FileDownloadOutlinedIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
