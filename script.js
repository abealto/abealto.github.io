let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);

        console.log(gitObject);


        for (let i = 0; i < gitObject.length; i++) {
            
            console.log(gitObject[i].name);

            const li = document.createElement("li");

            li.innerHTML = gitObject[i].name;

            document.getElementById("git1").appendChild(li)

        }
        

    }
};

gitHubRequest.open("GET", "https://api.github.com/users/abealto/repos", true);
gitHubRequest.send();