export async function submitFeedback(formData) {
    const response = await fetch("https://azerux.com/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
  
    return response.json();
  }
  