import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function overScreen(props) {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto
            corrupti minus architecto quas dolores aut vel dolore, laboriosam
            voluptatum repellendus, hic repellat enim facere molestias! Earum
            dolorem aliquid suscipit?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic aliquid nisi a dolor nihil corrupti recusandae
            velit labore neque. Ea esse debitis praesentium eveniet ut eaque
            alias ducimus nemo corrupti!
          </p>
        </div>
        <div>
          <div className="overscreen-footer">
            <div>
              <div>
                <Button
                  variant="outlined"
                  href=""
                  id="overscreen-footer-btn"
                  style={{ marginLeft: "5px" }}
                  // onClick = {props.downloadFile()}
                >
                  <FileDownloadOutlinedIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
