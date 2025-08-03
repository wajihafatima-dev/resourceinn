// /apiServices/index.js

export const getApi = async (baseUrl, endPoint) => {
  try {
    const response = await fetch(`${baseUrl}${endPoint}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};

export const postApi = async (baseUrl, endPoint, data) => {
  try {
    const response = await fetch(`${baseUrl}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || "Failed to POST data");
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteApi = async (baseUrl, endPoint, id) => {
  try {
    const response = await fetch(`${baseUrl}${endPoint}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to DELETE data");
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};
