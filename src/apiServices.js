export const getApi = (baseUrl, endPoint) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}${endPoint}`);
      if (!response.ok) {
        console.error(`HTTP Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return { error: error.message };
    }
  };
};

export const deleteApi = async (baseUrl, endpoint, id) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete post");

    return await response.json();
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
export const loginUser = async (baseUrl, endpoint, userData) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login");
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const registerUser = async (baseUrl, endpoint, userData) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to register");
    }

    return data;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw new Error(
      error.message || "Something went wrong during registration"
    );
  }
};
export const logoutUser = async (baseUrl, endpoint) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      credentials: "include", 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to logout");
    }

    return data; 
  } catch (error) {
    console.error("Error during logout:", error.message);
    throw new Error(error.message || "Something went wrong during logout");
  }
};
