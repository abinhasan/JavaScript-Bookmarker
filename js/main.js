// Listen for form sunmit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
	// Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// Local Storage
	if (localStorage.getItem('bookmarks') === null) {
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	// Prevent form from submitting
	e.preventDefault();
}

function deleteBookmark(url) {
	console.log(url);
}

function fetchBookmarks() {
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');
	// Build output
	bookmarksResults.innerHTML = "";
	for (var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResults.innerHTML += '<div class="well">' +
			'<h3>' + name +
			' <a class="btn btn-default" target="_blank" href="' + url + '">Visit<a/> ' +
			' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete<a/> ' +
			'</h3>' +
			'</div>';
	}

}