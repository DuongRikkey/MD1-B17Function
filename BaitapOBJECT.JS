// // let staff = {
// //     id: 1,
// //     name: "Ronaldo",
// //     age: 30,
// //     salary: 1000,
// // };

// // let company = [];
// // company.push(staff);
// // console.log(company);
// // let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
// // let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));

// // let findIndex = company.findIndex((e) => inputUpdate == e.id);
// // console.log(findIndex);

// // company[findIndex].salary = updateSalary;
// // console.log(company);
// // let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
// // let findIndex = company.findIndex((e) => inputDelete == e.id);
// // company.splice(findIndex, 1);
// // console.log(company);
// // Bài tập thực hành 5:
// // let staff = {
// //     id: 10,
// //     name: "Duong",
// //     age: "23",
// //     salary: "2000",
// // };
// // let staff2 =
// // {
// //     id: 15,
// //     name: "Duy",
// //     age: "24",
// //     salary: "2008",
// // }
// // let company = [];
// // company.push(staff);
// // company.push(staff2);
// // console.log(company);
// // let InputID = Number(prompt("Mời bạn nhập ID ạ"));
// // let InputSalary = Number(prompt("Nhập lương up nhé"));

// // let findIndex = company.findIndex(function (element, index) {
// //     return element.id === InputID;

// // })
// // console.log(findIndex);
// // company[findIndex].salary = InputSalary;
// // console.log(company);

// // Tự mở rộng
// // let staff = {
// //     id: 10,
// //     name: "Duong",
// //     age: "23",
// //     salary: "2000",
// // };
// // let staff2 =
// // {
// //     id: 15,
// //     name: "Duy",
// //     age: "24",
// //     salary: "2008",
// // }
// // let company = [];
// // company.push(staff);
// // company.push(staff2);
// // // console.log(company);

// // let fname = prompt("Mời bạn nhập tên nhé")
// // let InputID = Number(prompt("Mời bạn nhập ID ạ"));
// // let InputSalary = Number(prompt("Nhập lương up nhé"));

// // let findIndex = company.findIndex(function (element, index) {
// //     return element.name = fname;

// // })
// // console.log(findIndex);
// // company[findIndex].id = InputID;
// // company[findIndex].salary = InputSalary;
// // console.log(company)

// // let DeleteID = Number(prompt("Id muốn xóa nhé"))

// // let findIndexd = company.findIndex(function (element, index) {
// //     return element.id === DeleteID
// // })
// // console.log(findIndexd);

// // company.splice(findIndexd, 1)
// // console.log(company);

// // Bài tổng hợp thực hành 5
// // let staff = {
// //     id: 10,
// //     name: "Duong",
// //     age: "23",
// //     salary: "2000",
// // };
// // let staff2 =
// // {
// //     id: 15,
// //     name: "Duy",
// //     age: "24",
// //     salary: "2008",
// // }
// // let company = [];
// // company.push(staff);
// // company.push(staff2);
// // // console.log(company);
// // while (true) {

// //     let text = prompt("Mời bạn nhập C/R/U/D").toLocaleLowerCase();

// //     if (text === "c") {
// //         let newName = prompt("Mời bạn nhập tên đấy nhé");
// //         let newage = Number(prompt("Mời bạn nhập tuổi"));
// //         let newsalary = Number(prompt("Mời bạn nhập lương nhé"));

// //         let newStaff = {
// //             id: Math.floor(Math.random() * 1000),
// //             fname: newName,
// //             age: newage,
// //             salary: newsalary,
// //         };

// //         company.push(newStaff);
// //         console.log(company)

// //     }
// //     else if (text === "u") {
// //         let InputID = Number(prompt("Mời bạn nhập số Id"));
// //         let Nsalary = Number(prompt("Mời bạn nhập vào lương nè"));
// //         let findIndex = company.findIndex(function (element, index) {
// //             return element.id === InputID
// //         })
// //         company[findIndex].salary = Nsalary
// //         console.log(company);
// //     }

// //     else if (text === "d") {
// //         let DeleteID = Number(prompt("Mời bạn nhập ID muốn xóa"))
// //         let findIndex = company.findIndex(function (element, index) {
// //             return element.id === DeleteID;
// //         })
// //         company.splice(findIndex, 1)
// //         console.log(company);
// //     }
// //     else if (text === "r") {
// //         for (let key in company) {
// //             console.log(`${key}:${company[key]}`)
// //         }
// //     }

// //     else {
// //         console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
// //         break;
// //     }
// // }

