// menuList.js
import instance from "./config";

export const menuList = async () => {
    try {
        const { data } = await instance.get('/menu');
        return data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu menu:", error);
        return [];  // Trả về một mảng trống khi có lỗi
    }
};