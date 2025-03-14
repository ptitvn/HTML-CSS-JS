const company = {

    name: "RikkeiSoft",

    location: "Hà Nội",

    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ]

};
console.log("Tên công ty là"+" "+company.name);
console.log("Tên công ty là"+" "+company.location);
company.employees.forEach(employees => {
    console.log(employees.name+" "+employees.position);
    console.log();

})

