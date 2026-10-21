const user = {
    id: 101,
    name: "patrick",
    age: 12
};
export const userMapper = {
    convert(user) {
        return {
            id: String(user.id),
            name: user.name,
            age: user.age
        };
    }
};
const result = userMapper.convert(user);
console.log(result);
//# sourceMappingURL=user.mapper.js.map