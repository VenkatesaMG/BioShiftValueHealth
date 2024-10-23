import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faUpload,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axios from "axios";

export default function record(props) {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [images, setImages] = useState([]);
  const [report, setGenerateReport] = useState(null);

  function triggerFileUpload() {
    console.log("Triggered File Upload");
    fileInputRef.current.click();
  }

  function generateReport() {
    props.handleOverScreen();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios
        .post("http://127.0.0.1:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("File uploaded successfully", response.data);
          setGenerateReport(response.data);
          props.handleDiagnosisReport(response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    } else {
      console.log("No File Selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios
        .post("http://127.0.0.1:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("File uploaded successfully", response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="record-page">
      <div className="user-tools">
        <div className="user-tools-upper">
          <div>
            <button className="user-tools-div">
              <div className="user-ele-div mic-div">
                <FontAwesomeIcon icon={faMicrophone} className="mic-ele" />
              </div>
              <div className="user-ele-div text-class">Record Session</div>
            </button>
          </div>
          <div>
            <button className="user-tools-div" onClick={triggerFileUpload}>
              <div className="user-ele-div upload-div">
                <FontAwesomeIcon icon={faUpload} className="upload-ele" />
              </div>
              <div className="user-ele-div text-class">Upload Audio</div>
            </button>
          </div>
          {/* <div>
            <button className="user-tools-div" onClick={triggerFileUpload}>
              <div className="user-ele-div upload-div">
                <FontAwesomeIcon icon={faUpload} className="upload-ele" />
              </div>
              <div className="user-ele-div text-class">Upload Scan</div>
            </button>
          </div> */}
        </div>
        <div className="user-tools-lower">
          <div>
            <button className="user-tools-div" onClick={generateReport}>
              <div className="user-ele-div sheet-div">
                <FontAwesomeIcon icon={faSheetPlastic} className="sheet-ele" />
              </div>
              <div className="user-ele-div text-class">Generate Report</div>
            </button>
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
