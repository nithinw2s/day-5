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
        "lastName": "Brown",
        "maidenName": "",
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
        "lastName": "Davis",
        "maidenName": "",
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



// console.log(id, firstName, color)

for (let i=0; i<users.length; i++) {
    const tbody = document.querySelector('tbody')
    outdata = users[i]
    let {id, firstName, age, gender, hair:{color} }=outdata ;
    console.log(id, firstName, age, gender, color)
    const row = document.createElement('tr');
        row.innerHTML = `
          <td>${id}</td>
          <td>${firstName}</td>
          <td>${age}</td>
          <td>${gender}</td>
          <td>${color}</td>
          

        `;
        tbody.appendChild(row);
}