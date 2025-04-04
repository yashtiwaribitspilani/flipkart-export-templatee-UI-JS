// Select the target element by its text content "download flipkart offer"
const allElements = document.querySelectorAll("*");
const targetElement = Array.from(allElements).find(
  (el) => el.textContent.trim().toLowerCase() === "download flipkart offer"
);

if (targetElement) {
  targetElement.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action if necessary

    // Execute the modal overlay code
    (function () {
      // Create the overlay for modal effect
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = 10000;

      // Create the popup container
      const popup = document.createElement("div");
      popup.style.backgroundColor = "#fff";
      popup.style.padding = "30px";
      popup.style.borderRadius = "8px";
      popup.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
      popup.style.minWidth = "350px";
      popup.style.textAlign = "center";
      popup.style.fontFamily = "Arial, sans-serif";

      // Create title for the popup
      const title = document.createElement("h2");
      title.textContent = "Download Flipkart Template";
      title.style.marginBottom = "20px";
      title.style.color = "#333";
      popup.appendChild(title);

      // Create a form element
      const form = document.createElement("form");

      // Create the dropdown label and select element
      const selectLabel = document.createElement("label");
      selectLabel.textContent = "Select item: ";
      selectLabel.style.marginRight = "10px";
      selectLabel.style.fontWeight = "bold";

      const select = document.createElement("select");
      select.style.padding = "6px";
      select.style.border = "1px solid #ccc";
      select.style.borderRadius = "4px";
      select.style.marginBottom = "15px";
      select.style.width = "calc(100% - 22px)";

      const optionShirt = document.createElement("option");
      optionShirt.value = "shirt";
      optionShirt.textContent = "Shirt";
      const optionBag = document.createElement("option");
      optionBag.value = "bag";
      optionBag.textContent = "Bag";

      select.appendChild(optionShirt);
      select.appendChild(optionBag);

      // Create file name input
      const fileLabel = document.createElement("label");
      fileLabel.textContent = "File Name: ";
      fileLabel.style.margin = "10px 0";
      fileLabel.style.display = "block";
      fileLabel.style.fontWeight = "bold";

      const fileInput = document.createElement("input");
      fileInput.type = "text";
      fileInput.placeholder = "Enter file name";
      fileInput.style.padding = "6px";
      fileInput.style.border = "1px solid #ccc";
      fileInput.style.borderRadius = "4px";
      fileInput.style.width = "calc(100% - 14px)";
      fileInput.style.marginBottom = "20px";

      // Create a container for the buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "space-between";

      // Button style common to both buttons
      const buttonStyle = {
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
      };

      // Create the Cancel button
      const cancelButton = document.createElement("button");
      cancelButton.type = "button";
      cancelButton.textContent = "Cancel";
      Object.assign(cancelButton.style, buttonStyle);
      cancelButton.addEventListener("click", function () {
        // Remove the overlay when cancel is clicked
        document.body.removeChild(overlay);
      });

      // Create the Submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";
      Object.assign(submitButton.style, buttonStyle);

      // Append buttons to the button container with spacing
      buttonContainer.appendChild(cancelButton);
      buttonContainer.appendChild(submitButton);

      // Append all elements to the form
      form.appendChild(selectLabel);
      form.appendChild(select);
      form.appendChild(fileLabel);
      form.appendChild(fileInput);
      form.appendChild(buttonContainer);

      // Append the form to the popup, and the popup to the overlay
      popup.appendChild(form);
      overlay.appendChild(popup);

      // Append the overlay to the body
      document.body.appendChild(overlay);

      // Handle form submission
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedItem = select.value;
        const fileName = fileInput.value;
        console.log("Selected Item:", selectedItem);
        console.log("File Name:", fileName);
        //I will write a function here which will fetch the csv from base and upload to remote storage
        //Then I will pass this url to my php script
        // Set the fixed inputUrl to pass to the PHP script
        const inputUrl =
          "https://raw.githubusercontent.com/yashtiwaribitspilani/flipkart-export-template/main/sample_data.csv";
        // Construct the request URL to your local PHP wrapper
        const requestUrl =
          "http://localhost:8000/flipkart_web.php?inputUrl=" +
          encodeURIComponent(inputUrl);

        // Call the local PHP script via fetch
        fetch(requestUrl)
          .then((response) => response.text())
          .then((data) => {
            console.log("Response from PHP:", data);
            // You might display a message to the user here
            alert("PHP Script Response: " + data);
            // Remove the overlay after successful submission
            document.body.removeChild(overlay);
          })
          .catch((err) => {
            console.error("Error:", err);
            alert("An error occurred: " + err);
          });
      });
    })();
  });
} else {
  console.error('Element with text "download flipkart offer" not found.');
}
