export const getApi = (baseUrl, endPoint,pageNumber) => {
    return async () => {
      try {
        const response = await fetch(`${baseUrl}${endPoint}?_start=${pageNumber}&_limit=4`);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        let errorMessage = "Failed to register";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
        }
        throw new Error(errorMessage);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error registering user:", error.message);
      throw error;
    }
  };
  
  