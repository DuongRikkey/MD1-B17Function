// // for..0f

let students = [" Chi", "Hải", "Duong", "Nghĩa"];

// for (let student of students) {
//     // console.log(students.indexOf(student), student);
// console.log(student);
// }



// // ---------------------------------------------
// // // for..in
// // --------------------------------------------
// for (let index in students) {
//     console.log(index, students[index])
// }
// for(let icon in students){
//     console.log(icon,students[icon]);

// }
// // ----------------------------------------------------
// // // forEach()
// // // ------------------------------------------------------
// students.forEach(function (element, i) {
//     console.log(i, element);
// });
// // 

// --------------------------------------------------
// // map()
// // -----------------------------------------------------
// // Đồng thời áp dụn 1 bộ công thưc nào đó trong toàn bộ các phần tử có trong mảng
// //Toàn bộ sinh viên đều đi thi
// let ARR = students.map(function (element, index) {
//     return `${element} thi hackathon`
// });
// console.log(ARR);

// let A = ["Duong", "Duy", "Minh"]
// let ARR = A.map(function (element, index) {
//     return `${index}: ${element} ngoan`
// })
// console.log(ARR)
// // // ---------------------------------------------------
// // filter() lọc theo điều kiẹn
// // ------------------------------------------------------
// // VD
let duongfilter = students.filter(function (element, index) {
    return element.endsWith("g") === true

})
console.log(duongfilter);

// // find-tìm kiếm phần tử tmdk đầu tiên
// let duongfilter = students.find(function (element, index) {
//     return element.startsWith("D") === true
// })
// console.log(duongfilter);

// // find-index tìm kiếm chỉ số của phẩn tử tmdk (dung hêt file đưa ra thêm chỉ số index)
// let student12 = ["Chi", "Hải", "Duong", "Nghĩa"];
// let duongfilter = student12.findIndex(function (element, index) {
//     return element.startsWith("C") === true
// })
// console.log(duongfilter);

// // ------------------------------------------------------------------------
// // reduce- Giảm, cô động các phần tử có trong mảng thành 1 thể hợp nhất
// // ------------------------------------------------------------------------

// let numbers = [10, 20, 30, 50, 90, 200]
// //Tính tổng, tính tích, tính TBC, tính ...
// // Công thức: numbers.reduce(function (acc,curr) {}, initialValue)
// //initialValue giá trị khởi tạo
// //function nhận hai tham số (acc,cur)
// // acc-accumulator(Biến tích lũy)
// //acc giong sum
// // cur-current Value(Gía triị của phần tử hiện tại đang duyệt qua)
// //giong element dai dien phan tu ta tien hanh duyet qu(cur)
// // initialValue-Gía trị kjởi tạo dành cho biến tích lũy
// let total = numbers.reduce(function (acc, cur) {
//     acc = acc + cur;
//     return acc;
// }, 0) //let acc=0
// console.log(total);
// //Tính nhân
// let total2 = numbers.reduce(function (acc, cur) {
//     acc = acc * cur;
//     return acc;
// }, 1) //let acc=1
// console.log(total);
// // Tính TBC
// let total3 = numbers.reduce(function (acc, cur) {
//     acc = acc + cur;
//     return acc;
// }, 0) //let acc=0
// console.log(total3 / numbers.length);
// let n = numbers.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }
//     , 0)
// console.log(n);


// // ------------------------------------------------------------------------
// // Some ,every
// // ------------------------------------------------------------------------
// //some
// let checkStartWithA = students.some(function (element, index) {
//     return element.startsWith("D") === true;

// })//true (ít nhất 1)
// console.log(checkStartWithA);

// // ---------------------------------
// //Every
// // ------------------------------------
// // let checkStartWithA = students.every(function (element, index) {
// //     return element.startsWith("A") === true;
// // })
// // console.log(checkStartWithA);//false
// // --------------------------------
// //Sort
// // ----------------------------------
// //-90,-30,10,20,50,200
// numbers.sort(function (a, b) {
//     {
//         return a - b; //Tăng dần
//     }
// })
// console.log(numbers);
// numbers.sort(function (a, b) {
//     {
//         return b - a; //Giamr dần
//     }
// })
// console.log(numbers);



// //a,b 2 cặp số bên cạnh nhau
// // nó thay đổi trực tiếp
// // sort sẽ thay đổi trực tiếp luôn còn lại thì khoong

// // ----------------------------------------------------------------------------------------------------------------------
// //   Object
// // ----------------------------------------------------------------------------------------------------------------------      // tên: Duong
// // tuôi:23
// //quê quán: Hà Nôiị
// //tình trạng hôn nhân: độc thân
// //con cái:0
// //dz:10d

// // let person = {
// //     name: "Duong",
// //     age: 23,
// //     hometown: "Ha Noi",
// //     married: true,
// //     children: 2,
// //     beautìul: "dont know",
// //     hobbies: ["playing", "swimming"],

// // };

// let person = {
//     name: "Minh", //Thuộc tính name
//     age: 31,//Thuộc tính age
//     hometown: "Thanh Hoa",// Thuộc tính hometown
//     married: true,
//     children: 1,
//     beautiful: "dont know",
//     hobbies: ["playstation", "swimming"],
// };
// console.log(person);

// person.job = ["Developer", "Nurse", "Teacher"]

// console.log(person);


// //Read One-lấy ra giá thị của thuộc tính
// // Cách 1
// console.log(`${person.name} đi học thôi`)
// // cách 2
// console.log(`${person["name"]} đi học thôi`)      //"Minh"


// for (let hoboy of person.hobbies) {
//     console.log(`${person.name} love ${hoboy}`)
// }
// for (let hobby of person.hobbies) {
//     console.log(`${person.name} love ${hobby}`)
// };





//Read-All lấy ra toàn bộ values
//for..in
// for (let key in person) {
//     // key;//"name","age"
//     // //und
//     // person[key];//person["name"],person["age"]]

//     console.log(`${key}:${person[key]}`);
// }
// // Mỗi khi muốn lấy ra thuộc tính trong vòng lặp for... in sử dụng ngoặc vuông...


// //Update-Cập nhật giá trị lại của thuộc tính


// person.age = 26;
// // person["age"]=27;
// console.log(person)


// //Delete - Xóa đi một thuộc tính
// delete person.age
// console.log(person);

// --------------------------------------------------------
// let students = [
//     {
//         id: "SV0001",
//         name: "Hai yen",
//         age: 25,
//     },
//     {
//         id: "SV0001",
//         name: "Chi Linh",
//         age: 18,
//     },
//     {
//         id: "SV000",
//         name: "Chi Li",
//         age: 19,
//     },
// ];
// C1
// console.log("Sinh vien", students[0].name);
// console.log("Tuoi", students[1].age);

// //C2 nhanh hơn dùng vòng lặp for in và for of
// for (let student of students) {
//     console.log(student.age);
// }

// for (let student of students) {
// console.log(student,students[student].age);
// }// Cách 2


// const day = new Date();
// console.log(day.getMonth());


