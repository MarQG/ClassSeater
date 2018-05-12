$(document).ready(function(){
    const students = [
        "Arif Aliyev",
        "Basavaraja Bommala",
        "Ben You",
        "Benjamin Benson",
        "Daniel Randazzo",
        "Darryl Forgenie",
        "David Tran",
        "Devin North",
        "Enrique Salas",
        "Everard Santamarina",
        "HoangAnh Luu",
        "Hunter Christensen",
        "Irina Machado",
        "Ivan Pawelek",
        "Jean-Jacques Bastien",
        "Jordan Vera",
        "Joshua Willems",
        "Med Wasfy",
        "Melanie Rose",
        "Melinh Mai",
        "Michael Pushkin",
        "Mohammed Chawla",
        "Olisaemelie Anyaegbu",
        "Osman Naseer",
        "Preston Edwards",
        "Raul Sanchez",
        "Ruobin Zhao",
        "Stephen Boman",
        "Thomas Sampson"
    ];

    let groups =[];

    shuffleStudents = (array) => {
        for(let i = array.length - 1; i >= 0; i-- ){
            let j = Math.floor(Math.random() * ( i + 1) );

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    createGroups = (array) => {
        let parsedGroup = array.map((student, index, arr) => {
            return (index % 5) === 4 && index !== 0 ?  student + "\n" : index === array.length -1 ? student : student + ",";
        });

        let finalGroups = parsedGroup.join("").split("\n");

        return finalGroups.map((group) => group.split(","))

    }

    generateGroupsHtml = (array, index) => {
        let newCol = $("<div>");
        newCol.addClass("col-md-4");
        let cardDiv = $("<div>");
        cardDiv.addClass("card");
        cardDiv.append(`<div class="card-header">Table ${index + 1}</div>`);
        let newUl = $("<ul>");
        newUl.addClass("list-group list-group-flush");
        array.forEach((item) => {
            newUl.append(`<li class="list-group-item">${item}</li>`);
        });
        cardDiv.append(newUl);
        newCol.append(cardDiv);
        return newCol;
    }

    displayGroups = (view) => {
        groups = shuffleStudents(students);
        groups = createGroups(groups);
        console.log(groups)
        groups.forEach((group, index) => {
            view.append(generateGroupsHtml(group, index));
        });
    }

    let view = $("#main");

    displayGroups(view);
});