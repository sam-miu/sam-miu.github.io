$(function() {
    $("#confirm").click(fetchContents);
});

function fetchContents() {
    let userId = $("#userId").val();
    let api = "https://jsonplaceholder.typicode.com";
    let filter = "/users"
    let param = "?id="
    //Fetch User Info
    $.ajax({
        url: api + filter + param + userId,
        method: "GET",
        dataType: "json",
        success: function(data) {
            const user = data[0];
            var name = "<p>Name: " + user.name + "</p>";
            var email = "<p>Email: " + user.email + "</p>";

            var address = "";
            const keys = Object.keys(user.address);
            for (const key of keys) {
                if (key === "geo") {
                    const geos = Object.keys(user.address.geo);
                    for (const geo of geos) {
                        const value = user.address.geo[geo];
                        address += "<p>" + geo + ": " + value + "</p>";
                    }
                } else {
                    const value = user.address[key];
                    address += "<p>" + key + ": " + value + "</p>";
                }
            }
            $("#userInfo").html(name + email + address);
        },
        error: function(error) {
            console.error("Error:", error);
        },
    });

    fetchPosts();
}

function fetchPosts() {
    let userId = $("#userId").val();
    let api = "https://jsonplaceholder.typicode.com";
    let filter = "/posts"
    let param = "?userId="
    //Fetch Posts
    $.ajax({
        url: api + filter + param + userId,
        method: "GET",
        dataType: "json",
        success: function(posts) {
            let allPosts = "";
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                let postId = "<h3>postId: " + post.id + "</h3>";
                let title = "<p>Title: " + post.title + "</p>";
                let body = "<p>Body: " + post.body + "</p>";
                let cmtBtn = "<button onClick=\"" + "fetchComments(" + post.id + ")" + "\">" + "see comment</button>"
                let comments = "<p id=\"" + post.id + "\">" + "</p>"
                allPosts += postId;
                allPosts += title;
                allPosts += body;
                allPosts += cmtBtn;
                allPosts += comments;
                $("#posts").html(allPosts);
            }
            $("#posts").html(allPosts);
        },
        error: function(error) {
            console.error("Error:", error);
        },
    });
}

function fetchComments(postId) {
    let api = "https://jsonplaceholder.typicode.com";
    let filter = "/comments"
    let param = "?postId="
    //Fetch Comments
    $.ajax({
        url: api + filter + param + postId,
        method: "GET",
        dataType: "json",
        success: function(comments) {
            let allComments = "";
            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                let commentId = "<p>Comment Id: " + comment.id + "</p>";
                let name = "<p>Name: " + comment.name + "</p>";
                let email = "<p>Email: " + comment.email + "</p>";
                let body = "<p>Body: " + comment.body + "</p>";
                allComments += "<p>-------------------------------------------</p>";
                allComments += commentId;
                allComments += name;
                allComments += email;
                allComments += body;
            }
            $("#" + postId).html(allComments);
        },
        error: function(error) {
            console.error("Error:", error);
        },
    });
}