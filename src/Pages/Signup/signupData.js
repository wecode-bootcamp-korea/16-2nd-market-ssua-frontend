const signupData = [
  {
    id: 1,
    title: "이메일",
    name: "email",
    type: "type",
    placeholder: "예: marketkurly@kurly.com",
    button: "중복확인",
    address: "주소검색",
    guide: "* 이메일 입력 ",
  },
  {
    id: 2,
    title: "비밀번호",
    name: "password",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    button: "중복확인",
    address: "주소검색",
    guide: "* 8자이상 이상 입력",
  },
  {
    id: 3,
    title: "비밀번호확인",
    name: "repassword",
    type: "password",
    placeholder: "비밀번호를 한번 더 입력해주세요",
    button: "중복확인",
    address: "주소검색",
    guide: "* 비밀번호 재입력",
  },
  {
    id: 4,
    title: "이름",
    name: "name",
    type: "type",
    placeholder: "이름을 입력해주세요",
    button: "중복확인",
    address: "주소검색",
  },
  {
    id: 5,
    title: "주소",
    name: "address",
    type: "type",
    placeholder: "이름을 입력해주세요",
    button: "중복확인",
    address: "주소검색",
  },
];

export default signupData;

export const INVALID_TEXT = {
  email: "* 이메일 입력 ",
  password: "* 8자이상 이상 입력",
  repassword: "* 비밀번호 재입력",
};
