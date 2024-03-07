const uploadButton = document.getElementById("upload-button");

uploadButton.addEventListener("click", function() {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = "image/*";

	input.onchange = function() {
		const file = input.files[0];
		const reader = new FileReader();

		reader.onload = function() {
			const profilePicture = document.getElementById("profile-picture");
			profilePicture.src = reader.result;
		}

		reader.readAsDataURL(file);
	}

	input.click();
});