const input = document.querySelector("#image_uploads");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
input.addEventListener("change", updateImageDisplay);
// 使用一个 while 循环来清空预览区 <div> 留下的内容。
// 获取包含所有已选择文件信息的 FileList 对象，并将其用一个变量 curFiles 保存。
// 通过检查 curFiles.length 是否等于 0 来检查是否没有文件被选择。如果是，则向预览区 <div> 输出一条消息，表示没有选择文件。
// 如果选择了文件，我们将循环遍历每个文件，并将关于它的信息输出到预览区 <div>。注意事项：
// 我们使用定制的 validFileType() 函数来检查文件的类型是否正确（例如，用 accept 属性指定的图片类型）。
// 如果是，我们：
// 将其名称和文件大小输出到预览区 <div> 的一个列表项中（从 file.name 和 file.size 获取这些信息）。定制的 returnFileSize() 函数返回一个用 bytes/KB/MB 表示的可读性良好的文件大小（默认情况下，浏览器以绝对字节数报告大小）。
// 通过调用 URL.createObjectURL(curFiles[i]) 来生成图片的一张缩略预览图。然后，通过创建一个新的 <img> 来将这张图片也插入到列表项，并且将它的 src 设置为缩略图。
// 如果文件类型无效，则在列表项中显示一条消息，告诉用户需要选择一个其他的文件类型。
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
// https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}


    const upload = document.querySelector("#test1");
    const resultBox = document.querySelector(".one");

    upload.addEventListener("change", (params) => {
      console.log(params);
      console.log("文件信息：", params.target.files);
      console.log("文件数量：", params.target.files.length);
      console.log("文件名：", params.target.files[0].name);
      console.log(
        "文件最后一次修改的日期和时间：",
        params.target.files[0].lastModified
      );
      console.log("文件大小（字节为单位）：", params.target.files[0].size);
      console.log("文件类型（MIME类型）：", params.target.files[0].type);
      console.log("URL：", URL.createObjectURL(params.target.files[0]));

      resultBox.innerHTML = `
        <p>文件数量：${params.target.files.length}</p>
        <p>文件名：${params.target.files[0].name}</p>
        <p>文件最后一次修改的日期和时间：${params.target.files[0].lastModified}</p>
        <p>文件大小（字节为单位）：${params.target.files[0].size}（${returnFileSize(params.target.files[0].size)}）</p>
        <p>文件类型（MIME类型）：${params.target.files[0].type}</p>
        <p>URL：${URL.createObjectURL(params.target.files[0])}</p>
      `;
    //   const image = document.createElement("img");
    //   image.src = URL.createObjectURL(params.target.files[0]);
    //   document.querySelector(".pic").appendChild(image);

    //   console.log("list：", upload.value);
    });