import User from '../../models/user'

export function addPeople() {
  let add_people = document.getElementsByClassName("add-people-title")[0];
  add_people.addEventListener("click", (e) => {
    console.log(add_people);
  });
}
export function selectAllBox() {
  let userCheckBox = document.querySelectorAll('[name="selectAllUser[]"]');
  userCheckBox.forEach((user) => arrId.push(user.id));
  let ele = document.getElementById("checkbox-all");
  let isSelectAll = ele.checked;
  //
  let deleteUser = document.getElementsByClassName("delete-people-title")[0];
  let updateUser = document.getElementsByClassName("update-people-title")[0];
  if (isSelectAll) {
    userCheckBox.forEach((item) => (item.checked = true));
    deleteUser.disabled = false;
    updateUser.disabled = false;
  } else {
    userCheckBox.forEach((item) => (item.checked = false));
    deleteUser.disabled = true;
    updateUser.disabled = true;
  }
}
export const test = 123;
export function myCheck(value) {
  let userCheckBox = document.querySelectorAll('[name="selectAllUser[]"]');
  let countUser = document.querySelectorAll(
    '[name="selectAllUser[]"]:checked'
  ).length;
  let deleteUser = document.getElementsByClassName("delete-people-title")[0];
  let updateUser = document.getElementsByClassName("update-people-title")[0];
  if (countUser != 0) {
    deleteUser.disabled = false;
    updateUser.disabled = false;
  } else {
    deleteUser.disabled = true;
    updateUser.disabled = true;
  }
  let isChecked = userCheckBox.length === countUser;
  if (isChecked) {
    document.getElementById("checkbox-all").checked = true;
  } else {
    document.getElementById("checkbox-all").checked = false;
  }
  let val = document.getElementById(value).checked;
}
export function cancelBtn() {
  let deleteForm = document.getElementsByClassName("form-alert")[0];
  deleteForm.style.display = "none";
}

export function deletePeople() {
  let deleteForm = document.getElementsByClassName("form-alert")[0];
  deleteForm.style.display = "block";
}
export function deleteBtn() {
  arrId.forEach((id) => {
    User.findOne({ ma_nhan_khau: id }, (err, user) => {
      if (err) throw err;
      console.log(user.ten_nhan_khau);
    });
  });
}
export function check() {
    alert('abc');
}