// // ----------------------------------------------
// // Bài thực hành 2:
// // ----------------------------------------------
// // const todoList = [
// //     { id: 1, todo: "Have breakfast", completed: false },
// //     { id: 2, todo: "Have breakfast", completed: true },
// //     { id: 3, todo: "Have breakfast", completed: false },
// // ];

// // function addTodo(todo) {
// //     let newId = 0;
// //     for (let i = 0; i < todoList.length; i++) {
// //         newId - todoList.length + 1;
// //     }
// //     let newTodo = {
// //         id: newId,
// //         todo: todo,
// //         completed: false,
// //     };
// //     todoList.push(newTodo);
// // }

// // addTodo("Đi tắm");
// // console.log(todoList);
// // function updateComplete(id) {
// //     let findIndex = todoList.findIndex((e) => {
// //         return id === e.id;
// //     });
// //     todoList[findIndex].completed = true;
// // }

// // updateComplete(2);
// // console.log(todoList);
// // function removeTodo(id) {
// //     let check = -1;
// //     for (let i = 0; i < todoList.length; i++) {
// //         if (id == todoList[i].id) {
// //             check = i;
// //         }
// //     }
// //     todoList.splice(check, 1);
// // }

// // removeTpodo(2);
// // console.log(todoList);
// //Bài tập thực hành 3

// // let player = {
// //     name: "DuongCR7",
// //     age: 23,
// //     job: "DEV",
// //     club: "Real",
// // }

// // player.email = "duong@gmail.com"
// // console.log(player);

// // for (let key in player) {
// //     console.log(`${key}:${player[key]}`);

// // }
// // player["club"] = "Mu"
// // console.log(player);

// // delete player.age;
// // console.log(player);

// // Bài Tổng hợp
// // let products = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
// // let findindex = products.findIndex(function (element, index) {
// //     return element.id === 2

// // })
// // console.log(findindex);

// // products.splice(findindex, 1);
// // console.log(products);
// // let findindex2 = products.findIndex(function (element, index) {
// //     return element.id === 3

// // })
// // products[findindex2].count = 0;
// // console.log(products);
// // let keyword = "Butter"
// // let foundkeyword = products.find(function (element) {
// //     return element.name.toLowerCase() === keyword.toLowerCase()

// // })
// // if (foundkeyword) {
// //     console.log(`Thông tin sp có tên là ${keyword}`);
// //     console.log(foundkeyword);

// // } else {
// //     console.log('k có dữ liệu');

// // // }

// // class Dog {
// //     constructor(name, speed) {
// //         this.name = name;
// //         this.speed = speed;
// //     }

// //     bark() {
// //         console.log("Woof! Woof!");
// //     }

// //     catchCat(cat) {
// //         if (this.speed > cat.speed) {
// //             console.log(`${this.name} caught ${cat.name}!`);
// //         } else {
// //             console.log(`${this.name} couldn't catch ${cat.name}...`);
// //         }
// //     }
// // }

// // class Cat {
// //     constructor(name, speed) {
// //         this.name = name;
// //         this.speed = speed;
// //     }
// // }

// // // Sử dụng các class đã định nghĩa

// // // Tạo một con chó
// // let dog = new Dog("Buddy", 30);

// // // Tạo một con mèo
// // let cat = new Cat("Whiskers", 25);

// // // Cho chó sủa
// // dog.bark();

// // // Chó bắt mèo
// // dog.catchCat(cat);
// // // Câu 3:
// // Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại. Tạo class Admin kế thừa từ class User. Thêm thuộc tính “role” vào 2 đối tượng Admin (value=1) và User (value =0)

// // Tạo danh sách người dùng (dạng mảng) và thêm vào 3 user, 1 admin

// // Xóa người dùng thông qua tên của họ (không xóa được admin)

// // Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)

// // Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra

// // class User {
// //   constructor(id, name, email, address, phone, role = 0) {
// //     this.id = id;
// //     this.name = name;
// //     this.email = email;
// //     this.address = address;
// //     this.phone = phone;
// //     this.role = role; // 0 là user, 1 là admin
// //   }
// // }

// // // Tạo danh sách người dùng (mảng) và thêm vào 3 user và 1 admin
// // let users = [];

// // // Thêm 3 user vào danh sách
// // let user1 = new User(
// //   1,
// //   "John Doe",
// //   "john@example.com",
// //   "123 Main St, City",
// //   "123-456-7890"
// // );
// // let user2 = new User(
// //   2,
// //   "Jane Smith",
// //   "jane@example.com",
// //   "456 Elm St, Town",
// //   "456-789-0123"
// // );
// // let user3 = new User(
// //   3,
// //   "Mike Johnson",
// //   "mike@example.com",
// //   "789 Oak St, Village",
// //   "789-012-3456"
// // );
// // users.push(user1, user2, user3);

