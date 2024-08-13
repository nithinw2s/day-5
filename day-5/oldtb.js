
const Data = {
    "todos": [
        {
            "id": 1,
            "todo": "Do something nice for someone I care about",
            "completed": true,
            "userId": 26
        },
        {
            "id": 2,
            "todo": "Memorize the fifty states and their capitals",
            "completed": false,
            "userId": 48
        },
        {
            "id": 3,
            "todo": "Watch a classic movie",
            "completed": false,
            "userId": 4
        },
        {
            "id": 4,
            "todo": "Contribute code or a monetary donation to an open-source software project",
            "completed": false,
            "userId": 48
        },
        {
            "id": 5,
            "todo": "Solve a Rubik's cube",
            "completed": false,
            "userId": 31
        },
        {
            "id": 6,
            "todo": "Bake pastries for me and neighbor",
            "completed": false,
            "userId": 39
        },
        {
            "id": 7,
            "todo": "Go see a Broadway production",
            "completed": false,
            "userId": 32
        }
    ],
    "total": 150,
    "skip": 0,
    "limit": 30
}

const users = [
    {
        "id": 1,
        "firstName": "Emily",
        "age": 28,
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "hair": {
            "color": "Brown",
            "type": "Curly"
        }
    },
    {
        "id": 2,
        "firstName": "Michael",
        "age": 35,
        "gender": "male",
        "email": "michael.williams@x.dummyjson.com",
        "phone": "+49 258-627-6644",
        "hair": {
            "color": "Green",
            "type": "Straight"
        }
    },
    {
        "id": 3,
        "firstName": "Sophia",
        "age": 42,
        "gender": "female",
        "email": "sophia.brown@x.dummyjson.com",
        "phone": "+81 210-652-2785",
        "hair": {
            "color": "White",
            "type": "Wavy"
        }

    },
    {
        "id": 4,
        "firstName": "James",
        "age": 45,
        "gender": "male",
        "email": "james.davis@x.dummyjson.com",
        "phone": "+49 614-958-9364",
        "hair": {
            "color": "Blonde",
            "type": "Straight"
        }

    }

]

let [{id, firstName, age, gender, hair:{color} }]=users

console.log(id, firstName, color)

for (let mydata in users) {
    outdata = users[mydata]
    console.log(outdata)
}





function generateTable() {
    const tbody = document.querySelector('#todoTable tbody');
    tbody.innerHTML = ''; // Clear existing table rows

    users.forEach(value => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${value.id}</td>
          <td>${value.firstName}</td>
          <td>${value.age}</td>
          <td>${value.gender}</td>
          

        `;
        tbody.appendChild(row);
    });
}

// Call the function to generate the table
generateTable();
