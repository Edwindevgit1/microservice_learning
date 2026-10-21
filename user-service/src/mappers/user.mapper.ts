const user = {
  id:101,
  name:"patrick",
  age:12
}
interface User{
  id:number,
  name:string,
  age:number
}
interface UserResponse{
  id:string,
  name:string,
  age:number
}
export const userMapper = {
  convert(user:User):UserResponse {
    return {
      id:String(user.id),
      name:user.name,
      age:user.age
    }
  }
}
const result = userMapper.convert(user)
console.log(result)