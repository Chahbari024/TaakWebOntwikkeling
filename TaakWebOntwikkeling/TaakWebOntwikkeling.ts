const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);

function viewAllData(data) {
    console.log('All data:');
    data.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
    });
}

function filterById(data, id) {
    const obj = data.find(item => item.id === id);

    if (obj) {
        console.log(`ID: ${obj.id}`);
        console.log(`Name: ${obj.name}`);
        console.log(`Description: ${obj.long_description}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Active: ${obj.is_active}`);
        console.log(`Birth Date: ${obj.birth_date}`);
    } else {
        console.log('No matching ID!');
    }
}

function main() {
    while (true) {
        console.log('JSON Viewer');
        console.log('1. View all data');
        console.log('2. Filter by ID');
        console.log('3. Exit');

        let choice = readlineSync.question('Enter your choice: ');

        switch (choice) {
            case '1':
                viewAllData(data);
                break;
            case '2':
                let id = readlineSync.question('Enter the ID: ');
                filterById(data, id);
                break;
            case '3':
                return;
            default:
                console.log('Invalid choice!');
        }
    }
}

main();
