async function addJob(jobDetails) {
  try {
    const response = await fetch(
      process.env.REACT_APP_BASE_SERVER_URL + process.env.REACT_APP_ADD_JOB,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobDetails),
      }
    );

    if (!response.ok) {
      throw new Error("Network response error");
    } else {
      const data = await response.json();
      if (data === "Done") {
        return "Job added Successfully!!!";
      } else if (data === "Error") {
        return "Error occurred while submitting Data. Please try after some time.";
      } else {
        return "Unknown error occurred. Please recheck the details or try after some time.";
      }
    }
  } catch (error) {
    console.log(error.toString);
    return "Unable to submit the details.";
  }
}

export { addJob };
