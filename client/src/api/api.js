import axios from 'axios';

const API_URL = 'http://localhost:5012/api'; // Update with your actual backend URL

export const getCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/courses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export const createCourse = async (courseData) => {
    try {
        const response = await axios.post(`${API_URL}/courses`, courseData);
        return response.data;
    } catch (error) {
        console.error('Error creating course:', error);
        throw error;
    }
};