// // // Thêm 1 admin vào danh sách
// // let admin1 = new User(
// //   4,
// //   "Admin One",
// //   "admin1@example.com",
// //   "Admin Address",
// //   "987-654-3210",
// //   1
// // );
// // users.push(admin1);

// // function deleteUsername(name) {
// //   let index = users.findIndex(function (user) {
// //     return user.name === name && user.role !== 1;
// //   });
// //   users.splice(index, 1);
// // }
// // deleteUsername("Jane Smith");
// // console.log(users);
// // Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)
// // function changeUser(namec){
// //     let index2 = user
// // // }
// // function updateUserById(id, updatedInfo) {
// //     let userToUpdate = users.find(user => user.role !== 1 && user.id === id); // Tìm user không phải là admin và có id tương ứng
// //     if (userToUpdate) {
// //         Object.assign(userToUpdate, updatedInfo);
// //         console.log(`Thông tin người dùng có id ${id} đã được cập nhật.`);
// //         console.log(userToUpdate);
// //     } else {
// //         console.log(`Không tìm thấy người dùng có id ${id} hoặc bạn không có quyền sửa thông tin admin.`);
// //     }
// // }
// // function updateUserById(id, updatedInfo) {
// //     let userToUpdate = users.find(user => user.role !== 1 && user.id === id); // Tìm user không phải là admin và có id tương ứng
// //     Object.assign(userToUpdate, updatedInfo)
// // }

// // // Ví dụ: Cập nhật thông tin người dùng có id 2
// // updateUserById(3, { name: "Jane Be", email: "jane.brown@example.com", phone: "987-654-3210" });
// // console.log(users)

// // // Thêm một nick admin vào mảng danh sách người dùng
// // let admin2 = new User(5, "Admin Two", "admin2@example.com", "Admin Address 2", "123-456-7890", 1);
// // users.push(admin2);

// // function findAllAdmins() {
// //     let admins = users.filter(function (user) {
// //         return user.role === 1
// //     });
// //     console.log("Danh sách các tài khoản admin:");
// //     admins.forEach(function (admins) {
// //         console.log(admins);
// //     });
// // }

// // // In ra danh sách các tài khoản admin
// // findAllAdmins();

// // Bài 5
// // let stores = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
// // let carts = []
// // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E

// // C – Cho người dùng nhập vào tên sản phẩm muốn mua.Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// // R – In ra toàn bộ các sản phẩm trong stores và carts

// // U – Hỏi người dùng vị trí update trong carts.Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo.Update xong in lại stores và carts

// // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại

// // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

// //B1: Xác định yêu cầu bái toán
// //-Cho hai mảng dữ liệu
// //-Yêu cầu viết chương trình nhập từ khóa, mỗi từ khóa sẽ thực hiện một việc gì đó, việc này sẽ có ảnh hưởng , việc này có ảnh hưởng đến dữ liệu trong hai mảng:
// // Bước 2: chữa bài



// // Bài tập cơ bản
// // Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên
// // let person = {
// //     fullname: "Duong Đinh",
// //     age: 23,
// //     job: "Develovper",
// //     address: {
// //         city: "HaNoi",
// //         street: "Kim Hoa",
// //     },
// //     score: [100, 100, 100],
// //     hobbie: ["football", " basketball"],


// // }
// // console.log(`fullname:${person.fullname}`);
// // console.log(`job:${person.job}`);
// // console.log(`address:${person.address}`);
// // console.log(`hobbie:${person.hobbie}`);
// // Object.keys(person);
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(Object.entries(person));
// // for (let hobby of person.hobbie) {
// //     console.log(`${person.fullname} love ${hobby}`);

// // }




// // Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền). Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
// let student = {
//     id: 1,
//     name: "Nguyen Van A",
//     gender: "nam",
//     age: 20,
//     mark: 8
// }
// class newStudent {
//     constructor(id, name, gender, age, mark) {
//         this.id = id;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//     }
// }
// const newst = new newStudent(2, "Đinh Duong", "nam", 23, 10)
// // console.log(newst);

// let students = [];
// students.push(newst);
// students.push(student);

// let findIndexx = students.findIndex(function (element) {
//     return element.id === 2
// })
// console.log(findIndexx);
// console.log(students[findIndexx]);



// // // Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và in ra toàn bộ thông tin của học sinh đó
// console.log(students)
// let max = students[0].mark
// for (let i = 0; i < students.length; i++) {
//     if (max < students[i].mark) {
//         max = student[i].mark
//     }
// }
// console.log(max);

// // let DTB = students.reduce((a, b) => {
// //     return a.mark > b.mark ? a : b
// // })
// // console.log(Object.values(DTB));


// // console.log(`Tên: ${highestAverageScoreStudent.name}`);
// // console.log(`Tuổi: ${highestAverageScoreStudent.age}`);
// // console.log(`Giới tính: ${highestAverageScoreStudent.gender}`)
// // Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ. Sau đó thêm vào mảng “students” (ở bài 2). Tính điểm trung bình của các học sinh trong mảng students trên. Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
// class newStudent2 {
//     constructor(id, name, gender, age, mark) {
//         this.id = id;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//     }
// }
// const new2 = new newStudent2(3, "Hai", "nữ", 40, 5)
// students.push(new2);
// console.log(students);
// let sum = 0
// for (i = 0; i < students.length; i++) {
//     sum = sum + student.mark

// }
// console.log(sum);
// let totalAverageScore = 0;
// students.forEach(function (student) {
//     totalAverageScore += students.mark
// });

// // let classAverageScore = totalAverageScore / students.length;
// // let DTB2 = sum / students.length
// // console.log(DTB2);

// // if (DTB2 > 7.5) {
// //     console.log("Lớp khá");
// // }
// // else if (DTB2 <= 7.5 && DTB2 >= 5) {
// //     console.log("Lớp trung bình");
// // }
// // else {
// //     console.log("Lớp yêu ");

// // }

// / / / //Xây dựng ưng dụng
// // // //Coi như dữ liệu được lấy thành công từ trên sever
// // // //Sever về phía client

// // // //Stores-kho lưu trữ dữ liệu
// // // //Có tên là stores ở trên sever

// // // let stores = [
// // //     { id: 1, name: "Milk", count: 70 },
// // //     { id: 2, name: "Yakult", count: 100 },
// // //     { id: 3, name: "Butter", count: 100 },
// // // ];
// // // //Kho lữu trữ liệu là carts
// // // let carts = [{ id: 1, name: "Milk", count: 30 }];
// // // // Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// // // // C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// // // // R – In ra toàn bộ các sản phẩm trong stores và carts

// // // // U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts

// // // // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// // // // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
// // // let loop = true;
// // // while (loop) {
// // //     let command = prompt("Mời bạn nhập vào C/R/U/D/E để tiến hành mua hàng")


// // //     switch (command) {
// // //         case "C":
// // //             let productname = prompt("Mời bạn nhập tên sản phẩm muốn mua:")
// // //             let findindex = stores.findIndex(function (element, index) {
// // //                 return element.name === productname;

// // //             })
// // //             if (findindex == -1) {
// // //                 console.log(`Không tìm thấy sản phẩm ${productname} mời bạn tiếp tục mua hàng`);

// // //             }
// // //             else {
// // //                 let cartIndex = carts.findIndex(function (element, index) {
// // //                     return element.name === productname;
// // //                 })
// // //                 if (cartIndex === -1) {
// // //                     //Push
// // //                     let product = stores[findindex];
// // //                     //Error
// // //                     //product.count=1;
// // //                     // carts.push(product)

// // //                     // fixed
// // //                     let cartProduct = { ...product, count: 1 }//{name,id,count,count:1}
// // //                     carts.push(cartProduct);
// // //                 }
// // //                 else {
// // //                     //+1
// // //                     carts[cartIndex].count = carts[cartIndex].count + 1;

// // //                 }
// // //                 stores[findindex].count = stores[findindex].count - 1;

// // //             }
// // //             displayProduct(stores);
// // //             displayProduct(carts);

// // //             break;
// // //         case "R":
// // //             console.log("Sản phẩm trong store");

// // //             displayProduct(stores);
// // //             console.log("Giỏ hàng của bạn");
// // //             if (carts.length === 0) {
// // //                 console.log("Giỏ hàng của bạn chưa có gì !Mời bạn tiếp tục mua hàng");//Milk,Yakult....

// // //             } else {
// // //                 displayProduct(carts);
// // //             }


// // //             break;
// // //         case "U":
// // //             console.log("Sản phẩm nằm trong store");
// // //             displayProduct(stores);
// // //             console.log("Sản phẩm trong carts");
// //             displayProduct(carts);