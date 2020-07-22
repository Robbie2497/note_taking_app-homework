

function addNote() {
    $.ajax({ url: "/api/notes", method: "GET" })
        .then(function(notesData) {
            console.log(notesData);
            console.log("------------------------------------");
        });

        for (var i = 0; i < notesData.length; i++) {
            var notesList = $("#tableList");
            var listItem = $("<li class=' list-group-item mt-4'>");

            listItem.append(
                $("<h2>").text(notesData[i].title),
                $("<h2>").text(notesData[i].text)
            );
            notesList.append(listItem);
        }
}