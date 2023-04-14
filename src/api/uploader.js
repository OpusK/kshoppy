// https://console.cloudinary.com/documentation/upload_images#code_explorer_upload_multiple_files_using_a_form_unsigned
// https://console.cloudinary.com/documentation/upload_images#code_explorer_chunked_asset_upload_from_the_client_side
export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  // Settings -> Upload
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);  // unsigned preset name
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, { // "https://api.cloudinary.com/v1_1/" + YOUR_CLOUD_NAME + "/image/upload"
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
