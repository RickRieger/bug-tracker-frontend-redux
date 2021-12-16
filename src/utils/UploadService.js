// import http from "../http-common";
import Axios from "./Axios";
class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return Axios.post("/ticket/upload-file-to-ticket", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return Axios.get("/files");
  }
}

export default new UploadFilesService();